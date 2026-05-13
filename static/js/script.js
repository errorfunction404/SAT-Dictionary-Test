"use strict";

const QUESTIONS = [
  {
    word: "Number",
    prompt: "What is the meaning of \"Number\"?",
    options: ["Daraja", "Son", "Qoida", "Had"],
    correctAnswer: "Son"
  },
  {
    word: "Law",
    prompt: "What is the meaning of \"Law\"?",
    options: ["Asos", "Ko‘phad", "Qoida", "Ildiz"],
    correctAnswer: "Qoida"
  },
  {
    word: "Exponent",
    prompt: "What does \"Exponent\" mean?",
    options: ["Son", "Daraja", "Yechim", "Ifoda"],
    correctAnswer: "Daraja"
  },
  {
    word: "Base",
    prompt: "What is the Uzbek meaning of \"Base\"?",
    options: ["Ko‘paytma", "Had", "Asos", "Ayirish"],
    correctAnswer: "Asos"
  },
  {
    word: "Simplify",
    prompt: "What does \"Simplify\" mean?",
    options: ["Bo‘lish", "Ko‘paytirish", "Soddalashtirish", "Tenglama"],
    correctAnswer: "Soddalashtirish"
  },
  {
    word: "Polynomial",
    prompt: "What is the meaning of \"Polynomial\"?",
    options: ["Ildiz", "O‘zgaruvchi", "Ko‘phad", "Qiymat"],
    correctAnswer: "Ko‘phad"
  },
  {
    word: "Coefficient",
    prompt: "What does \"Coefficient\" mean?",
    options: ["Qoldiq", "Koeffitsiyent", "Ko‘paytma", "Tub son"],
    correctAnswer: "Koeffitsiyent"
  },
  {
    word: "Constant Term",
    prompt: "What is the meaning of \"Constant Term\"?",
    options: ["Bir xil had", "Tenglama", "Asos", "Ozod had"],
    correctAnswer: "Ozod had"
  },
  {
    word: "Leading Coefficient",
    prompt: "What does \"Leading Coefficient\" mean?",
    options: ["Ikkinchi darajali had", "Ko‘paytuvchi", "Birinchi koeffitsiyent", "Cheksiz"],
    correctAnswer: "Birinchi koeffitsiyent"
  },
  {
    word: "Like Terms",
    prompt: "What is the meaning of \"Like Terms\"?",
    options: ["O‘zgaruvchi", "Yechim", "Bir xil hadlar", "Ildizlar"],
    correctAnswer: "Bir xil hadlar"
  },
  {
    word: "Combine Like Terms",
    prompt: "What does \"Combine Like Terms\" mean?",
    options: ["Tenglama tuzish", "Bir xil hadlarni qo‘shish", "Ayirish", "Tub son"],
    correctAnswer: "Bir xil hadlarni qo‘shish"
  },
  {
    word: "Remainder",
    prompt: "What is the meaning of \"Remainder\"?",
    options: ["Bo‘linma", "Ko‘paytma", "Qoldiq", "Ifoda"],
    correctAnswer: "Qoldiq"
  },
  {
    word: "Quotient",
    prompt: "What does \"Quotient\" mean?",
    options: ["Bo‘luvchi", "Bo‘linma", "Had", "Qiymat"],
    correctAnswer: "Bo‘linma"
  },
  {
    word: "Factor",
    prompt: "What is the meaning of \"Factor\"?",
    options: ["Son", "Daraja", "Ko‘paytuvchi", "Yechim"],
    correctAnswer: "Ko‘paytuvchi"
  },
  {
    word: "Prime Number",
    prompt: "What does \"Prime Number\" mean?",
    options: ["Murakkab son", "Nol", "Tub son", "Ko‘paytma"],
    correctAnswer: "Tub son"
  },
  {
    word: "Composite Number",
    prompt: "What is the meaning of \"Composite Number\"?",
    options: ["Tub son", "Murakkab son", "O‘zgaruvchi", "Had"],
    correctAnswer: "Murakkab son"
  },
  {
    word: "Prime Factorization",
    prompt: "What does \"Prime Factorization\" mean?",
    options: ["Tenglama yechish", "Ayirish", "Tub ko‘paytuvchilarga ajratish", "Bo‘lish"],
    correctAnswer: "Tub ko‘paytuvchilarga ajratish"
  },
  {
    word: "Greatest Common Factor",
    prompt: "What is the meaning of \"Greatest Common Factor\"?",
    options: ["Eng kichik ko‘paytma", "Ko‘paytuvchi", "Eng katta umumiy bo‘luvchi", "O‘zgaruvchi"],
    correctAnswer: "Eng katta umumiy bo‘luvchi"
  },
  {
    word: "Least Common Multiple",
    prompt: "What does \"Least Common Multiple\" mean?",
    options: ["Tub son", "Chekli", "Eng kichik umumiy ko‘paytma", "Ildiz"],
    correctAnswer: "Eng kichik umumiy ko‘paytma"
  },
  {
    word: "Divisor",
    prompt: "What is the meaning of \"Divisor\"?",
    options: ["Ko‘paytma", "Bo‘luvchi", "Qiymat", "Daraja"],
    correctAnswer: "Bo‘luvchi"
  },
  {
    word: "Multiple",
    prompt: "What does \"Multiple\" mean?",
    options: ["Qoldiq", "Had", "Ko‘paytma", "Tenglama"],
    correctAnswer: "Ko‘paytma"
  },
  {
    word: "Prime Factor",
    prompt: "What is the meaning of \"Prime Factor\"?",
    options: ["Murakkab son", "Bo‘linma", "Tub ko‘paytuvchi", "Ifoda"],
    correctAnswer: "Tub ko‘paytuvchi"
  },
  {
    word: "Common Factor",
    prompt: "What does \"Common Factor\" mean?",
    options: ["Birinchi had", "Umumiy ko‘paytuvchi", "Ayirish", "O‘zgaruvchi"],
    correctAnswer: "Umumiy ko‘paytuvchi"
  },
  {
    word: "Common Multiple",
    prompt: "What is the meaning of \"Common Multiple\"?",
    options: ["Ko‘phad", "Qoldiq", "Umumiy ko‘paytma", "Yechim"],
    correctAnswer: "Umumiy ko‘paytma"
  },
  {
    word: "Factoring",
    prompt: "What does \"Factoring\" mean?",
    options: ["Bo‘lish", "Ko‘paytuvchilarga ajratish", "Soddalashtirish", "Daraja"],
    correctAnswer: "Ko‘paytuvchilarga ajratish"
  },
  {
    word: "Linear Term",
    prompt: "What is the meaning of \"Linear Term\"?",
    options: ["Uchunchi darajali had", "Birinchi darajali had", "Ozod had", "Nol"],
    correctAnswer: "Birinchi darajali had"
  },
  {
    word: "Quadratic Term",
    prompt: "What does \"Quadratic Term\" mean?",
    options: ["Birinchi darajali had", "Uchunchi darajali had", "Ikkinchi darajali had", "Tub son"],
    correctAnswer: "Ikkinchi darajali had"
  },
  {
    word: "Cubic Term",
    prompt: "What is the meaning of \"Cubic Term\"?",
    options: ["Ko‘phad", "Bir xil had", "Uchunchi darajali had", "Ildiz"],
    correctAnswer: "Uchunchi darajali had"
  },
  {
    word: "Roots",
    prompt: "What does \"Roots\" mean?",
    options: ["Nollar", "Tenglama", "Ildizlar", "Hadlar"],
    correctAnswer: "Ildizlar"
  },
  {
    word: "Zeroes",
    prompt: "What is the meaning of \"Zeroes\"?",
    options: ["Ildizlar", "Nollar", "Ko‘paytma", "Qoldiq"],
    correctAnswer: "Nollar"
  },
  {
    word: "Term",
    prompt: "What does \"Term\" mean?",
    options: ["O‘zgaruvchi", "Son", "Had", "Asos"],
    correctAnswer: "Had"
  },
  {
    word: "Expression",
    prompt: "What is the meaning of \"Expression\"?",
    options: ["Tenglama", "Daraja", "Ifoda", "Ko‘paytuvchi"],
    correctAnswer: "Ifoda"
  },
  {
    word: "Equation",
    prompt: "What does \"Equation\" mean?",
    options: ["Had", "Ko‘paytma", "Tenglama", "Qiymat"],
    correctAnswer: "Tenglama"
  },
  {
    word: "Simplified Form",
    prompt: "What is the meaning of \"Simplified Form\"?",
    options: ["Murakkab ko‘rinish", "Soddalashtirilgan ko‘rinish", "Tenglama", "Nollar"],
    correctAnswer: "Soddalashtirilgan ko‘rinish"
  },
  {
    word: "Subtracting",
    prompt: "What does \"Subtracting\" mean?",
    options: ["Qo‘shish", "Bo‘lish", "Ayirish", "Ko‘paytirish"],
    correctAnswer: "Ayirish"
  },
  {
    word: "Dividing",
    prompt: "What is the meaning of \"Dividing\"?",
    options: ["Qo‘shish", "Bo‘lish", "Daraja", "Ifoda"],
    correctAnswer: "Bo‘lish"
  },
  {
    word: "Property",
    prompt: "What does \"Property\" mean?",
    options: ["Son", "Ko‘phad", "Xossa", "Yechim"],
    correctAnswer: "Xossa"
  },
  {
    word: "Power",
    prompt: "What is the meaning of \"Power\"?",
    options: ["Asos", "Had", "Daraja", "Ko‘paytma"],
    correctAnswer: "Daraja"
  },
  {
    word: "First",
    prompt: "What does \"First\" mean?",
    options: ["Ikkinchi", "Uchunchi", "Birinchi", "Oxirgi"],
    correctAnswer: "Birinchi"
  },
  {
    word: "Second",
    prompt: "What is the meaning of \"Second\"?",
    options: ["Birinchi", "Ikkinchi", "Uchunchi", "Nol"],
    correctAnswer: "Ikkinchi"
  },
  {
    word: "Third",
    prompt: "What does \"Third\" mean?",
    options: ["Birinchi", "Ikkinchi", "Uchunchi", "Cheksiz"],
    correctAnswer: "Uchunchi"
  },
  {
    word: "Boy",
    prompt: "What is the meaning of \"Boy\"?",
    options: ["Qiz bola", "O‘g‘il bola", "Talaba", "O‘qituvchi"],
    correctAnswer: "O‘g‘il bola"
  },
  {
    word: "Girl",
    prompt: "What does \"Girl\" mean?",
    options: ["O‘g‘il bola", "Ayol", "Qiz bola", "Talaba"],
    correctAnswer: "Qiz bola"
  },
  {
    word: "Finite",
    prompt: "What is the meaning of \"Finite\"?",
    options: ["Cheksiz", "Katta", "Chekli", "Murakkab"],
    correctAnswer: "Chekli"
  },
  {
    word: "Infinite",
    prompt: "What does \"Infinite\" mean?",
    options: ["Chekli", "Tub", "Cheksiz", "Ozod"],
    correctAnswer: "Cheksiz"
  },
  {
    word: "Product",
    prompt: "What is the meaning of \"Product\"?",
    options: ["Bo‘linma", "Ayirish", "Ko‘paytma", "Qoldiq"],
    correctAnswer: "Ko‘paytma"
  },
  {
    word: "Each",
    prompt: "What does \"Each\" mean?",
    options: ["Hammasi", "Har bir", "Hech biri", "Ba’zilari"],
    correctAnswer: "Har bir"
  },
  {
    word: "Value",
    prompt: "What is the meaning of \"Value\"?",
    options: ["Son", "Had", "Qiymat", "Daraja"],
    correctAnswer: "Qiymat"
  },
  {
    word: "Variable",
    prompt: "What does \"Variable\" mean?",
    options: ["Ko‘paytuvchi", "Ildiz", "O‘zgaruvchi", "Tenglama"],
    correctAnswer: "O‘zgaruvchi"
  },
  {
    word: "Solution",
    prompt: "What is the meaning of \"Solution\"?",
    options: ["Ifoda", "Ko‘paytma", "Had", "Yechim"],
    correctAnswer: "Yechim"
  }
];

const LESSON_2_QUESTIONS = [
  {
    word: "Divisible",
    prompt: "What is the meaning of \"Divisible\"?",
    options: ["Teng", "Musbat", "Karrali", "Juft"],
    correctAnswer: "Karrali"
  },
  {
    word: "Always",
    prompt: "What does \"Always\" mean?",
    options: ["Ba’zan", "Har doim", "Hech qachon", "Yana"],
    correctAnswer: "Har doim"
  },
  {
    word: "Calculate",
    prompt: "What is the meaning of \"Calculate\"?",
    options: ["Tasvirlamoq", "Tenglashtirmoq", "Hisoblamoq", "Qaytmoq"],
    correctAnswer: "Hisoblamoq"
  },
  {
    word: "Describe",
    prompt: "What does \"Describe\" mean?",
    options: ["Ko‘rsatmoq", "Foydalanmoq", "Tasvirlamoq", "Kesishmoq"],
    correctAnswer: "Tasvirlamoq"
  },
  {
    word: "Include",
    prompt: "What is the meaning of \"Include\"?",
    options: ["Ajratmoq", "Ko‘paytirmoq", "O‘z ichiga olmoq", "Yechmoq"],
    correctAnswer: "O‘z ichiga olmoq"
  },
  {
    word: "Consist",
    prompt: "What does \"Consist\" mean?",
    options: ["Teng bo‘lmoq", "Tashkil topgan", "Natija bermoq", "Soddalashtirmoq"],
    correctAnswer: "Tashkil topgan"
  },
  {
    word: "Approximate",
    prompt: "What is the meaning of \"Approximate\"?",
    options: ["Katta", "Aniq", "Taxminan", "Musbat"],
    correctAnswer: "Taxminan"
  },
  {
    word: "Total amount",
    prompt: "What does \"Total amount\" mean?",
    options: ["Natija", "Bo‘luvchi", "Umumiy miqdor", "Kesishma"],
    correctAnswer: "Umumiy miqdor"
  },
  {
    word: "Satisfy",
    prompt: "What is the meaning of \"Satisfy\"?",
    options: ["Tenglashtirmoq", "Bo‘lmoq", "Qanoatlantirmoq", "Qo‘shmoq"],
    correctAnswer: "Qanoatlantirmoq"
  },
  {
    word: "Double",
    prompt: "What does \"Double\" mean?",
    options: ["Yarim", "2 marta katta", "Kamaytirmoq", "Juftlashtirmoq"],
    correctAnswer: "2 marta katta"
  },
  {
    word: "Ratio",
    prompt: "What is the meaning of \"Ratio\"?",
    options: ["Qiymat", "Tenglama", "Nisbat", "Natija"],
    correctAnswer: "Nisbat"
  },
  {
    word: "Return",
    prompt: "What does \"Return\" mean?",
    options: ["Boshlamoq", "Ko‘rsatmoq", "Qaytmoq", "Ajratmoq"],
    correctAnswer: "Qaytmoq"
  },
  {
    word: "Rate",
    prompt: "What is the meaning of \"Rate\"?",
    options: ["Vaqt", "Miqdor", "Tezlik", "Baho"],
    correctAnswer: "Tezlik"
  },
  {
    word: "Another",
    prompt: "What does \"Another\" mean?",
    options: ["Birinchi", "Oxirgi", "Yana bir boshqasi", "Hech biri"],
    correctAnswer: "Yana bir boshqasi"
  },
  {
    word: "Intercept",
    prompt: "What is the meaning of \"Intercept\"?",
    options: ["Qo‘shish", "Bo‘lish", "Kesishmoq", "Tenglashtirmoq"],
    correctAnswer: "Kesishmoq"
  },
  {
    word: "Vertex",
    prompt: "What does \"Vertex\" mean?",
    options: ["Tekislik", "O‘q", "Uchi", "Burchak"],
    correctAnswer: "Uchi"
  },
  {
    word: "Axis",
    prompt: "What is the meaning of \"Axis\"?",
    options: ["Tekislik", "Kesishma", "O‘q", "Daraja"],
    correctAnswer: "O‘q"
  },
  {
    word: "X-intercept",
    prompt: "What does \"X-intercept\" mean?",
    options: ["y o‘qini kesish", "Tekislik", "x o‘qini kesish", "O‘q markazi"],
    correctAnswer: "x o‘qini kesish"
  },
  {
    word: "Y-intercept",
    prompt: "What is the meaning of \"Y-intercept\"?",
    options: ["x o‘qini kesish", "O‘q", "y o‘qini kesish", "Natija"],
    correctAnswer: "y o‘qini kesish"
  },
  {
    word: "Factored form",
    prompt: "What does \"Factored form\" mean?",
    options: ["Tenglama shakli", "Soddalashtirilgan shakl", "Ko‘paytuvchilarga ajratilgan shakl", "Ildizli shakl"],
    correctAnswer: "Ko‘paytuvchilarga ajratilgan shakl"
  },
  {
    word: "Plane",
    prompt: "What is the meaning of \"Plane\"?",
    options: ["O‘q", "Tekislik", "Uchi", "Chiziq"],
    correctAnswer: "Tekislik"
  },
  {
    word: "About",
    prompt: "What does \"About\" mean?",
    options: ["Ichida", "Uchun", "Haqida", "Orqali"],
    correctAnswer: "Haqida"
  },
  {
    word: "Equation",
    prompt: "What is the meaning of \"Equation\"?",
    options: ["Ifoda", "Natija", "Tenglama", "Had"],
    correctAnswer: "Tenglama"
  },
  {
    word: "For",
    prompt: "What does \"For\" mean?",
    options: ["Yoki", "Bilan", "Uchun", "U holda"],
    correctAnswer: "Uchun"
  },
  {
    word: "All",
    prompt: "What is the meaning of \"All\"?",
    options: ["Ba’zilari", "Hech biri", "Barcha", "Ko‘pchilik"],
    correctAnswer: "Barcha"
  },
  {
    word: "Following",
    prompt: "What does \"Following\" mean?",
    options: ["Oldingi", "Oxirgi", "Quyidagi", "Yuqoridagi"],
    correctAnswer: "Quyidagi"
  },
  {
    word: "Integer",
    prompt: "What is the meaning of \"Integer\"?",
    options: ["Kasr son", "Tub son", "Butun son", "Murakkab son"],
    correctAnswer: "Butun son"
  },
  {
    word: "Any",
    prompt: "What does \"Any\" mean?",
    options: ["Hammasi", "Istalgan", "Hech biri", "Boshqasi"],
    correctAnswer: "Istalgan"
  },
  {
    word: "Nonzero",
    prompt: "What is the meaning of \"Nonzero\"?",
    options: ["Nol", "Musbat", "Noldan farqli", "Cheksiz"],
    correctAnswer: "Noldan farqli"
  },
  {
    word: "Equal",
    prompt: "What does \"Equal\" mean?",
    options: ["Har xil", "Juft", "Teng", "Katta"],
    correctAnswer: "Teng"
  },
  {
    word: "Then",
    prompt: "What is the meaning of \"Then\"?",
    options: ["Keyinroq", "Birinchi", "U holda", "Oldin"],
    correctAnswer: "U holda"
  },
  {
    word: "Positive",
    prompt: "What does \"Positive\" mean?",
    options: ["Manfiy", "Nol", "Musbat", "Juft"],
    correctAnswer: "Musbat"
  },
  {
    word: "Even",
    prompt: "What is the meaning of \"Even\"?",
    options: ["Toq", "Teng", "Juft", "Karrali"],
    correctAnswer: "Juft"
  },
  {
    word: "Which",
    prompt: "What does \"Which\" mean?",
    options: ["Qachon", "Nima", "Qaysi", "Kim"],
    correctAnswer: "Qaysi"
  },
  {
    word: "Least",
    prompt: "What is the meaning of \"Least\"?",
    options: ["Eng katta", "O‘rtacha", "Eng kichik", "Taxminiy"],
    correctAnswer: "Eng kichik"
  },
  {
    word: "Greatest",
    prompt: "What does \"Greatest\" mean?",
    options: ["Eng kichik", "Oddiy", "Eng katta", "Teng"],
    correctAnswer: "Eng katta"
  },
  {
    word: "Like",
    prompt: "What is the meaning of \"Like\"?",
    options: ["Farqli", "Kuchli", "O‘xshash", "Tengsiz"],
    correctAnswer: "O‘xshash"
  },
  {
    word: "Or",
    prompt: "What does \"Or\" mean?",
    options: ["Va", "Ammo", "Yoki", "Chunki"],
    correctAnswer: "Yoki"
  },
  {
    word: "Above",
    prompt: "What is the meaning of \"Above\"?",
    options: ["Pastda", "Yonida", "Yuqorida", "Ichida"],
    correctAnswer: "Yuqorida"
  },
  {
    word: "Various",
    prompt: "What does \"Various\" mean?",
    options: ["Bir xil", "Teng", "Turli xil", "Chekli"],
    correctAnswer: "Turli xil"
  },
  {
    word: "Form",
    prompt: "What is the meaning of \"Form\"?",
    options: ["Tenglik", "Hisob", "Shakl, shakllantirmoq", "Bo‘linma"],
    correctAnswer: "Shakl, shakllantirmoq"
  },
  {
    word: "Use",
    prompt: "What does \"Use\" mean?",
    options: ["Yaratmoq", "Ko‘rsatmoq", "Foydalanmoq", "Ajratmoq"],
    correctAnswer: "Foydalanmoq"
  },
  {
    word: "By",
    prompt: "What is the meaning of \"By\"?",
    options: ["Uchun", "Bilan", "Ga, orqali", "Ichida"],
    correctAnswer: "Ga, orqali"
  },
  {
    word: "Equivalent",
    prompt: "What does \"Equivalent\" mean?",
    options: ["Kuchsiz", "Har xil", "Teng kuchli", "Murakkab"],
    correctAnswer: "Teng kuchli"
  },
  {
    word: "Result",
    prompt: "What is the meaning of \"Result\"?",
    options: ["Tenglama", "Ifoda", "Natija", "O‘q"],
    correctAnswer: "Natija"
  },
  {
    word: "Simplify",
    prompt: "What does \"Simplify\" mean?",
    options: ["Murakkablashtirmoq", "Tenglashtirmoq", "Soddalashtirmoq", "Ajratmoq"],
    correctAnswer: "Soddalashtirmoq"
  },
  {
    word: "When",
    prompt: "What is the meaning of \"When\"?",
    options: ["Qaerda", "Kim", "Qachonki", "Nima"],
    correctAnswer: "Qachonki"
  },
  {
    word: "Has",
    prompt: "What does \"Has\" mean?",
    options: ["Yo‘q", "Bo‘ladi", "Ega bo‘lmoq", "Kerak"],
    correctAnswer: "Ega bo‘lmoq"
  },
  {
    word: "Composite number",
    prompt: "What is the meaning of \"Composite number\"?",
    options: ["Tub son", "Butun son", "Murakkab son", "Kasr son"],
    correctAnswer: "Murakkab son"
  },
  {
    word: "Show",
    prompt: "What does \"Show\" mean?",
    options: ["Yashirmoq", "O‘zgartirmoq", "Namoyish qilmoq", "Hisoblamoq"],
    correctAnswer: "Namoyish qilmoq"
  }
];

const LESSON_3_QUESTIONS = [
  {
    word: "Exponential Functions",
    prompt: "What is the meaning of \"Exponential Functions\"?",
    options: ["Chiziqli funksiya", "Kvadrat funksiya", "Darajali funksiya", "Kasr funksiya"],
    correctAnswer: "Darajali funksiya"
  },
  {
    word: "Extra",
    prompt: "What does \"Extra\" mean?",
    options: ["Asosiy", "Keraksiz", "Qo‘shimcha", "Kichik"],
    correctAnswer: "Qo‘shimcha"
  },
  {
    word: "Select",
    prompt: "What is the meaning of \"Select\"?",
    options: ["Hisoblamoq", "Topmoq", "Tanlamoq", "O‘lchamoq"],
    correctAnswer: "Tanlamoq"
  },
  {
    word: "Part",
    prompt: "What does \"Part\" mean?",
    options: ["To‘plam", "Qism", "Natija", "Hajm"],
    correctAnswer: "Qism"
  },
  {
    word: "Find",
    prompt: "What is the meaning of \"Find\"?",
    options: ["Yo‘qotmoq", "Belgilamoq", "Topmoq", "Solishtirmoq"],
    correctAnswer: "Topmoq"
  },
  {
    word: "Sequence",
    prompt: "What does \"Sequence\" mean?",
    options: ["Tenglama", "To‘plam", "Ketma-ketlik", "Daraja"],
    correctAnswer: "Ketma-ketlik"
  },
  {
    word: "Initial",
    prompt: "What is the meaning of \"Initial\"?",
    options: ["Oxirgi", "O‘rta", "Dastlabki", "Asosiy emas"],
    correctAnswer: "Dastlabki"
  },
  {
    word: "Define",
    prompt: "What does \"Define\" mean?",
    options: ["Solishtirmoq", "Aniqlamoq", "O‘lchamoq", "Ifodalamoq"],
    correctAnswer: "Aniqlamoq"
  },
  {
    word: "Amount",
    prompt: "What is the meaning of \"Amount\"?",
    options: ["Hajm", "Qiymat", "Miqdor", "Daraja"],
    correctAnswer: "Miqdor"
  },
  {
    word: "Month",
    prompt: "What does \"Month\" mean?",
    options: ["Kun", "Yil", "Oy", "Hafta"],
    correctAnswer: "Oy"
  },
  {
    word: "The nearest",
    prompt: "What is the meaning of \"The nearest\"?",
    options: ["Eng uzoq", "O‘rtacha", "Eng yaqin", "Kichik"],
    correctAnswer: "Eng yaqin"
  },
  {
    word: "During",
    prompt: "What does \"During\" mean?",
    options: ["Oldin", "Keyin", "Davomida", "Oxirida"],
    correctAnswer: "Davomida"
  },
  {
    word: "Water",
    prompt: "What is the meaning of \"Water\"?",
    options: ["Havo", "Yer", "Suv", "Olov"],
    correctAnswer: "Suv"
  },
  {
    word: "Time",
    prompt: "What does \"Time\" mean?",
    options: ["Oy", "Kun", "Vaqt", "Soat"],
    correctAnswer: "Vaqt"
  },
  {
    word: "Level",
    prompt: "What is the meaning of \"Level\"?",
    options: ["Qiymat", "Daraja", "Hajm", "Massa"],
    correctAnswer: "Daraja"
  },
  {
    word: "Price",
    prompt: "What does \"Price\" mean?",
    options: ["Pul", "Boylik", "Narx", "Qiymat"],
    correctAnswer: "Narx"
  },
  {
    word: "Begin",
    prompt: "What is the meaning of \"Begin\"?",
    options: ["Tugatmoq", "Kutmoq", "Boshlamoq", "Yopmoq"],
    correctAnswer: "Boshlamoq"
  },
  {
    word: "Use",
    prompt: "What does \"Use\" mean?",
    options: ["O‘rganmoq", "O‘zgartirmoq", "Foydalanmoq", "Saqlamoq"],
    correctAnswer: "Foydalanmoq"
  },
  {
    word: "Between",
    prompt: "What is the meaning of \"Between\"?",
    options: ["Tashqarida", "Ichida", "Orasidagi", "Yonida"],
    correctAnswer: "Orasidagi"
  },
  {
    word: "Express",
    prompt: "What does \"Express\" mean?",
    options: ["Yashirmoq", "Ifodalamoq", "Qisqartirmoq", "Ko‘paytirmoq"],
    correctAnswer: "Ifodalamoq"
  },
  {
    word: "Must",
    prompt: "What is the meaning of \"Must\"?",
    options: ["Mumkin", "Ehtimol", "Shart, zarur", "Oson"],
    correctAnswer: "Shart, zarur"
  },
  {
    word: "Could",
    prompt: "What does \"Could\" mean?",
    options: ["Kerak", "Shart", "Bo‘lishi mumkin", "Aniqlik"],
    correctAnswer: "Bo‘lishi mumkin"
  },
  {
    word: "Volume",
    prompt: "What is the meaning of \"Volume\"?",
    options: ["Massa", "Miqdor", "Hajm", "Sirt"],
    correctAnswer: "Hajm"
  },
  {
    word: "Mass",
    prompt: "What does \"Mass\" mean?",
    options: ["Hajm", "Narx", "Massa", "Tezlik"],
    correctAnswer: "Massa"
  },
  {
    word: "Represent",
    prompt: "What is the meaning of \"Represent\"?",
    options: ["Boshlamoq", "Hisoblamoq", "Ifodalamoq", "Aniqlamoq"],
    correctAnswer: "Ifodalamoq"
  },
  {
    word: "Define",
    prompt: "What does \"Define\" mean?",
    options: ["Solishtirmoq", "Aniqlamoq", "Kamaytirmoq", "O‘lchamoq"],
    correctAnswer: "Aniqlamoq"
  },
  {
    word: "According",
    prompt: "What is the meaning of \"According\"?",
    options: ["Qarshi", "Bilan", "… ga ko‘ra", "Orqali"],
    correctAnswer: "… ga ko‘ra"
  },
  {
    word: "Possible",
    prompt: "What does \"Possible\" mean?",
    options: ["Qiyin", "Zarur", "Mumkin bo‘lgan", "Majburiy"],
    correctAnswer: "Mumkin bo‘lgan"
  },
  {
    word: "Surface",
    prompt: "What is the meaning of \"Surface\"?",
    options: ["Hajm", "Massa", "Yuza", "Tekislik"],
    correctAnswer: "Yuza"
  },
  {
    word: "Object",
    prompt: "What does \"Object\" mean?",
    options: ["Formula", "Tenglama", "Narsa, buyum", "Natija"],
    correctAnswer: "Narsa, buyum"
  },
  {
    word: "Closest to",
    prompt: "What is the meaning of \"Closest to\"?",
    options: ["Eng uzoq", "Eng katta", "Eng yaqin", "Eng kichik"],
    correctAnswer: "Eng yaqin"
  },
  {
    word: "Family",
    prompt: "What does \"Family\" mean?",
    options: ["Guruh", "To‘plam", "Oila", "Jamoa"],
    correctAnswer: "Oila"
  },
  {
    word: "Per week",
    prompt: "What is the meaning of \"Per week\"?",
    options: ["Har oy", "Har kun", "Har hafta", "Har yil"],
    correctAnswer: "Har hafta"
  },
  {
    word: "Area",
    prompt: "What does \"Area\" mean?",
    options: ["Hajm", "Massa", "Yuza", "Narx"],
    correctAnswer: "Yuza"
  },
  {
    word: "Increase",
    prompt: "What is the meaning of \"Increase\"?",
    options: ["Kamaymoq", "To‘xtamoq", "Oshmoq, ko‘tarilmoq", "Tushmoq"],
    correctAnswer: "Oshmoq, ko‘tarilmoq"
  },
  {
    word: "Rise",
    prompt: "What does \"Rise\" mean?",
    options: ["Pasaymoq", "Yo‘qolmoq", "Oshmoq, ko‘tarilmoq", "Tushunmoq"],
    correctAnswer: "Oshmoq, ko‘tarilmoq"
  },
  {
    word: "Decrease",
    prompt: "What is the meaning of \"Decrease\"?",
    options: ["O‘smoq", "Ko‘paymoq", "Kamaymoq", "Kattalashmoq"],
    correctAnswer: "Kamaymoq"
  },
  {
    word: "Reduce",
    prompt: "What does \"Reduce\" mean?",
    options: ["Kuchaymoq", "O‘smoq", "Pasaymoq", "Tenglashmoq"],
    correctAnswer: "Pasaymoq"
  },
  {
    word: "Growth",
    prompt: "What is the meaning of \"Growth\"?",
    options: ["Kamayish", "To‘xtash", "O‘smoq", "Tenglik"],
    correctAnswer: "O‘smoq"
  },
  {
    word: "Decay",
    prompt: "What does \"Decay\" mean?",
    options: ["O‘sish", "Ko‘payish", "Kamaymoq", "Boshlanish"],
    correctAnswer: "Kamaymoq"
  },
  {
    word: "Domain",
    prompt: "What is the meaning of \"Domain\"?",
    options: ["To‘plam", "Natija", "Aniqlanish soha", "Daraja"],
    correctAnswer: "Aniqlanish soha"
  },
  {
    word: "Set",
    prompt: "What does \"Set\" mean?",
    options: ["Ketma-ketlik", "Formula", "To‘plam", "Tenglik"],
    correctAnswer: "To‘plam"
  },
  {
    word: "Continuous",
    prompt: "What is the meaning of \"Continuous\"?",
    options: ["Uzilgan", "Chekli", "Uzluksiz", "Kichik"],
    correctAnswer: "Uzluksiz"
  },
  {
    word: "Each",
    prompt: "What does \"Each\" mean?",
    options: ["Hammasi", "Hech biri", "Har bir", "Ayrimlari"],
    correctAnswer: "Har bir"
  },
  {
    word: "Day",
    prompt: "What is the meaning of \"Day\"?",
    options: ["Hafta", "Oy", "Kun", "Yil"],
    correctAnswer: "Kun"
  },
  {
    word: "Relationship",
    prompt: "What does \"Relationship\" mean?",
    options: ["Tenglama", "Formula", "Bog‘lanish", "Solishtirish"],
    correctAnswer: "Bog‘lanish"
  },
  {
    word: "Example",
    prompt: "What is the meaning of \"Example\"?",
    options: ["Natija", "Qism", "Misol, namuna", "Daraja"],
    correctAnswer: "Misol, namuna"
  },
  {
    word: "Exact",
    prompt: "What does \"Exact\" mean?",
    options: ["Taxminiy", "Noto‘g‘ri", "Aniq", "Katta"],
    correctAnswer: "Aniq"
  },
  {
    word: "Compare",
    prompt: "What does \"Compare\" mean?",
    options: ["Ajratmoq", "Ko‘paytirmoq", "Taqqoslamoq", "Boshlamoq"],
    correctAnswer: "Taqqoslamoq"
  },
  {
    word: "Earn",
    prompt: "What is the meaning of \"Earn\"?",
    options: ["Yo‘qotmoq", "Sarflamoq", "Ishlab topmoq", "Saqlamoq"],
    correctAnswer: "Ishlab topmoq"
  }
];

const LESSON_4_QUESTIONS = [
  {
    word: "Polynomial",
    prompt: "What is the meaning of \"Polynomial\"?",
    options: ["Daraja", "Jadval", "Ko‘phad", "Grafik"],
    correctAnswer: "Ko‘phad"
  },
  {
    word: "Except",
    prompt: "What does \"Except\" mean?",
    options: ["Ichida", "Oldin", "Dan tashqari", "Yaqin"],
    correctAnswer: "Dan tashqari"
  },
  {
    word: "For",
    prompt: "What is the meaning of \"For\"?",
    options: ["Keyin", "Orqali", "Uchun", "Qarshi"],
    correctAnswer: "Uchun"
  },
  {
    word: "Degree",
    prompt: "What does \"Degree\" mean?",
    options: ["Narx", "Vazn", "Daraja", "Qoldiq"],
    correctAnswer: "Daraja"
  },
  {
    word: "Several",
    prompt: "What is the meaning of \"Several\"?",
    options: ["Barcha", "Hech biri", "Bir nechta", "Yagona"],
    correctAnswer: "Bir nechta"
  },
  {
    word: "Real solution",
    prompt: "What does \"Real solution\" mean?",
    options: ["Mavhum yechim", "Murakkab yechim", "Haqiqiy yechim", "Noto‘g‘ri yechim"],
    correctAnswer: "Haqiqiy yechim"
  },
  {
    word: "Distinct",
    prompt: "What is the meaning of \"Distinct\"?",
    options: ["O‘xshash", "Oddiy", "Turli xil", "Teng"],
    correctAnswer: "Turli xil"
  },
  {
    word: "Strictly",
    prompt: "What does \"Strictly\" mean?",
    options: ["Erkin", "Oson", "Qat’iy", "Sekin"],
    correctAnswer: "Qat’iy"
  },
  {
    word: "Only",
    prompt: "What is the meaning of \"Only\"?",
    options: ["Ba’zan", "Hammasi", "Faqat", "Hech qachon"],
    correctAnswer: "Faqat"
  },
  {
    word: "Above",
    prompt: "What does \"Above\" mean?",
    options: ["Pastdagi", "Ichidagi", "Yuqoridagi", "Yonidagi"],
    correctAnswer: "Yuqoridagi"
  },
  {
    word: "Remainder",
    prompt: "What is the meaning of \"Remainder\"?",
    options: ["Bo‘linma", "Daraja", "Qoldiq", "Jadval"],
    correctAnswer: "Qoldiq"
  },
  {
    word: "Part",
    prompt: "What does \"Part\" mean?",
    options: ["To‘plam", "Grafik", "Qism", "Natija"],
    correctAnswer: "Qism"
  },
  {
    word: "Indicate",
    prompt: "What is the meaning of \"Indicate\"?",
    options: ["Solishtirmoq", "Yashirmoq", "Ko‘rsatmoq", "O‘lchamoq"],
    correctAnswer: "Ko‘rsatmoq"
  },
  {
    word: "Root",
    prompt: "What does \"Root\" mean?",
    options: ["Qism", "Formula", "Ildiz", "Daraja"],
    correctAnswer: "Ildiz"
  },
  {
    word: "Any",
    prompt: "What is the meaning of \"Any\"?",
    options: ["Hech biri", "Hammasi", "Istalgan", "Faqat"],
    correctAnswer: "Istalgan"
  },
  {
    word: "Real part",
    prompt: "What does \"Real part\" mean?",
    options: ["Mavhum qism", "Grafik qism", "Haqiqiy qismi", "Teng qism"],
    correctAnswer: "Haqiqiy qismi"
  },
  {
    word: "Imaginary part",
    prompt: "What is the meaning of \"Imaginary part\"?",
    options: ["Haqiqiy qism", "Jadval qismi", "Mavhum qism", "Murakkab qism"],
    correctAnswer: "Mavhum qism"
  },
  {
    word: "Graph",
    prompt: "What does \"Graph\" mean?",
    options: ["Jadval", "Ustun", "Grafik", "Satr"],
    correctAnswer: "Grafik"
  },
  {
    word: "Lie",
    prompt: "What is the meaning of \"Lie\"?",
    options: ["Turmoq", "Yugurmoq", "Yotmoq", "Kutmoq"],
    correctAnswer: "Yotmoq"
  },
  {
    word: "Such that",
    prompt: "What does \"Such that\" mean?",
    options: ["Chunki", "Yoki", "Shunaqaki, shundayki", "Ammo"],
    correctAnswer: "Shunaqaki, shundayki"
  },
  {
    word: "Divisible",
    prompt: "What is the meaning of \"Divisible\"?",
    options: ["Juft", "Teng", "Karrali", "Musbat"],
    correctAnswer: "Karrali"
  },
  {
    word: "Table",
    prompt: "What does \"Table\" mean?",
    options: ["Grafik", "Satr", "Jadval", "Ustun"],
    correctAnswer: "Jadval"
  },
  {
    word: "Some",
    prompt: "What is the meaning of \"Some\"?",
    options: ["Hammasi", "Hech biri", "Ba’zi, bir qancha", "Faqat"],
    correctAnswer: "Ba’zi, bir qancha"
  },
  {
    word: "Form",
    prompt: "What does \"Form\" mean?",
    options: ["Tenglama", "Daraja", "Shaklda ko‘rinishda", "O‘lcham"],
    correctAnswer: "Shaklda ko‘rinishda"
  },
  {
    word: "Correspond",
    prompt: "What is the meaning of \"Correspond\"?",
    options: ["Solishtirmoq", "Ajratmoq", "Mos ravishda", "Ko‘paytirmoq"],
    correctAnswer: "Mos ravishda"
  },
  {
    word: "Possible",
    prompt: "What does \"Possible\" mean?",
    options: ["Zarur", "Majburiy", "Mumkin bo‘lgan", "Noto‘g‘ri"],
    correctAnswer: "Mumkin bo'lgan"
  },
  {
    word: "Deposit",
    prompt: "What is the meaning of \"Deposit\"?",
    options: ["Xarajat", "Daromad", "Sarmoya", "To‘lov"],
    correctAnswer: "Sarmoya"
  },
  {
    word: "Charge",
    prompt: "What does \"Charge\" mean?",
    options: ["Hajm", "Tezlik", "Narx, narx belgilamoq", "Grafik"],
    correctAnswer: "Narx, narx belgilamoq"
  },
  {
    word: "How much time",
    prompt: "What is the meaning of \"How much time\"?",
    options: ["Qaysi vaqt", "Necha kun", "Qancha vaqt", "Har hafta"],
    correctAnswer: "Qancha vaqt"
  },
  {
    word: "Describe",
    prompt: "What does \"Describe\" mean?",
    options: ["Ko‘rsatmoq", "O‘lchamoq", "Tasvirlamoq", "Ajratmoq"],
    correctAnswer: "Tasvirlamoq"
  },
  {
    word: "Base",
    prompt: "What is the meaning of \"Base\"?",
    options: ["Grafik", "Daraja", "Asos, asoslamoq", "Ustun"],
    correctAnswer: "Asos, asoslamoq"
  },
  {
    word: "Rate",
    prompt: "What does \"Rate\" mean?",
    options: ["Narx", "Miqdor", "Tezlik, daraja", "Vazn"],
    correctAnswer: "Tezlik, daraja"
  },
  {
    word: "Last",
    prompt: "What is the meaning of \"Last\"?",
    options: ["Birinchi", "O‘rtadagi", "Oxirgi, eng so‘nggi", "Yaqin"],
    correctAnswer: "Oxirgi, eng so‘nggi"
  },
  {
    word: "Work",
    prompt: "What does \"Work\" mean?",
    options: ["O‘qimoq", "Dam olmoq", "Ishlamoq", "Yozmoq"],
    correctAnswer: "Ishlamoq"
  },
  {
    word: "Fee",
    prompt: "What is the meaning of \"Fee\"?",
    options: ["Daromad", "Narx", "Xizmat haqi", "Xarajat"],
    correctAnswer: "Xizmat haqi"
  },
  {
    word: "Participant",
    prompt: "What does \"Participant\" mean?",
    options: ["O‘qituvchi", "Talaba", "Ishtirokchi", "Rahbar"],
    correctAnswer: "Ishtirokchi"
  },
  {
    word: "Pay",
    prompt: "What is the meaning of \"Pay\"?",
    options: ["Sotmoq", "Olish", "To‘lamoq", "Yashirmoq"],
    correctAnswer: "To‘lamoq"
  },
  {
    word: "Buy",
    prompt: "What does \"Buy\" mean?",
    options: ["Sotmoq", "To‘lamoq", "Sotib olmoq", "Almashtirmoq"],
    correctAnswer: "Sotib olmoq"
  },
  {
    word: "Price",
    prompt: "What is the meaning of \"Price\"?",
    options: ["Qiymat", "Tezlik", "Narx", "Miqdor"],
    correctAnswer: "Narx"
  },
  {
    word: "Revenue",
    prompt: "What does \"Revenue\" mean?",
    options: ["Xarajat", "To‘lov", "Daromad", "Qarzdorlik"],
    correctAnswer: "Daromad"
  },
  {
    word: "Expense",
    prompt: "What is the meaning of \"Expense\"?",
    options: ["Daromad", "Foyda", "Xarajat", "Ish haqi"],
    correctAnswer: "Xarajat"
  },
  {
    word: "Sequence",
    prompt: "What does \"Sequence\" mean?",
    options: ["To‘plam", "Grafik", "Ketma-ketlik", "Formula"],
    correctAnswer: "Ketma-ketlik"
  },
  {
    word: "Row",
    prompt: "What is the meaning of \"Row\"?",
    options: ["Ustun", "Jadval", "Satr", "Grafik"],
    correctAnswer: "Satr"
  },
  {
    word: "Column",
    prompt: "What does \"Column\" mean?",
    options: ["Satr", "Qator", "Ustun", "Jadval"],
    correctAnswer: "Ustun"
  },
  {
    word: "Before",
    prompt: "What is the meaning of \"Before\"?",
    options: ["Keyin", "Oxirida", "Oldin", "Davomida"],
    correctAnswer: "Oldin"
  },
  {
    word: "After",
    prompt: "What does \"After\" mean?",
    options: ["Oldin", "Boshlanishida", "Keyin", "Yuqorida"],
    correctAnswer: "Keyin"
  },
  {
    word: "Quotient",
    prompt: "What is the meaning of \"Quotient\"?",
    options: ["Bo‘luvchi", "Qoldiq", "Bo‘linma", "Ko‘paytma"],
    correctAnswer: "Bo‘linma"
  },
  {
    word: "Below",
    prompt: "What does \"Below\" mean?",
    options: ["Yuqorida", "Yonida", "Quyida", "Ichida"],
    correctAnswer: "Quyida"
  },
  {
    word: "Figure",
    prompt: "What is the meaning of \"Figure\"?",
    options: ["Jadval", "Grafik", "Rasm", "Formula"],
    correctAnswer: "Rasm"
  },
  {
    word: "Weight",
    prompt: "What does \"Weight\" mean?",
    options: ["Hajm", "Narx", "Vazn", "Massa"],
    correctAnswer: "Vazn"
  }
];
const LESSONS = {
  lesson1: {
    title: "Lesson 1",
    description: "SAT basic vocabulary",
    questions: QUESTIONS
  },
  lesson2: {
    title: "Lesson 2",
    description: "Intermediate SAT vocabulary",
    questions: LESSON_2_QUESTIONS
  },
  lesson3: {
    title: "Lesson 3",
    description: "Exponential, measurement, and growth vocabulary",
    questions: LESSON_3_QUESTIONS
  },
  lesson4: {
    title: "Lesson 4",
    description: "Polynomial, graph, and finance vocabulary",
    questions: LESSON_4_QUESTIONS
  }
};

const TRANSLATIONS = {
  en: {
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    eyebrow: "Premium SAT vocabulary trainer",
    description: "Build precise academic vocabulary with a focused 20-question SAT-style test drawn from 50 high-value words. Each session reshuffles questions and answers so practice stays sharp, fair, and exam-ready.",
    startTest: "Start Test",
    vocabularyButton: "Vocabulary",
    securityRules: "Security Rules",
    words: "Words",
    questions: "Questions",
    minutes: "Minutes",
    customize: "Customize",
    themeStudio: "Theme Studio",
    saved: "Saved",
    accentColor: "Accent color",
    supportColor: "Support color",
    surfaceColor: "Surface color",
    soundEffects: "Sound effects",
    fontStyle: "Font style",
    learningEyebrow: "Why this matters",
    learningTitle: "SAT vocabulary rewards accuracy, speed, and context.",
    learningText: "Strong vocabulary helps with reading passages, command of evidence, grammar decisions, and college-level writing. This test trains recognition under time pressure while showing exactly which words need another review cycle.",
    typing: "Master high-impact words before test day."
  },
  uz: {
    lightMode: "Yorug rejim",
    darkMode: "Qorong'i rejim",
    eyebrow: "Premium SAT lug'at mashqi",
    description: "50 ta muhim SAT so'zidan tuzilgan 20 savollik test orqali akademik lug'atingizni mustahkamlang. Har bir urinishda savollar va javoblar aralashadi, shuning uchun mashq adolatli, sermazmun va imtihonga yaqin bo'ladi.",
    startTest: "Testni boshlash",
    vocabularyButton: "Lug'at",
    securityRules: "Xavfsizlik qoidalari",
    words: "So'z",
    questions: "Savol",
    minutes: "Daqiqa",
    customize: "Sozlash",
    themeStudio: "Mavzu paneli",
    saved: "Saqlandi",
    accentColor: "Asosiy rang",
    supportColor: "Qo'shimcha rang",
    surfaceColor: "Panel rangi",
    soundEffects: "Ovoz effektlari",
    fontStyle: "Shrift uslubi",
    learningEyebrow: "Nega bu muhim",
    learningTitle: "SAT lug'ati aniqlik, tezlik va kontekstni talab qiladi.",
    learningText: "Kuchli lug'at o'qish matnlari, dalillarni tushunish, grammatika tanlovi va akademik yozuvda yordam beradi. Bu test vaqt bosimi ostida tanib olishni mashq qildiradi va qaysi so'zlarni yana ko'rib chiqish kerakligini aniq ko'rsatadi.",
    typing: "Imtihon kunidan oldin muhim so'zlarni puxta egallang."
  }
};

const FONTS = [
  ["Inter", "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"],
  ["Segoe UI", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"],
  ["Arial", "Arial, Helvetica, sans-serif"],
  ["Helvetica", "Helvetica, Arial, sans-serif"],
  ["Verdana", "Verdana, Geneva, sans-serif"],
  ["Trebuchet MS", "'Trebuchet MS', Arial, sans-serif"],
  ["Tahoma", "Tahoma, Geneva, sans-serif"],
  ["Gill Sans", "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif"],
  ["Calibri", "Calibri, Candara, Segoe, sans-serif"],
  ["Candara", "Candara, Calibri, Segoe, sans-serif"],
  ["Century Gothic", "'Century Gothic', CenturyGothic, AppleGothic, sans-serif"],
  ["Franklin Gothic", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"],
  ["Futura", "Futura, 'Trebuchet MS', Arial, sans-serif"],
  ["Aptos", "Aptos, Calibri, Arial, sans-serif"],
  ["Cambria", "Cambria, Georgia, serif"],
  ["Georgia", "Georgia, 'Times New Roman', serif"],
  ["Garamond", "Garamond, Baskerville, serif"],
  ["Palatino", "Palatino, 'Palatino Linotype', Georgia, serif"],
  ["Courier New", "'Courier New', Courier, monospace"],
  ["Consolas", "Consolas, 'Liberation Mono', monospace"],
  ["Lucida Console", "'Lucida Console', Monaco, monospace"],
  ["Bookman", "'Bookman Old Style', Georgia, serif"]
];

const THEMES = {
  aurora: { accent: "#2dd4bf", support: "#f59e0b", surface: "#111827" },
  scholar: { accent: "#60a5fa", support: "#c084fc", surface: "#111827" },
  ember: { accent: "#fb7185", support: "#facc15", surface: "#1f1717" },
  mint: { accent: "#22c55e", support: "#38bdf8", surface: "#101827" }
};


function buildVocabularyLesson(pairs) {
  const translations = [...new Set(pairs.map(([, translation]) => translation))];
  return pairs.map(([word, correctAnswer], index) => {
    const distractors = translations
      .filter((translation) => translation !== correctAnswer)
      .slice(index % Math.max(translations.length - 3, 1))
      .concat(translations)
      .filter((translation) => translation !== correctAnswer);
    const uniqueDistractors = [...new Set(distractors)].slice(0, 3);
    return {
      word,
      prompt: `What is the meaning of "${word}"?`,
      options: [correctAnswer, ...uniqueDistractors],
      correctAnswer
    };
  });
}

const EXTRA_LESSON_CONFIG = window.SAT_EXTRA_LESSON_PAIRS || {};
Object.entries(EXTRA_LESSON_CONFIG).forEach(([lessonId, config]) => {
  LESSONS[lessonId] = {
    title: config.title,
    description: config.description,
    unlockAt: config.unlockAt,
    questions: buildVocabularyLesson(config.pairs)
  };
});

Object.entries(LESSONS).forEach(([lessonId, lesson]) => {
  lesson.questions.forEach((question, index) => {
    question.id = question.id || `${lessonId}-q${index + 1}`;
  });
});

const SCHEDULED_LESSON_IDS = Object.keys(EXTRA_LESSON_CONFIG).sort((a, b) => Number(a.replace("lesson", "")) - Number(b.replace("lesson", "")));
const UNLOCK_STATE_KEY = "satDictionaryUnlockState";
const VOCAB_RENDER_BATCH_SIZE = 16;
const VOCAB_SEARCH_DEBOUNCE_MS = 180;
const SETTINGS_KEY = "satDictionarySettings";
const SCORES_KEY = "satDictionaryScores";
const QUESTION_MIN = 5;
const QUESTION_MAX = 50;
const DEFAULT_QUESTION_AMOUNT = 20;
const SECONDS_PER_QUESTION = 10;

const elements = {
  body: document.body,
  loadingScreen: document.getElementById("loadingScreen"),
  screens: document.querySelectorAll(".screen"),
  homeOnly: document.querySelectorAll("[data-home-only]"),
  startButton: document.getElementById("startButton"),
  quizSettingsLessonText: document.getElementById("quizSettingsLessonText"),
  selectedQuestionText: document.getElementById("selectedQuestionText"),
  selectedTimeText: document.getElementById("selectedTimeText"),
  questionAmountSlider: document.getElementById("questionAmountSlider"),
  questionAmountInput: document.getElementById("questionAmountInput"),
  questionMinusButton: document.getElementById("questionMinusButton"),
  questionPlusButton: document.getElementById("questionPlusButton"),
  quizSettingsBackButton: document.getElementById("quizSettingsBackButton"),
  quizSettingsStartButton: document.getElementById("quizSettingsStartButton"),
  vocabularyButtons: document.querySelectorAll("[data-open-vocabulary]"),
  vocabCloseButton: document.getElementById("vocabCloseButton"),
  vocabSearchInput: document.getElementById("vocabSearchInput"),
  vocabLessonButtons: document.querySelectorAll("[data-vocab-lesson]"),
  vocabularyList: document.getElementById("vocabularyList"),
  vocabCount: document.getElementById("vocabCount"),
  copyVocabularyButton: document.getElementById("copyVocabularyButton"),
  copyStatus: document.getElementById("copyStatus"),
  unlockCountdown: document.getElementById("unlockCountdown"),
  unlockCountdownText: document.getElementById("unlockCountdownText"),
  lessonBackButton: document.getElementById("lessonBackButton"),
  lessonButtons: document.querySelectorAll("[data-lesson]"),
  retryButton: document.getElementById("retryButton"),
  homeButton: document.getElementById("homeButton"),
  finishButton: document.getElementById("finishButton"),
  nextButton: document.getElementById("nextButton"),
  optionsGrid: document.getElementById("optionsGrid"),
  testLabel: document.getElementById("testLabel"),
  questionTitle: document.getElementById("questionTitle"),
  questionCounter: document.getElementById("questionCounter"),
  questionMeta: document.getElementById("questionMeta"),
  progressBar: document.getElementById("progressBar"),
  timerDisplay: document.getElementById("timerDisplay"),
  scoreDisplay: document.getElementById("scoreDisplay"),
  resultStatus: document.getElementById("resultStatus"),
  scoreBig: document.getElementById("scoreBig"),
  percentageBig: document.getElementById("percentageBig"),
  gradeValue: document.getElementById("gradeValue"),
  correctValue: document.getElementById("correctValue"),
  missedValue: document.getElementById("missedValue"),
  incorrectList: document.getElementById("incorrectList"),
  cheatWarning: document.getElementById("cheatWarning"),
  progressSyncBox: document.getElementById("progressSyncBox"),
  progressSyncText: document.getElementById("progressSyncText"),
  confettiLayer: document.getElementById("confettiLayer"),
  modeToggle: document.getElementById("modeToggle"),
  accentColor: document.getElementById("accentColor"),
  supportColor: document.getElementById("supportColor"),
  surfaceColor: document.getElementById("surfaceColor"),
  soundSelect: document.getElementById("soundSelect"),
  fontSelect: document.getElementById("fontSelect"),
  languageButtons: document.querySelectorAll("[data-lang]"),
  presetButtons: document.querySelectorAll("[data-theme]"),
  translatable: document.querySelectorAll("[data-i18n]"),
  typingLine: document.getElementById("typingLine"),
  openRulesButton: document.getElementById("openRulesButton"),
  modalOverlay: document.getElementById("modalOverlay"),
  modalKicker: document.getElementById("modalKicker"),
  modalTitle: document.getElementById("modalTitle"),
  modalBody: document.getElementById("modalBody"),
  modalActionButton: document.getElementById("modalActionButton"),
  closeModalButton: document.getElementById("closeModalButton"),
  cursorDot: document.querySelector(".cursor-dot"),
  cursorRing: document.querySelector(".cursor-ring"),
  particleCanvas: document.getElementById("particleCanvas")
};

const state = {
  settings: {
    language: "en",
    mode: "dark",
    accent: THEMES.aurora.accent,
    support: THEMES.aurora.support,
    surface: THEMES.aurora.surface,
    font: FONTS[0][1],
    sound: "on",
    theme: "aurora"
  },
  user: window.SAT_APP_USER || null,
  progress: window.SAT_USER_PROGRESS || {},
  testActive: false,
  terminated: false,
  activeLesson: "lesson1",
  pendingLesson: "lesson1",
  questionAmount: DEFAULT_QUESTION_AMOUNT,
  totalTestSeconds: DEFAULT_QUESTION_AMOUNT * SECONDS_PER_QUESTION,
  activeVocabularyLesson: "lesson1",
  vocabularyCache: new Map(),
  vocabularySearchTimer: null,
  vocabularyRenderFrame: null,
  vocabularyRenderToken: 0,
  currentIndex: 0,
  score: 0,
  selectedOption: null,
  session: [],
  answers: [],
  timer: DEFAULT_QUESTION_AMOUNT * SECONDS_PER_QUESTION,
  timerId: null,
  audioContext: null,
  typingId: null,
  copyStatusTimer: null,
  unlockCountdownId: null,
  unlockState: {
    unlockedLessons: [],
    notifiedLessons: [],
    unlockTimes: {}
  },
  particles: [],
  lastParticleFrame: 0,
  lastDevtoolsCheck: 0,
  startedAt: null
};

function init() {
  loadSettings();
  loadUnlockState();
  setupScheduledLessonUi();
  refreshDynamicControls();
  syncLessonUnlocks(true);
  startUnlockCountdown();
  populateFonts();
  applySettings();
  bindEvents();
  updateLanguage();
  startTyping();
  initParticles();
  requestAnimationFrame(animateParticles);

  window.setTimeout(() => {
    elements.loadingScreen.classList.add("hidden");
  }, 650);
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    if (saved && typeof saved === "object") {
      state.settings = { ...state.settings, ...saved };
    }
  } catch {
    localStorage.removeItem(SETTINGS_KEY);
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function loadUnlockState() {
  try {
    const saved = JSON.parse(localStorage.getItem(UNLOCK_STATE_KEY));
    if (saved && typeof saved === "object") {
      state.unlockState = {
        unlockedLessons: Array.isArray(saved.unlockedLessons) ? saved.unlockedLessons : [],
        notifiedLessons: Array.isArray(saved.notifiedLessons) ? saved.notifiedLessons : [],
        unlockTimes: saved.unlockTimes && typeof saved.unlockTimes === "object" ? saved.unlockTimes : {}
      };
    }
  } catch {
    localStorage.removeItem(UNLOCK_STATE_KEY);
  }
}

function saveUnlockState() {
  localStorage.setItem(UNLOCK_STATE_KEY, JSON.stringify(state.unlockState));
}

function refreshDynamicControls() {
  elements.lessonButtons = document.querySelectorAll("[data-lesson]");
  elements.vocabLessonButtons = document.querySelectorAll("[data-vocab-lesson]");
}

function setupScheduledLessonUi() {
  const lessonGrid = document.querySelector(".lesson-grid");
  const vocabTabs = document.querySelector(".vocab-tabs");
  SCHEDULED_LESSON_IDS.forEach((lessonId, index) => {
    const lesson = LESSONS[lessonId];
    const lessonNumber = lessonId.replace("lesson", "");
    if (lessonGrid && !lessonGrid.querySelector(`[data-lesson-card="${lessonId}"]`)) {
      const card = document.createElement("article");
      card.className = `lesson-card lesson-card-daily lesson-card-${lessonNumber}`;
      card.dataset.lessonCard = lessonId;
      card.innerHTML = `
        <div class="lesson-visual lesson-image-frame">
          <img class="lesson-image" src="${window.SAT_STATIC_IMAGE_BASE || ""}lesson_${lessonNumber}.png" alt="${lesson.title} vocabulary image">
          <span class="visual-chip">L${lessonNumber}</span>
        </div>
        <div class="lesson-content">
          <p class="eyebrow">Daily lesson</p>
          <h2>${lesson.title}</h2>
          <p>${lesson.description}</p>
          <p class="unlock-date"></p>
        </div>
        <button class="primary-button lesson-start-button" type="button" data-lesson="${lessonId}">Start</button>
      `;
      lessonGrid.appendChild(card);
    }

    if (vocabTabs && !vocabTabs.querySelector(`[data-vocab-lesson="${lessonId}"]`)) {
      const tab = document.createElement("button");
      tab.className = "vocab-tab";
      tab.type = "button";
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", "false");
      tab.dataset.vocabLesson = lessonId;
      tab.textContent = `${lesson.title} Vocabulary`;
      vocabTabs.appendChild(tab);
    }
  });
}

function getLessonUnlockTime(lessonId) {
  const config = EXTRA_LESSON_CONFIG[lessonId];
  return config ? new Date(config.unlockAt).getTime() : 0;
}

function isLessonUnlocked(lessonId) {
  if (!SCHEDULED_LESSON_IDS.includes(lessonId)) return true;
  return state.unlockState.unlockedLessons.includes(lessonId) || Date.now() >= getLessonUnlockTime(lessonId);
}

function syncLessonUnlocks(shouldNotify) {
  const newlyUnlocked = [];
  SCHEDULED_LESSON_IDS.forEach((lessonId) => {
    const unlockTime = getLessonUnlockTime(lessonId);
    if (Date.now() >= unlockTime && !state.unlockState.unlockedLessons.includes(lessonId)) {
      state.unlockState.unlockedLessons.push(lessonId);
      state.unlockState.unlockTimes[lessonId] = new Date(unlockTime).toISOString();
      newlyUnlocked.push(lessonId);
    }
  });

  if (newlyUnlocked.length) saveUnlockState();
  renderLessonLockStates(newlyUnlocked);

  if (shouldNotify && newlyUnlocked.length) {
    const unnotified = newlyUnlocked.filter((lessonId) => !state.unlockState.notifiedLessons.includes(lessonId));
    if (unnotified.length) {
      showUnlockNotification(unnotified[unnotified.length - 1]);
      state.unlockState.notifiedLessons.push(...unnotified);
      saveUnlockState();
    }
  }

  return newlyUnlocked;
}

function renderLessonLockStates(newlyUnlocked = []) {
  refreshDynamicControls();
  elements.lessonButtons.forEach((button) => {
    const lessonId = button.dataset.lesson;
    const card = button.closest(".lesson-card");
    const locked = !isLessonUnlocked(lessonId);
    button.disabled = locked;
    button.textContent = locked ? "Locked" : "Start";
    if (!card) return;
    card.classList.toggle("locked", locked);
    card.classList.toggle("just-unlocked", newlyUnlocked.includes(lessonId));
    const unlockDate = card.querySelector(".unlock-date");
    if (unlockDate && SCHEDULED_LESSON_IDS.includes(lessonId)) {
      unlockDate.textContent = locked ? `Unlocks ${formatUnlockDate(getLessonUnlockTime(lessonId))}` : "Unlocked and ready";
    }
    if (locked && !card.querySelector(".lock-badge")) {
      const badge = document.createElement("div");
      badge.className = "lock-badge";
      badge.innerHTML = `<span class="lock-shape" aria-hidden="true"></span><strong>Locked</strong>`;
      card.appendChild(badge);
    }
    if (!locked) {
      const badge = card.querySelector(".lock-badge");
      if (badge) badge.remove();
    }
    if (newlyUnlocked.includes(lessonId)) {
      window.setTimeout(() => card.classList.remove("just-unlocked"), 3600);
    }
  });

  elements.vocabLessonButtons.forEach((button) => {
    const lessonId = button.dataset.vocabLesson;
    const locked = !isLessonUnlocked(lessonId);
    button.disabled = locked;
    button.classList.toggle("locked", locked);
    button.setAttribute("aria-disabled", String(locked));
  });

  if (!isLessonUnlocked(state.activeVocabularyLesson)) {
    state.activeVocabularyLesson = "lesson1";
  }
}

function formatUnlockDate(timestamp) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(timestamp));
}

function getNextLockedLesson() {
  return SCHEDULED_LESSON_IDS.find((lessonId) => !isLessonUnlocked(lessonId));
}

function startUnlockCountdown() {
  updateUnlockCountdown();
  clearInterval(state.unlockCountdownId);
  state.unlockCountdownId = window.setInterval(updateUnlockCountdown, 1000);
}

function updateUnlockCountdown() {
  if (!elements.unlockCountdownText) return;
  const nextLessonId = getNextLockedLesson();
  if (!nextLessonId) {
    elements.unlockCountdown.classList.add("all-unlocked");
    elements.unlockCountdownText.textContent = "All scheduled lessons are unlocked.";
    return;
  }

  const unlockTime = getLessonUnlockTime(nextLessonId);
  const remaining = unlockTime - Date.now();
  if (remaining <= 0) {
    syncLessonUnlocks(true);
    updateUnlockCountdown();
    return;
  }

  const lesson = LESSONS[nextLessonId];
  elements.unlockCountdown.classList.remove("all-unlocked");
  elements.unlockCountdownText.textContent = `${lesson.title} will be added in: ${formatCountdown(remaining)}`;
}

function formatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const dayText = days > 0 ? `${days} day${days === 1 ? "" : "s"} ` : "";
  return `${dayText}${String(hours).padStart(2, "0")} hours ${String(minutes).padStart(2, "0")} minutes ${String(seconds).padStart(2, "0")} seconds`;
}

function showUnlockNotification(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;
  const toast = document.createElement("div");
  toast.className = "unlock-toast";
  toast.innerHTML = `<span class="unlock-toast-icon" aria-hidden="true">✓</span><div><strong>${lesson.title} unlocked</strong><p>${lesson.description}</p></div>`;
  document.body.appendChild(toast);
  playTone("finish");
  window.setTimeout(() => toast.classList.add("show"), 20);
  window.setTimeout(() => {
    toast.classList.remove("show");
    window.setTimeout(() => toast.remove(), 360);
  }, 4200);
}

function showLockedLessonNotice(lessonId) {
  const lesson = LESSONS[lessonId];
  const unlockTime = getLessonUnlockTime(lessonId);
  showModal({
    kicker: "Lesson locked",
    title: `${lesson.title} unlocks soon`,
    body: `${lesson.title} becomes available at ${formatUnlockDate(unlockTime)}. The countdown at the top updates every second.`,
    action: "Got it"
  });
}
function populateFonts() {
  elements.fontSelect.innerHTML = "";
  FONTS.forEach(([name, stack]) => {
    const option = document.createElement("option");
    option.value = stack;
    option.textContent = name;
    option.style.fontFamily = stack;
    elements.fontSelect.appendChild(option);
  });
}

function applySettings() {
  const root = document.documentElement;
  const panelColor = state.settings.mode === "light"
    ? `color-mix(in srgb, ${state.settings.surface} 8%, white)`
    : `color-mix(in srgb, ${state.settings.surface} 76%, transparent)`;
  const solidPanelColor = state.settings.mode === "light"
    ? `color-mix(in srgb, ${state.settings.surface} 10%, white)`
    : state.settings.surface;
  root.style.setProperty("--accent", state.settings.accent);
  root.style.setProperty("--support", state.settings.support);
  root.style.setProperty("--surface-custom", state.settings.surface);
  root.style.setProperty("--font-main", state.settings.font);
  elements.body.classList.toggle("light", state.settings.mode === "light");
  elements.body.style.setProperty("--panel", panelColor);
  elements.body.style.setProperty("--panel-solid", solidPanelColor);
  elements.accentColor.value = state.settings.accent;
  elements.supportColor.value = state.settings.support;
  elements.surfaceColor.value = state.settings.surface;
  elements.fontSelect.value = state.settings.font;
  elements.soundSelect.value = state.settings.sound;

  elements.modeToggle.setAttribute("aria-pressed", String(state.settings.mode === "light"));
  elements.presetButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === state.settings.theme);
  });

  updateLanguage();
}

function updateLanguage() {
  const dictionary = TRANSLATIONS[state.settings.language] || TRANSLATIONS.en;
  elements.translatable.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = key === "lightMode"
        ? dictionary[state.settings.mode === "light" ? "darkMode" : "lightMode"]
        : dictionary[key];
    }
  });

  elements.languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.settings.language);
  });

  startTyping();
}

function bindEvents() {
  elements.startButton.addEventListener("click", handleStart);
  elements.vocabularyButtons.forEach((button) => button.addEventListener("click", openVocabulary));
  elements.vocabCloseButton.addEventListener("click", () => showScreen("homeScreen"));
  elements.vocabSearchInput.addEventListener("input", scheduleVocabularyRender);
  elements.copyVocabularyButton.addEventListener("click", copyVocabulary);
  elements.vocabLessonButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!isLessonUnlocked(button.dataset.vocabLesson)) {
        showLockedLessonNotice(button.dataset.vocabLesson);
        return;
      }
      state.activeVocabularyLesson = button.dataset.vocabLesson;
      elements.vocabSearchInput.value = "";
      renderVocabulary({ resetScroll: true });
      playTone("tap");
    });
  });
  elements.retryButton.addEventListener("click", () => handleLessonStart(state.activeLesson));
  elements.quizSettingsBackButton.addEventListener("click", () => showScreen("lessonScreen"));
  elements.quizSettingsStartButton.addEventListener("click", () => handleLessonStart(state.pendingLesson));
  elements.questionAmountSlider.addEventListener("input", (event) => updateQuestionAmount(event.target.value));
  elements.questionAmountInput.addEventListener("input", (event) => updateQuestionAmount(event.target.value));
  elements.questionMinusButton.addEventListener("click", () => updateQuestionAmount(state.questionAmount - 1));
  elements.questionPlusButton.addEventListener("click", () => updateQuestionAmount(state.questionAmount + 1));
  elements.homeButton.addEventListener("click", () => showScreen("homeScreen"));
  elements.lessonBackButton.addEventListener("click", () => showScreen("homeScreen"));
  elements.lessonButtons.forEach((button) => {
    button.addEventListener("click", () => openQuizSettings(button.dataset.lesson));
  });
  elements.finishButton.addEventListener("click", () => finishTest("manual"));
  elements.nextButton.addEventListener("click", goNext);

  elements.modeToggle.addEventListener("click", () => {
    state.settings.mode = state.settings.mode === "light" ? "dark" : "light";
    saveSettings();
    applySettings();
    playTone("tap");
  });

  elements.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.settings.language = button.dataset.lang;
      saveSettings();
      updateLanguage();
      playTone("tap");
    });
  });

  elements.presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = THEMES[button.dataset.theme];
      if (!theme) return;
      state.settings.theme = button.dataset.theme;
      state.settings.accent = theme.accent;
      state.settings.support = theme.support;
      state.settings.surface = theme.surface;
      saveSettings();
      applySettings();
      playTone("tap");
    });
  });

  [
    [elements.accentColor, "accent"],
    [elements.supportColor, "support"],
    [elements.surfaceColor, "surface"],
    [elements.fontSelect, "font"],
    [elements.soundSelect, "sound"]
  ].forEach(([control, key]) => {
    control.addEventListener("input", () => {
      state.settings[key] = control.value;
      if (key !== "sound") {
        state.settings.theme = "custom";
      }
      saveSettings();
      applySettings();
    });
  });

  elements.openRulesButton.addEventListener("click", () => {
    showModal({
      kicker: "Secure mode",
      title: "Fullscreen test rules",
      body: "The test runs in fullscreen. Leaving the page, opening developer tools, copying text, right clicking, switching tabs, or using system shortcuts ends the session and records the current result.",
      action: "I understand"
    });
  });
  elements.closeModalButton.addEventListener("click", closeModal);
  elements.modalActionButton.addEventListener("click", closeModal);
  elements.modalOverlay.addEventListener("click", (event) => {
    if (event.target === elements.modalOverlay) closeModal();
  });

  document.addEventListener("keydown", handleKeydown, true);
  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("blur", () => flagCheating("Window or application switch detected."));
  window.addEventListener("resize", handleResize);
  document.addEventListener("contextmenu", blockDuringTest, true);
  document.addEventListener("copy", blockDuringTest, true);
  document.addEventListener("cut", blockDuringTest, true);
  document.addEventListener("paste", blockDuringTest, true);
  document.addEventListener("dragstart", blockDuringTest, true);
  document.addEventListener("selectstart", (event) => {
    if (state.testActive) event.preventDefault();
  }, true);

  document.addEventListener("pointermove", updateCursor);
  document.addEventListener("pointerdown", () => {
    elements.cursorRing.style.width = "22px";
    elements.cursorRing.style.height = "22px";
  });
  document.addEventListener("pointerup", () => {
    elements.cursorRing.style.width = "32px";
    elements.cursorRing.style.height = "32px";
  });

  const observer = new MutationObserver(detectTranslationAttempt);
  observer.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["class", "style", "lang"]
  });
}

function handleStart() {
  if (state.testActive) return;
  showScreen("lessonScreen");
  playTone("tap");
}

function clampQuestionAmount(value, lessonId = state.pendingLesson) {
  const lesson = LESSONS[lessonId] || LESSONS.lesson1;
  const lessonMax = Math.min(QUESTION_MAX, lesson.questions.length);
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return Math.min(lessonMax, DEFAULT_QUESTION_AMOUNT);
  return Math.min(lessonMax, Math.max(QUESTION_MIN, parsed));
}

function getSessionLength() {
  return state.session.length || state.questionAmount || DEFAULT_QUESTION_AMOUNT;
}

function updateQuestionAmount(value) {
  const amount = clampQuestionAmount(value);
  const lesson = LESSONS[state.pendingLesson] || LESSONS.lesson1;
  const max = Math.min(QUESTION_MAX, lesson.questions.length);
  state.questionAmount = amount;
  state.totalTestSeconds = amount * SECONDS_PER_QUESTION;

  elements.questionAmountSlider.min = String(QUESTION_MIN);
  elements.questionAmountSlider.max = String(max);
  elements.questionAmountSlider.value = String(amount);
  elements.questionAmountInput.min = String(QUESTION_MIN);
  elements.questionAmountInput.max = String(max);
  elements.questionAmountInput.value = String(amount);
  elements.selectedQuestionText.textContent = `Selected Questions: ${amount}`;
  elements.selectedTimeText.textContent = `Total Time: ${state.totalTestSeconds} Seconds`;
  elements.questionMinusButton.disabled = amount <= QUESTION_MIN;
  elements.questionPlusButton.disabled = amount >= max;
}

function openQuizSettings(lessonId) {
  if (state.testActive) return;
  syncLessonUnlocks(false);
  if (!isLessonUnlocked(lessonId)) {
    showLockedLessonNotice(lessonId);
    return;
  }

  const lesson = LESSONS[lessonId] || LESSONS.lesson1;
  state.pendingLesson = LESSONS[lessonId] ? lessonId : "lesson1";
  elements.quizSettingsLessonText.textContent = `${lesson.title} selected. Choose 5 to ${Math.min(QUESTION_MAX, lesson.questions.length)} questions before secure mode begins.`;
  updateQuestionAmount(state.questionAmount);
  showScreen("quizSettingsScreen");
  elements.questionAmountSlider.focus({ preventScroll: true });
  playTone("tap");
}

async function fetchServerSession(lessonId, questionTotal) {
  if (!state.user) return null;
  try {
    const params = new URLSearchParams({ lesson_id: lessonId, count: String(questionTotal) });
    const response = await fetch(`/api/test/start?${params.toString()}`, {
      credentials: "same-origin"
    });
    if (!response.ok) return null;
    const payload = await response.json();
    if (!payload.ok || !Array.isArray(payload.questions)) return null;
    return payload.questions.map((question) => ({
      id: question.id,
      word: question.word,
      prompt: question.prompt,
      options: question.options,
      correctAnswer: question.correct_answer,
      choices: question.options
    }));
  } catch {
    return null;
  }
}

async function handleLessonStart(lessonId) {
  if (state.testActive) return;
  const lesson = LESSONS[lessonId] || LESSONS.lesson1;
  syncLessonUnlocks(false);
  if (!isLessonUnlocked(lessonId)) {
    showLockedLessonNotice(lessonId);
    return;
  }
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen({ navigationUI: "hide" });
    }
    const questionTotal = clampQuestionAmount(state.questionAmount, lessonId);
    const serverQuestions = await fetchServerSession(lessonId, questionTotal);
    startTest(lessonId, lesson, serverQuestions);
  } catch {
    showModal({
      kicker: "Fullscreen required",
      title: "Allow fullscreen to begin",
      body: "Your browser blocked fullscreen mode. Press the lesson Start button again and allow fullscreen so the secure quiz can run.",
      action: "Got it"
    });
  }
}

function startTest(lessonId = state.activeLesson, lesson = LESSONS[lessonId] || LESSONS.lesson1, serverQuestions = null) {
  state.activeLesson = LESSONS[lessonId] ? lessonId : "lesson1";
  state.testActive = true;
  state.terminated = false;
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;
  state.answers = [];
  const questionTotal = clampQuestionAmount(state.questionAmount, lessonId);
  state.questionAmount = questionTotal;
  state.totalTestSeconds = questionTotal * SECONDS_PER_QUESTION;
  state.timer = state.totalTestSeconds;
  state.startedAt = Date.now();
  const localQuestions = shuffle([...lesson.questions]).slice(0, questionTotal);
  const sourceQuestions = Array.isArray(serverQuestions) && serverQuestions.length ? serverQuestions : localQuestions;
  state.session = sourceQuestions.slice(0, questionTotal).map((question, index) => ({
    ...question,
    id: question.id || `${state.activeLesson}-q${index + 1}`,
    sessionId: `${state.activeLesson}-${index}-${question.word}`,
    choices: question.choices ? [...question.choices] : shuffle(question.options)
  }));

  showScreen("testScreen");
  elements.testLabel.textContent = `${lesson.title} Secure Session`;
  elements.cheatWarning.classList.add("hidden");
  elements.scoreDisplay.textContent = "0";
  renderQuestion();
  startTimer();
  playTone("start");
}

function renderQuestion() {
  const question = state.session[state.currentIndex];
  state.selectedOption = null;
  elements.nextButton.disabled = true;
  const sessionLength = getSessionLength();
  elements.questionCounter.textContent = `Question ${state.currentIndex + 1} of ${sessionLength}`;
  elements.questionMeta.textContent = "Choose the best answer.";
  elements.questionTitle.textContent = question.prompt;
  elements.progressBar.style.width = `${(state.currentIndex / sessionLength) * 100}%`;
  elements.optionsGrid.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");
    button.dataset.answer = choice;
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${choice}</span>
    `;
    button.addEventListener("click", () => selectOption(button, choice));
    elements.optionsGrid.appendChild(button);
  });

  const firstOption = elements.optionsGrid.querySelector(".option-button");
  if (firstOption) firstOption.focus({ preventScroll: true });
}

function selectOption(button, choice) {
  if (!state.testActive || state.selectedOption) return;
  const question = state.session[state.currentIndex];
  const isCorrect = choice === question.correctAnswer;
  state.selectedOption = choice;

  elements.optionsGrid.querySelectorAll(".option-button").forEach((option) => {
    option.disabled = true;
    option.setAttribute("aria-checked", String(option === button));
    if (option.dataset.answer === question.correctAnswer) option.classList.add("correct");
  });

  button.classList.add("selected");
  if (!isCorrect) button.classList.add("wrong");

  state.answers.push({
    sessionId: question.sessionId,
    questionId: question.id,
    word: question.word,
    question: question.prompt,
    correctAnswer: question.correctAnswer,
    selectedAnswer: choice,
    correct: isCorrect
  });

  if (isCorrect) {
    state.score += 1;
    elements.scoreDisplay.textContent = String(state.score);
    playTone("correct");
  } else {
    playTone("wrong");
  }

  elements.nextButton.disabled = false;
  elements.nextButton.textContent = state.currentIndex === getSessionLength() - 1 ? "Show Result" : "Next Question";
  elements.nextButton.focus({ preventScroll: true });
}

function goNext() {
  if (!state.selectedOption) return;
  if (state.currentIndex >= getSessionLength() - 1) {
    finishTest("complete");
    return;
  }
  state.currentIndex += 1;
  renderQuestion();
}

function startTimer() {
  clearInterval(state.timerId);
  updateTimerDisplay();
  state.timerId = window.setInterval(() => {
    state.timer -= 1;
    updateTimerDisplay();
    if (state.timer <= 0) {
      finishTest("timeout");
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.max(0, Math.floor(state.timer / 60));
  const seconds = Math.max(0, state.timer % 60);
  const lowThreshold = Math.max(10, Math.ceil(state.totalTestSeconds * 0.2));
  const isLow = state.testActive && state.timer <= lowThreshold;
  const isCritical = state.testActive && state.timer <= 10;
  elements.timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  elements.timerDisplay.classList.toggle("timer-low", isLow);
  elements.timerDisplay.classList.toggle("timer-critical", isCritical);
  elements.timerDisplay.classList.remove("timer-tick");
  if (state.testActive) {
    window.requestAnimationFrame(() => elements.timerDisplay.classList.add("timer-tick"));
  }
}

function finishTest(reason, detail = "") {
  if (!state.testActive && reason !== "cheat") return;
  state.testActive = false;
  state.terminated = reason === "cheat";
  clearInterval(state.timerId);
  elements.progressBar.style.width = "100%";

  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }

  const answeredQuestions = new Set(state.answers.map((answer) => answer.sessionId));
  state.session.forEach((question) => {
    if (!answeredQuestions.has(question.sessionId)) {
      state.answers.push({
        sessionId: question.sessionId,
        questionId: question.id,
        word: question.word,
        question: question.prompt,
        correctAnswer: question.correctAnswer,
        selectedAnswer: "No answer",
        correct: false
      });
    }
  });
  const sessionLength = getSessionLength();
  const percent = Math.round((state.score / sessionLength) * 100);
  const grade = getGrade(percent);
  const lesson = LESSONS[state.activeLesson] || LESSONS.lesson1;
  const record = {
    lessonId: state.activeLesson,
    lessonTitle: lesson.title,
    score: state.score,
    questionAmount: sessionLength,
    totalSeconds: state.totalTestSeconds,
    percent,
    grade,
    reason,
    detail,
    date: new Date().toISOString()
  };
  saveScore(record);
  renderResults(record);
  showScreen("resultScreen");
  syncAttempt(record);
  playTone(reason === "cheat" ? "wrong" : "finish");

  if (percent >= 85 && reason !== "cheat") {
    launchConfetti();
  }
}

function renderResults(record) {
  const totalQuestions = record.questionAmount || getSessionLength();
  const missed = totalQuestions - state.score;
  elements.resultStatus.textContent = record.reason === "cheat"
    ? `${record.lessonTitle} terminated`
    : `${record.lessonTitle} complete`;
  elements.scoreBig.textContent = `${state.score}/${totalQuestions}`;
  elements.percentageBig.textContent = `${record.percent}%`;
  elements.gradeValue.textContent = record.grade;
  elements.correctValue.textContent = String(state.score);
  elements.missedValue.textContent = String(missed);

  if (record.reason === "cheat") {
    elements.cheatWarning.textContent = record.detail || "Anti-cheat protection ended this test.";
    elements.cheatWarning.classList.remove("hidden");
  } else if (record.reason === "timeout") {
    elements.cheatWarning.textContent = "Time expired. Your current answers were submitted.";
    elements.cheatWarning.classList.remove("hidden");
  } else {
    elements.cheatWarning.classList.add("hidden");
  }

  const incorrect = state.answers.filter((answer) => !answer.correct);
  elements.incorrectList.innerHTML = "";
  if (incorrect.length === 0) {
    const perfect = document.createElement("div");
    perfect.className = "review-item";
    perfect.innerHTML = "<strong>Perfect work.</strong><p>Every question was answered correctly.</p>";
    elements.incorrectList.appendChild(perfect);
    return;
  }

  incorrect.forEach((answer, index) => {
    const item = document.createElement("article");
    item.className = "review-item";
    item.innerHTML = `
      <strong>${index + 1}. ${answer.question}</strong>
      <p>Your answer: ${answer.selectedAnswer}</p>
      <p>Correct answer: ${answer.correctAnswer}</p>
    `;
    elements.incorrectList.appendChild(item);
  });
}

async function syncAttempt(record) {
  if (!elements.progressSyncBox || !elements.progressSyncText) return;
  elements.progressSyncBox.classList.remove("hidden", "success", "error");

  if (!state.user) {
    elements.progressSyncText.textContent = "Login or sign up to save lesson progress and join the leaderboard.";
    return;
  }

  elements.progressSyncText.textContent = "Saving progress to your account...";
  try {
    const response = await fetch("/api/test/submit", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lessonId: record.lessonId,
        questionAmount: record.questionAmount,
        totalSeconds: record.totalSeconds,
        reason: record.reason,
        answers: state.answers.map((answer) => ({
          questionId: answer.questionId,
          selectedAnswer: answer.selectedAnswer === "No answer" ? null : answer.selectedAnswer
        }))
      })
    });
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "Progress sync failed");
    const progress = payload.progress;
    state.progress[record.lessonId] = {
      solved: progress.solved,
      total: progress.total,
      percent: progress.after,
      completed: progress.completed
    };
    elements.progressSyncBox.classList.add("success");
    const deltaText = progress.delta > 0 ? `+${progress.delta}%` : "+0%";
    elements.progressSyncText.textContent = `${deltaText} lesson progress. ${progress.solved}/${progress.total} unique questions solved (${progress.after}%).`;
  } catch {
    elements.progressSyncBox.classList.add("error");
    elements.progressSyncText.textContent = "Result shown locally, but account progress could not be saved.";
  }
}

function showScreen(screenId) {
  elements.screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });
  elements.homeOnly.forEach((node) => {
    node.style.display = screenId === "homeScreen" ? "" : "none";
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getGrade(percent) {
  if (percent >= 97) return "A+";
  if (percent >= 90) return "A";
  if (percent >= 85) return "B+";
  if (percent >= 80) return "B";
  if (percent >= 75) return "C+";
  if (percent >= 70) return "C";
  if (percent >= 60) return "D";
  return "F";
}

function saveScore(record) {
  let scores = [];
  try {
    scores = JSON.parse(localStorage.getItem(SCORES_KEY)) || [];
  } catch {
    scores = [];
  }
  scores.unshift(record);
  localStorage.setItem(SCORES_KEY, JSON.stringify(scores.slice(0, 20)));
}

function flagCheating(message) {
  if (!state.testActive || state.terminated) return;
  finishTest("cheat", message);
}

function handleFullscreenChange() {
  if (state.testActive && !document.fullscreenElement) {
    flagCheating("Fullscreen was closed or interrupted.");
  }
}

function handleVisibilityChange() {
  if (document.hidden) {
    flagCheating("Tab change or browser minimization detected.");
  }
}

function handleResize() {
  if (!state.testActive) return;
  const now = performance.now();
  if (now - state.lastDevtoolsCheck < 450) return;
  state.lastDevtoolsCheck = now;
  detectDevtools();
}

function detectDevtools() {
  if (!state.testActive) return;
  const widthGap = Math.abs(window.outerWidth - window.innerWidth);
  const heightGap = Math.abs(window.outerHeight - window.innerHeight);
  if (widthGap > 170 || heightGap > 170) {
    flagCheating("Developer tools or an inspection panel appears to be open.");
  }
}

function detectTranslationAttempt(records) {
  if (!state.testActive) return;
  const html = document.documentElement;
  const translatedClass = /translated|goog/i.test(html.className);
  const changedLang = html.getAttribute("lang") && html.getAttribute("lang") !== "en";
  const addedTranslateNodes = records.some((record) => {
    return [...record.addedNodes || []].some((node) => {
      if (!(node instanceof HTMLElement)) return false;
      return /translate|goog-te|google/i.test(`${node.id} ${node.className}`);
    });
  });

  if (translatedClass || changedLang || addedTranslateNodes) {
    flagCheating("Translation or page rewriting was detected.");
  }
}

function blockDuringTest(event) {
  if (!state.testActive) return;
  event.preventDefault();
  event.stopPropagation();
  const action = event.type === "contextmenu"
    ? "Right click detected."
    : "Clipboard or drag action detected.";
  flagCheating(action);
}

function handleKeydown(event) {
  if (elements.modalOverlay && !elements.modalOverlay.classList.contains("hidden") && event.key === "Escape") {
    closeModal();
    return;
  }

  if (!state.testActive) return;

  const key = event.key.toLowerCase();
  const forbidden =
    event.key === "Escape" ||
    event.key === "F11" ||
    event.key === "F12" ||
    (event.ctrlKey && ["c", "x", "v", "a", "s", "p", "u", "r", "f"].includes(key)) ||
    (event.ctrlKey && event.shiftKey && ["i", "j", "c", "k"].includes(key)) ||
    (event.altKey && ["tab", "f4", "escape"].includes(key)) ||
    event.metaKey;

  if (forbidden) {
    event.preventDefault();
    event.stopPropagation();
    flagCheating("Restricted keyboard shortcut detected.");
    return;
  }

  if (["a", "b", "c", "d"].includes(key) && !state.selectedOption) {
    const index = key.charCodeAt(0) - 97;
    const button = elements.optionsGrid.querySelectorAll(".option-button")[index];
    if (button) button.click();
  }

  if (event.key === "Enter" && state.selectedOption && !elements.nextButton.disabled) {
    elements.nextButton.click();
  }
}

function showModal({ kicker, title, body, action }) {
  elements.modalKicker.textContent = kicker;
  elements.modalTitle.textContent = title;
  elements.modalBody.textContent = body;
  elements.modalActionButton.textContent = action;
  elements.modalOverlay.classList.remove("hidden");
  elements.modalActionButton.focus();
}

function closeModal() {
  elements.modalOverlay.classList.add("hidden");
}

function openVocabulary() {
  if (state.testActive) return;
  syncLessonUnlocks(false);
  showScreen("vocabularyScreen");
  renderVocabulary({ syncLocks: true, resetScroll: true });
  elements.copyStatus.textContent = "";
  window.setTimeout(() => {
    elements.vocabSearchInput.focus({ preventScroll: true });
  }, 180);
  playTone("tap");
}

function getVocabularyBaseItems(lessonId = state.activeVocabularyLesson) {
  const lesson = LESSONS[lessonId] || LESSONS.lesson1;
  if (!state.vocabularyCache.has(lessonId)) {
    state.vocabularyCache.set(lessonId, lesson.questions.map((question) => ({
      word: question.word,
      translation: question.correctAnswer,
      searchText: `${question.word} ${question.correctAnswer}`.toLowerCase()
    })));
  }
  return state.vocabularyCache.get(lessonId);
}

function getVocabularyItems() {
  const search = elements.vocabSearchInput.value.trim().toLowerCase();
  const items = getVocabularyBaseItems();

  if (!search) return items;

  return items.filter((item) => item.searchText.includes(search));
}

function scheduleVocabularyRender() {
  elements.copyStatus.textContent = "";
  window.clearTimeout(state.vocabularySearchTimer);
  state.vocabularySearchTimer = window.setTimeout(() => {
    renderVocabulary({ resetScroll: true });
  }, VOCAB_SEARCH_DEBOUNCE_MS);
}

function cancelVocabularyRender() {
  state.vocabularyRenderToken += 1;
  if (state.vocabularyRenderFrame) {
    window.cancelAnimationFrame(state.vocabularyRenderFrame);
    state.vocabularyRenderFrame = null;
  }
}

function createVocabularyRow(item) {
  const row = document.createElement("article");
  row.className = "vocab-item";

  const word = document.createElement("span");
  word.className = "vocab-word";
  word.textContent = item.word;

  const separator = document.createElement("span");
  separator.className = "vocab-separator";
  separator.textContent = "\u2014";

  const translation = document.createElement("span");
  translation.className = "vocab-translation";
  translation.textContent = item.translation;

  row.append(word, separator, translation);
  return row;
}

function renderVocabularyRows(items, resetScroll = false) {
  cancelVocabularyRender();
  const token = state.vocabularyRenderToken;
  const list = elements.vocabularyList;
  list.classList.add("is-rendering");
  list.replaceChildren();

  if (resetScroll) {
    list.scrollTop = 0;
  }

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "vocab-empty";
    empty.textContent = "No vocabulary matches your search.";
    list.replaceChildren(empty);
    list.classList.remove("is-rendering");
    return;
  }

  let index = 0;
  const renderChunk = () => {
    if (token !== state.vocabularyRenderToken) return;

    const fragment = document.createDocumentFragment();
    const end = Math.min(index + VOCAB_RENDER_BATCH_SIZE, items.length);
    for (; index < end; index += 1) {
      fragment.appendChild(createVocabularyRow(items[index]));
    }
    list.appendChild(fragment);

    if (index < items.length) {
      state.vocabularyRenderFrame = window.requestAnimationFrame(renderChunk);
    } else {
      state.vocabularyRenderFrame = null;
      list.classList.remove("is-rendering");
    }
  };

  renderChunk();
}

function renderVocabulary({ syncLocks = false, resetScroll = false } = {}) {
  window.clearTimeout(state.vocabularySearchTimer);
  state.vocabularySearchTimer = null;
  if (!isLessonUnlocked(state.activeVocabularyLesson)) {
    state.activeVocabularyLesson = "lesson1";
  }

  if (syncLocks) {
    renderLessonLockStates();
  }

  const lesson = LESSONS[state.activeVocabularyLesson] || LESSONS.lesson1;
  const items = getVocabularyItems();
  elements.vocabLessonButtons.forEach((button) => {
    const isActive = button.dataset.vocabLesson === state.activeVocabularyLesson;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  elements.vocabCount.textContent = `${items.length} of ${lesson.questions.length} words`;
  renderVocabularyRows(items, resetScroll);
}

async function copyVocabulary() {
  const lesson = LESSONS[state.activeVocabularyLesson] || LESSONS.lesson1;
  const items = getVocabularyItems();
  const text = [
    `${lesson.title} Vocabulary`,
    ...items.map((item) => `${item.word} \u2014 ${item.translation}`)
  ].join("\n");

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      copyTextFallback(text);
    }
    elements.copyStatus.textContent = `Copied ${items.length} words`;
    playTone("correct");
  } catch {
    elements.copyStatus.textContent = "Copy failed";
    playTone("wrong");
  }

  window.clearTimeout(state.copyStatusTimer);
  state.copyStatusTimer = window.setTimeout(() => {
    elements.copyStatus.textContent = "";
  }, 1800);
}

function copyTextFallback(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();
  if (!copied) {
    throw new Error("Copy command failed");
  }
}

function startTyping() {
  clearInterval(state.typingId);
  const text = (TRANSLATIONS[state.settings.language] || TRANSLATIONS.en).typing;
  elements.typingLine.textContent = "";
  let index = 0;
  state.typingId = window.setInterval(() => {
    elements.typingLine.textContent = text.slice(0, index);
    index += 1;
    if (index > text.length) {
      clearInterval(state.typingId);
      window.setTimeout(startTyping, 2600);
    }
  }, 42);
}

function playTone(type) {
  if (state.settings.sound !== "on") return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!state.audioContext) state.audioContext = new AudioContext();

  const tones = {
    tap: [420, 0.04],
    start: [520, 0.08],
    correct: [720, 0.1],
    wrong: [180, 0.12],
    finish: [640, 0.16]
  };
  const [frequency, duration] = tones[type] || tones.tap;
  const oscillator = state.audioContext.createOscillator();
  const gain = state.audioContext.createGain();

  oscillator.frequency.value = frequency;
  oscillator.type = type === "wrong" ? "sawtooth" : "sine";
  gain.gain.setValueAtTime(0.001, state.audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, state.audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, state.audioContext.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(state.audioContext.destination);
  oscillator.start();
  oscillator.stop(state.audioContext.currentTime + duration + 0.02);
}

function launchConfetti() {
  elements.confettiLayer.innerHTML = "";
  const colors = [state.settings.accent, state.settings.support, "#ffffff", "#60a5fa", "#fb7185"];
  for (let index = 0; index < 120; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 550}ms`;
    piece.style.setProperty("--drift", `${Math.random() * 260 - 130}px`);
    elements.confettiLayer.appendChild(piece);
  }
  window.setTimeout(() => {
    elements.confettiLayer.innerHTML = "";
  }, 2800);
}

function updateCursor(event) {
  elements.cursorDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  elements.cursorRing.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
}

function initParticles() {
  const canvas = elements.particleCanvas;
  const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  const total = Math.min(42, Math.max(16, Math.floor(window.innerWidth / 42)));
  state.particles = Array.from({ length: total }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.16 * ratio,
    vy: (Math.random() - 0.5) * 0.16 * ratio,
    size: (Math.random() * 1.4 + 0.4) * ratio
  }));
}

function animateParticles(timestamp = 0) {
  const canvas = elements.particleCanvas;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (timestamp - state.lastParticleFrame < 34) {
    requestAnimationFrame(animateParticles);
    return;
  }
  state.lastParticleFrame = timestamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = hexToRgba(state.settings.accent, 0.26);
  ctx.strokeStyle = hexToRgba(state.settings.support, 0.06);
  ctx.lineWidth = 1;

  state.particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();

    for (let nextIndex = index + 1; nextIndex < state.particles.length; nextIndex += 1) {
      const other = state.particles[nextIndex];
      const dx = particle.x - other.x;
      const dy = particle.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 92) {
        ctx.globalAlpha = (1 - distance / 92) * 0.55;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  });

  requestAnimationFrame(animateParticles);
}

function hexToRgba(hex, alpha) {
  const safe = hex.replace("#", "");
  const value = safe.length === 3
    ? safe.split("").map((char) => char + char).join("")
    : safe;
  const number = Number.parseInt(value, 16);
  const red = (number >> 16) & 255;
  const green = (number >> 8) & 255;
  const blue = number & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

window.addEventListener("resize", initParticles);
document.addEventListener("DOMContentLoaded", init);












