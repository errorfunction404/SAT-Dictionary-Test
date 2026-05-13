import json
import os
import random
import sqlite3
from datetime import timedelta
from functools import wraps
from pathlib import Path
from time import time

from flask import Flask, abort, flash, jsonify, redirect, render_template, request, session, url_for
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename

BASE_DIR = Path(__file__).resolve().parent
DATABASE_PATH = BASE_DIR / "database.db"
LESSON_DATA_PATH = BASE_DIR / "static" / "data" / "lessons.json"
AVATAR_DIR = BASE_DIR / "static" / "images" / "avatars"
ALLOWED_IMAGE_EXTENSIONS = {"png", "jpg", "jpeg", "webp", "gif"}
MIN_QUESTIONS = 5
MAX_QUESTIONS = 50
SECONDS_PER_QUESTION = 10

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "change-this-secret-key-before-production")
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(days=30)
app.config["MAX_CONTENT_LENGTH"] = 4 * 1024 * 1024
app.config["SESSION_COOKIE_HTTPONLY"] = True
app.config["SESSION_COOKIE_SAMESITE"] = "Lax"


def db_connection():
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    AVATAR_DIR.mkdir(parents=True, exist_ok=True)
    with db_connection() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                username TEXT NOT NULL UNIQUE COLLATE NOCASE,
                password_hash TEXT NOT NULL,
                avatar_path TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS lessons (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                lesson_key TEXT NOT NULL UNIQUE,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                image_path TEXT,
                unlock_at TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                external_id TEXT NOT NULL UNIQUE,
                lesson_id INTEGER NOT NULL,
                question_order INTEGER NOT NULL,
                word TEXT NOT NULL,
                prompt TEXT NOT NULL,
                options_json TEXT NOT NULL,
                correct_answer TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
                UNIQUE (lesson_id, question_order)
            );

            CREATE TABLE IF NOT EXISTS solved_questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                lesson_id INTEGER NOT NULL,
                question_id INTEGER NOT NULL,
                solved_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
                FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
                UNIQUE (user_id, question_id)
            );

            CREATE TABLE IF NOT EXISTS test_attempts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                lesson_id INTEGER NOT NULL,
                question_amount INTEGER NOT NULL,
                total_seconds INTEGER NOT NULL,
                score INTEGER NOT NULL,
                percent INTEGER NOT NULL,
                reason TEXT NOT NULL,
                progress_before INTEGER NOT NULL,
                progress_after INTEGER NOT NULL,
                progress_delta INTEGER NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS leaderboard_stats (
                user_id INTEGER PRIMARY KEY,
                completed_lessons INTEGER NOT NULL DEFAULT 0,
                average_percentage REAL NOT NULL DEFAULT 0,
                total_unique_solved INTEGER NOT NULL DEFAULT 0,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE INDEX IF NOT EXISTS idx_questions_lesson ON questions(lesson_id);
            CREATE INDEX IF NOT EXISTS idx_solved_user ON solved_questions(user_id);
            CREATE INDEX IF NOT EXISTS idx_attempts_user ON test_attempts(user_id);
            """
        )
        seed_lessons(conn)


def seed_lessons(conn):
    if not LESSON_DATA_PATH.exists():
        return
    payload = json.loads(LESSON_DATA_PATH.read_text(encoding="utf-8"))
    for lesson in payload.get("lessons", []):
        lesson_key = lesson["key"]
        image_path = f"images/{lesson.get('image') or ('lesson_' + lesson_key.replace('lesson', '') + '.png')}"
        conn.execute(
            """
            INSERT INTO lessons (lesson_key, title, description, image_path, unlock_at)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(lesson_key) DO UPDATE SET
                title = excluded.title,
                description = excluded.description,
                image_path = excluded.image_path,
                unlock_at = excluded.unlock_at
            """,
            (lesson_key, lesson["title"], lesson["description"], image_path, lesson.get("unlockAt")),
        )
        lesson_id = conn.execute(
            "SELECT id FROM lessons WHERE lesson_key = ?", (lesson_key,)
        ).fetchone()["id"]
        for question in lesson.get("questions", []):
            conn.execute(
                """
                INSERT INTO questions (
                    external_id, lesson_id, question_order, word, prompt, options_json, correct_answer
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(external_id) DO UPDATE SET
                    lesson_id = excluded.lesson_id,
                    question_order = excluded.question_order,
                    word = excluded.word,
                    prompt = excluded.prompt,
                    options_json = excluded.options_json,
                    correct_answer = excluded.correct_answer
                """,
                (
                    question["id"],
                    lesson_id,
                    question["order"],
                    question["word"],
                    question["prompt"],
                    json.dumps(question["options"], ensure_ascii=False),
                    question["correctAnswer"],
                ),
            )


def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return None
    with db_connection() as conn:
        return conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()


def public_user(user):
    if not user:
        return None
    return {
        "id": user["id"],
        "first_name": user["first_name"],
        "last_name": user["last_name"],
        "username": user["username"],
        "avatar_path": user["avatar_path"],
        "avatar_url": url_for("static", filename=user["avatar_path"] or "images/default_avatar.svg"),
    }


@app.context_processor
def inject_user():
    user = current_user()
    return {"current_user": user, "public_user": public_user(user)}


def login_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        if not session.get("user_id"):
            flash("Please log in to continue.", "warning")
            return redirect(url_for("login", next=request.path))
        return view(*args, **kwargs)

    return wrapped


def require_api_user():
    user = current_user()
    if not user:
        return None, (jsonify({"ok": False, "error": "Authentication required"}), 401)
    return user, None


def clean_text(value, max_length=80):
    return (value or "").strip()[:max_length]


def clamp_question_amount(value):
    try:
        parsed = int(value)
    except (TypeError, ValueError):
        parsed = 20
    return max(MIN_QUESTIONS, min(MAX_QUESTIONS, parsed))


def get_lesson(conn, lesson_key):
    return conn.execute("SELECT * FROM lessons WHERE lesson_key = ?", (lesson_key,)).fetchone()


def lesson_progress_map(user_id):
    if not user_id:
        return {}
    with db_connection() as conn:
        rows = conn.execute(
            """
            SELECT
                l.lesson_key,
                COUNT(q.id) AS total_questions,
                COUNT(sq.question_id) AS solved_questions
            FROM lessons l
            LEFT JOIN questions q ON q.lesson_id = l.id
            LEFT JOIN solved_questions sq ON sq.question_id = q.id AND sq.user_id = ?
            GROUP BY l.id
            ORDER BY l.id
            """,
            (user_id,),
        ).fetchall()
    progress = {}
    for row in rows:
        total = row["total_questions"] or 50
        solved = row["solved_questions"] or 0
        percent = min(100, int(round((solved / total) * 100))) if total else 0
        progress[row["lesson_key"]] = {
            "solved": solved,
            "total": total,
            "percent": percent,
            "completed": percent >= 100,
        }
    return progress


def recompute_leaderboard_stats(user_id, conn=None):
    owns_connection = conn is None
    if owns_connection:
        conn = db_connection()
    try:
        lessons = conn.execute("SELECT id FROM lessons ORDER BY id").fetchall()
        total_lessons = max(1, len(lessons))
        completed_lessons = 0
        total_unique_solved = 0
        percentage_sum = 0
        for lesson in lessons:
            total_questions = conn.execute(
                "SELECT COUNT(*) AS count FROM questions WHERE lesson_id = ?", (lesson["id"],)
            ).fetchone()["count"] or 50
            solved_count = conn.execute(
                """
                SELECT COUNT(*) AS count
                FROM solved_questions
                WHERE user_id = ? AND lesson_id = ?
                """,
                (user_id, lesson["id"]),
            ).fetchone()["count"]
            total_unique_solved += solved_count
            percent = min(100, round((solved_count / total_questions) * 100, 2)) if total_questions else 0
            percentage_sum += percent
            if percent >= 100:
                completed_lessons += 1
        average_percentage = round(percentage_sum / total_lessons, 2)
        conn.execute(
            """
            INSERT INTO leaderboard_stats (user_id, completed_lessons, average_percentage, total_unique_solved, updated_at)
            VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(user_id) DO UPDATE SET
                completed_lessons = excluded.completed_lessons,
                average_percentage = excluded.average_percentage,
                total_unique_solved = excluded.total_unique_solved,
                updated_at = CURRENT_TIMESTAMP
            """,
            (user_id, completed_lessons, average_percentage, total_unique_solved),
        )
        if owns_connection:
            conn.commit()
        return {
            "completed_lessons": completed_lessons,
            "average_percentage": average_percentage,
            "total_unique_solved": total_unique_solved,
        }
    finally:
        if owns_connection:
            conn.close()


def leaderboard_rows(limit=50):
    with db_connection() as conn:
        rows = conn.execute(
            """
            SELECT
                u.username,
                u.avatar_path,
                ls.completed_lessons,
                ls.average_percentage,
                ls.total_unique_solved
            FROM leaderboard_stats ls
            JOIN users u ON u.id = ls.user_id
            ORDER BY ls.completed_lessons DESC,
                     ls.average_percentage DESC,
                     ls.total_unique_solved DESC,
                     u.username ASC
            LIMIT ?
            """,
            (limit,),
        ).fetchall()
    return rows


def allowed_image(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_IMAGE_EXTENSIONS


@app.route("/")
def index():
    user = current_user()
    return render_template(
        "index.html",
        app_user=public_user(user),
        user_progress=lesson_progress_map(user["id"]) if user else {},
    )


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        first_name = clean_text(request.form.get("first_name"))
        last_name = clean_text(request.form.get("last_name"))
        username = clean_text(request.form.get("username"), 32).lower()
        password = request.form.get("password") or ""
        if not all([first_name, last_name, username, password]):
            flash("All fields are required.", "error")
            return render_template("auth.html", mode="signup")
        if len(password) < 6:
            flash("Password must contain at least 6 characters.", "error")
            return render_template("auth.html", mode="signup")
        with db_connection() as conn:
            exists = conn.execute("SELECT id FROM users WHERE username = ?", (username,)).fetchone()
            if exists:
                flash("That username is already taken.", "error")
                return render_template("auth.html", mode="signup")
            cursor = conn.execute(
                """
                INSERT INTO users (first_name, last_name, username, password_hash)
                VALUES (?, ?, ?, ?)
                """,
                (first_name, last_name, username, generate_password_hash(password)),
            )
            user_id = cursor.lastrowid
            recompute_leaderboard_stats(user_id, conn)
        session.clear()
        session.permanent = True
        session["user_id"] = user_id
        flash("Account created. Your progress will now be saved.", "success")
        return redirect(url_for("index"))
    return render_template("auth.html", mode="signup")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = clean_text(request.form.get("username"), 32).lower()
        password = request.form.get("password") or ""
        with db_connection() as conn:
            user = conn.execute("SELECT * FROM users WHERE username = ?", (username,)).fetchone()
        if not user or not check_password_hash(user["password_hash"], password):
            flash("Invalid username or password.", "error")
            return render_template("auth.html", mode="login")
        session.clear()
        session.permanent = True
        session["user_id"] = user["id"]
        flash("Welcome back.", "success")
        return redirect(request.args.get("next") or url_for("index"))
    return render_template("auth.html", mode="login")


@app.route("/logout", methods=["GET", "POST"])
def logout():
    session.clear()
    flash("You have been logged out.", "success")
    return redirect(url_for("login"))


@app.route("/account")
@login_required
def account():
    user = current_user()
    return render_template(
        "account.html",
        user=user,
        progress=lesson_progress_map(user["id"]),
        stats=recompute_leaderboard_stats(user["id"]),
    )


@app.route("/account/avatar", methods=["POST"])
@login_required
def update_avatar():
    file = request.files.get("avatar")
    if not file or not file.filename:
        flash("Choose an image file first.", "error")
        return redirect(url_for("account"))
    if not allowed_image(file.filename):
        flash("Use PNG, JPG, JPEG, WEBP, or GIF images only.", "error")
        return redirect(url_for("account"))
    user_id = session["user_id"]
    extension = file.filename.rsplit(".", 1)[1].lower()
    filename = secure_filename(f"user_{user_id}_{int(time())}.{extension}")
    destination = AVATAR_DIR / filename
    file.save(destination)
    avatar_path = f"images/avatars/{filename}"
    with db_connection() as conn:
        conn.execute("UPDATE users SET avatar_path = ? WHERE id = ?", (avatar_path, user_id))
    flash("Profile picture updated.", "success")
    return redirect(url_for("account"))


@app.route("/account/password", methods=["POST"])
@login_required
def update_password():
    current_password = request.form.get("current_password") or ""
    new_password = request.form.get("new_password") or ""
    user = current_user()
    if not check_password_hash(user["password_hash"], current_password):
        flash("Current password is incorrect.", "error")
        return redirect(url_for("account"))
    if len(new_password) < 6:
        flash("New password must contain at least 6 characters.", "error")
        return redirect(url_for("account"))
    with db_connection() as conn:
        conn.execute(
            "UPDATE users SET password_hash = ? WHERE id = ?",
            (generate_password_hash(new_password), user["id"]),
        )
    flash("Password changed.", "success")
    return redirect(url_for("account"))


@app.route("/account/delete", methods=["POST"])
@login_required
def delete_account():
    user = current_user()
    password = request.form.get("password") or ""
    if not check_password_hash(user["password_hash"], password):
        flash("Password confirmation failed.", "error")
        return redirect(url_for("account"))
    with db_connection() as conn:
        conn.execute("DELETE FROM users WHERE id = ?", (user["id"],))
    session.clear()
    flash("Your account was deleted.", "success")
    return redirect(url_for("signup"))


@app.route("/leaderboard")
def leaderboard():
    return render_template("leaderboard.html", rows=leaderboard_rows())


@app.get("/api/me")
def api_me():
    user = current_user()
    return jsonify({"authenticated": bool(user), "user": public_user(user)})


@app.get("/api/lessons")
def api_lessons():
    user = current_user()
    progress = lesson_progress_map(user["id"]) if user else {}
    with db_connection() as conn:
        lessons = conn.execute("SELECT * FROM lessons ORDER BY id").fetchall()
    return jsonify(
        {
            "lessons": [
                {
                    "id": lesson["lesson_key"],
                    "title": lesson["title"],
                    "description": lesson["description"],
                    "image": url_for("static", filename=lesson["image_path"]),
                    "unlock_at": lesson["unlock_at"],
                    "progress": progress.get(lesson["lesson_key"], {"solved": 0, "total": 50, "percent": 0, "completed": False}),
                }
                for lesson in lessons
            ]
        }
    )


@app.get("/api/test/start")
def api_start_test():
    lesson_key = request.args.get("lesson_id") or "lesson1"
    count = clamp_question_amount(request.args.get("count"))
    user = current_user()
    with db_connection() as conn:
        lesson = get_lesson(conn, lesson_key)
        if not lesson:
            return jsonify({"ok": False, "error": "Lesson not found"}), 404
        questions = conn.execute(
            "SELECT * FROM questions WHERE lesson_id = ? ORDER BY question_order",
            (lesson["id"],),
        ).fetchall()
        solved_ids = set()
        if user:
            solved_rows = conn.execute(
                "SELECT question_id FROM solved_questions WHERE user_id = ? AND lesson_id = ?",
                (user["id"], lesson["id"]),
            ).fetchall()
            solved_ids = {row["question_id"] for row in solved_rows}
    unsolved = [question for question in questions if question["id"] not in solved_ids]
    solved = [question for question in questions if question["id"] in solved_ids]
    random.shuffle(unsolved)
    random.shuffle(solved)
    selected = (unsolved + solved)[: min(count, len(questions))]
    payload_questions = []
    for question in selected:
        options = json.loads(question["options_json"])
        random.shuffle(options)
        payload_questions.append(
            {
                "id": question["external_id"],
                "word": question["word"],
                "prompt": question["prompt"],
                "options": options,
                "correct_answer": question["correct_answer"],
            }
        )
    return jsonify(
        {
            "ok": True,
            "lesson": {"id": lesson["lesson_key"], "title": lesson["title"]},
            "question_amount": len(payload_questions),
            "total_seconds": len(payload_questions) * SECONDS_PER_QUESTION,
            "questions": payload_questions,
        }
    )


@app.post("/api/test/submit")
def api_submit_test():
    user, error = require_api_user()
    if error:
        return error
    data = request.get_json(silent=True) or {}
    lesson_key = data.get("lessonId") or data.get("lesson_id") or "lesson1"
    answers = data.get("answers") or []
    reason = clean_text(data.get("reason") or "completed", 40)
    with db_connection() as conn:
        lesson = get_lesson(conn, lesson_key)
        if not lesson:
            return jsonify({"ok": False, "error": "Lesson not found"}), 404
        before_count = conn.execute(
            "SELECT COUNT(*) AS count FROM solved_questions WHERE user_id = ? AND lesson_id = ?",
            (user["id"], lesson["id"]),
        ).fetchone()["count"]
        question_amount = clamp_question_amount(data.get("questionAmount") or len(answers))
        score = 0
        saved_correct = 0
        answer_review = []
        for answer in answers:
            external_id = answer.get("questionId") or answer.get("question_id")
            selected_answer = answer.get("selectedAnswer") or answer.get("selected_answer")
            if not external_id:
                continue
            question = conn.execute(
                "SELECT * FROM questions WHERE external_id = ? AND lesson_id = ?",
                (external_id, lesson["id"]),
            ).fetchone()
            if not question:
                continue
            is_correct = selected_answer == question["correct_answer"]
            if is_correct:
                score += 1
                cursor = conn.execute(
                    """
                    INSERT OR IGNORE INTO solved_questions (user_id, lesson_id, question_id)
                    VALUES (?, ?, ?)
                    """,
                    (user["id"], lesson["id"], question["id"]),
                )
                saved_correct += cursor.rowcount
            answer_review.append(
                {
                    "question_id": question["external_id"],
                    "word": question["word"],
                    "selected_answer": selected_answer,
                    "correct_answer": question["correct_answer"],
                    "correct": is_correct,
                }
            )
        question_amount = max(1, min(question_amount, len(answers) or question_amount))
        percent = round((score / question_amount) * 100)
        after_count = conn.execute(
            "SELECT COUNT(*) AS count FROM solved_questions WHERE user_id = ? AND lesson_id = ?",
            (user["id"], lesson["id"]),
        ).fetchone()["count"]
        total_questions = conn.execute(
            "SELECT COUNT(*) AS count FROM questions WHERE lesson_id = ?", (lesson["id"],)
        ).fetchone()["count"] or 50
        progress_before = min(100, int(round((before_count / total_questions) * 100)))
        progress_after = min(100, int(round((after_count / total_questions) * 100)))
        progress_delta = max(0, progress_after - progress_before)
        conn.execute(
            """
            INSERT INTO test_attempts (
                user_id, lesson_id, question_amount, total_seconds, score, percent, reason,
                progress_before, progress_after, progress_delta
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                user["id"],
                lesson["id"],
                question_amount,
                question_amount * SECONDS_PER_QUESTION,
                score,
                percent,
                reason,
                progress_before,
                progress_after,
                progress_delta,
            ),
        )
        stats = recompute_leaderboard_stats(user["id"], conn)
    return jsonify(
        {
            "ok": True,
            "saved": True,
            "score": score,
            "percent": percent,
            "new_unique_solved": saved_correct,
            "progress": {
                "lesson_id": lesson_key,
                "before": progress_before,
                "after": progress_after,
                "delta": progress_delta,
                "solved": after_count,
                "total": total_questions,
                "completed": progress_after >= 100,
            },
            "leaderboard": stats,
            "answers": answer_review,
        }
    )


@app.get("/api/leaderboard")
def api_leaderboard():
    rows = leaderboard_rows()
    return jsonify(
        {
            "leaderboard": [
                {
                    "rank": index + 1,
                    "username": row["username"],
                    "avatar_url": url_for("static", filename=row["avatar_path"] or "images/default_avatar.svg"),
                    "completed_lessons": row["completed_lessons"],
                    "average_percentage": row["average_percentage"],
                    "total_unique_solved": row["total_unique_solved"],
                }
                for index, row in enumerate(rows)
            ]
        }
    )


init_db()

if __name__ == "__main__":
    app.run(debug=os.environ.get("FLASK_DEBUG") == "1")
