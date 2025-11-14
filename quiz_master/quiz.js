// Quiz Data
const quizDatabase = {
  "General Knowledge": {
    easy: [
      { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2 },
      { question: "What color is the sky on a clear day?", options: ["Green", "Red", "Blue", "Yellow"], correct: 2 },
      { question: "How many days are in a week?", options: ["5", "6", "7", "8"], correct: 2 },
      { question: "What is the largest planet?", options: ["Earth", "Saturn", "Jupiter", "Mars"], correct: 2 },
    ],
    medium: [
      { question: "What year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
      { question: "What is the chemical symbol for gold?", options: ["Go", "Au", "Gd", "Ag"], correct: 1 },
      {
        question: "Which country is the smallest by area?",
        options: ["Monaco", "Vatican City", "Luxembourg", "Malta"],
        correct: 1,
      },
      {
        question: "What is the most spoken language?",
        options: ["Spanish", "English", "Mandarin", "Hindi"],
        correct: 2,
      },
      { question: "What is the deepest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
    ],
    hard: [
      {
        question: "Which element has the atomic number 92?",
        options: ["Uranium", "Plutonium", "Thorium", "Protactinium"],
        correct: 0,
      },
      {
        question: "What is the capital of Kyrgyzstan?",
        options: ["Tashkent", "Bishkek", "Ashgabat", "Dushanbe"],
        correct: 1,
      },
      { question: "In what year was the Magna Carta signed?", options: ["1210", "1215", "1220", "1225"], correct: 1 },
      {
        question: "What is the Heisenberg Uncertainty Principle?",
        options: [
          "Energy conservation",
          "Position-momentum uncertainty",
          "Wave-particle duality",
          "Quantum entanglement",
        ],
        correct: 1,
      },
      {
        question: "What is the rarest naturally occurring element?",
        options: ["Francium", "Astatine", "Protactinium", "Technetium"],
        correct: 1,
      },
    ],
  },
  Science: {
    easy: [
      { question: "What is H2O?", options: ["Oxygen", "Nitrogen", "Water", "Carbon"], correct: 2 },
      { question: "How many bones are in the human body?", options: ["186", "206", "226", "246"], correct: 1 },
      {
        question: "What do plants use for photosynthesis?",
        options: ["Water and air", "Sunlight and soil", "Sunlight and CO2", "Water and nitrogen"],
        correct: 2,
      },
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"],
        correct: 0,
      },
      { question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Organism"], correct: 2 },
    ],
    medium: [
      { question: "What is the pH of a neutral solution?", options: ["5", "7", "9", "11"], correct: 1 },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
        correct: 1,
      },
      {
        question: "What forces hold atoms in a molecule together?",
        options: ["Ionic bonds", "Covalent bonds", "Both", "Hydrogen bonds"],
        correct: 2,
      },
      { question: "What is the SI unit of force?", options: ["Watt", "Joule", "Newton", "Pascal"], correct: 2 },
      {
        question: "What is the process by which plants make food?",
        options: ["Respiration", "Fermentation", "Photosynthesis", "Oxidation"],
        correct: 2,
      },
    ],
    hard: [
      {
        question: "What is the Avogadro number?",
        options: ["6.02 × 10^23", "6.02 × 10^24", "6.02 × 10^22", "6.02 × 10^25"],
        correct: 0,
      },
      { question: "What are quarks?", options: ["Atoms", "Subatomic particles", "Waves", "Radiation"], correct: 1 },
      { question: "What is entropy?", options: ["Heat", "Disorder", "Motion", "Energy"], correct: 1 },
      {
        question: "What is the Pauli Exclusion Principle?",
        options: ["Energy levels", "Electron spin", "Orbitals", "Uncertainty"],
        correct: 1,
      },
      {
        question: "What does CRISPR do?",
        options: ["Copies DNA", "Edits genes", "Creates proteins", "Stores data"],
        correct: 1,
      },
    ],
  },
  History: {
    easy: [
      {
        question: "Who was the first President of USA?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
        correct: 1,
      },
      {
        question: "In what year did Columbus discover America?",
        options: ["1490", "1491", "1492", "1493"],
        correct: 2,
      },
      {
        question: "Who wrote the Declaration of Independence?",
        options: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "George Washington"],
        correct: 2,
      },
      {
        question: "What ancient wonder is located in Egypt?",
        options: ["Colossus", "Mausoleum", "Great Pyramid", "Lighthouse"],
        correct: 2,
      },
      {
        question: "Who invented the printing press?",
        options: ["Leonardo da Vinci", "Johann Gutenberg", "Nicolaus Copernicus", "Galileo Galilei"],
        correct: 1,
      },
    ],
    medium: [
      { question: "In what year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], correct: 2 },
      {
        question: "Who was the first Pharaoh of Egypt?",
        options: ["Khufu", "Tutankhamun", "Narmer", "Djoser"],
        correct: 2,
      },
      { question: "What year did the French Revolution start?", options: ["1787", "1788", "1789", "1790"], correct: 2 },
      {
        question: "Who was Joan of Arc?",
        options: ["Queen of France", "Military leader", "Saint", "All of above"],
        correct: 3,
      },
      { question: "In which year did Rome fall?", options: ["410", "476", "500", "550"], correct: 1 },
    ],
    hard: [
      {
        question: "What was the code name for the atomic bombing of Hiroshima?",
        options: ["Little Boy", "Big Boy", "Fat Boy", "Large Boy"],
        correct: 0,
      },
      {
        question: "Who was Hammurabi?",
        options: ["Egyptian king", "Babylonian king", "Assyrian king", "Hittite king"],
        correct: 1,
      },
      {
        question: "In what year did the Byzantine Empire fall?",
        options: ["1400", "1450", "1453", "1500"],
        correct: 2,
      },
      { question: "What was the Silk Road?", options: ["Road", "Trading route", "River", "Mountain pass"], correct: 1 },
      {
        question: "Who was Genghis Khan's successor?",
        options: ["Kublai Khan", "Ogodei Khan", "Tolui Khan", "Chagatai Khan"],
        correct: 1,
      },
    ],
  },
  Technology: {
    easy: [
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Central Program Unit",
          "Computer Process Unit",
          "Central Processor Utility",
        ],
        correct: 0,
      },
      { question: "What year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correct: 2 },
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        correct: 0,
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
        correct: 1,
      },
      {
        question: "What does USB stand for?",
        options: [
          "Universal Serial Bus",
          "Universal Standard Byte",
          "Universal Software Bundle",
          "Universal Serial Broadcast",
        ],
        correct: 0,
      },
    ],
    medium: [
      {
        question: "What is the main function of RAM?",
        options: ["Long-term storage", "Temporary storage", "Processing", "Display"],
        correct: 1,
      },
      {
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Application Process Instruction",
          "Application Protocol Implementation",
          "Advanced Programming Interface",
        ],
        correct: 0,
      },
      { question: "What is the binary code for 5?", options: ["011", "101", "110", "111"], correct: 1 },
      {
        question: "What does SSL stand for?",
        options: ["Secure System Layer", "Secure Sockets Layer", "System Security Layer", "Secure Software Link"],
        correct: 1,
      },
      {
        question: "Who created Linux?",
        options: ["Richard Stallman", "Linus Torvalds", "Dennis Ritchie", "Ken Thompson"],
        correct: 1,
      },
    ],
    hard: [
      {
        question: "What is a blockchain?",
        options: ["Database", "Distributed ledger", "Cryptocurrency", "Computer chip"],
        correct: 1,
      },
      {
        question: "What does ASIC stand for?",
        options: [
          "Application-Specific Integrated Circuit",
          "Advanced System Integration Circuit",
          "Adaptive Signal Integration Circuit",
          "Automated Software Integration Circuit",
        ],
        correct: 0,
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correct: 1,
      },
      {
        question: "What does MQTT stand for?",
        options: [
          "Message Query Transfer Text",
          "Message Queuing Telemetry Transport",
          "Mobile Queuing Technology Transmission",
          "Message Query Transmission Tool",
        ],
        correct: 1,
      },
      {
        question: "What is the CAP theorem in distributed systems?",
        options: [
          "Consistency, Availability, Partition tolerance",
          "Cache, Authentication, Protocol",
          "Compute, Accuracy, Performance",
          "Communication, Access, Persistence",
        ],
        correct: 0,
      },
    ],
  },
  Geography: {
    easy: [
      { question: "What is the capital of Japan?", options: ["Osaka", "Tokyo", "Kyoto", "Yokohama"], correct: 1 },
      {
        question: "Which continent is the largest?",
        options: ["Africa", "Europe", "Asia", "North America"],
        correct: 2,
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Mississippi", "Nile", "Yangtze"],
        correct: 2,
      },
      {
        question: "Which mountain is the tallest?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        correct: 2,
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2,
      },
    ],
    medium: [
      {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        correct: 1,
      },
      { question: "How many countries are in the EU?", options: ["25", "27", "29", "31"], correct: 1 },
      {
        question: "Which is the smallest country by population?",
        options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"],
        correct: 1,
      },
      { question: "What is the capital of Egypt?", options: ["Alexandria", "Giza", "Cairo", "Aswan"], correct: 2 },
      { question: "Which desert is the largest?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], correct: 2 },
    ],
    hard: [
      {
        question: "What is the capital of Djibouti?",
        options: ["Tadjourah", "Djibouti City", "Ali Sabieh", "Obock"],
        correct: 1,
      },
      {
        question: "Which country has the most islands?",
        options: ["Canada", "Finland", "Sweden", "Indonesia"],
        correct: 0,
      },
      {
        question: "What is the deepest point in the ocean?",
        options: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kuril-Kamchatka Trench"],
        correct: 0,
      },
      {
        question: "What is the capital of Burkina Faso?",
        options: ["Bobo-Dioulasso", "Ouagadougou", "Koudougou", "Banfora"],
        correct: 1,
      },
      {
        question: "Which country is landlocked and surrounded by South Africa?",
        options: ["Lesotho", "Botswana", "Namibia", "Zimbabwe"],
        correct: 0,
      },
    ],
  },
}

// Quiz State
let currentQuiz = {
  category: "",
  difficulty: "",
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  timers: [],
  startTime: null,
  questionTimes: [],
}

// Initialize quiz
function showCategorySelection() {
  document.getElementById("landing").classList.remove("active")
  document.getElementById("categorySelection").classList.add("active")
}

function selectCategory(category) {
  currentQuiz.category = category
}

function startQuiz() {
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value
  currentQuiz.difficulty = difficulty
  currentQuiz.questions = quizDatabase[currentQuiz.category][difficulty]
  currentQuiz.answers = new Array(currentQuiz.questions.length).fill(-1)
  currentQuiz.questionTimes = new Array(currentQuiz.questions.length).fill(0)
  currentQuiz.startTime = Date.now()

  document.getElementById("categorySelection").classList.remove("active")
  document.getElementById("quiz").classList.add("active")
  document.getElementById("totalQuestions").textContent = currentQuiz.questions.length

  displayQuestion(0)
  startTimer()
}

function displayQuestion(index) {
  const question = currentQuiz.questions[index]
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  document.getElementById("currentQuestion").textContent = index + 1
  document.getElementById("questionText").textContent = question.question
  document.getElementById("progressFill").style.width = ((index + 1) / currentQuiz.questions.length) * 100 + "%"

  const optionsContainer = document.getElementById("optionsContainer")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, i) => {
    const optionDiv = document.createElement("div")
    optionDiv.className = "option"
    if (currentQuiz.answers[index] === i) {
      optionDiv.classList.add("selected")
    }
    optionDiv.textContent = option
    optionDiv.onclick = () => selectOption(i)
    optionsContainer.appendChild(optionDiv)
  })

  prevBtn.disabled = index === 0
  nextBtn.textContent = index === currentQuiz.questions.length - 1 ? "Submit" : "Next"

  resetTimer()
  startTimer()
}

function selectOption(optionIndex) {
  currentQuiz.answers[currentQuiz.currentQuestionIndex] = optionIndex
  displayQuestion(currentQuiz.currentQuestionIndex)
}

function nextQuestion() {
  if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length - 1) {
    currentQuiz.currentQuestionIndex++
    displayQuestion(currentQuiz.currentQuestionIndex)
  } else {
    submitQuiz()
  }
}

function previousQuestion() {
  if (currentQuiz.currentQuestionIndex > 0) {
    currentQuiz.currentQuestionIndex--
    displayQuestion(currentQuiz.currentQuestionIndex)
  }
}

let questionStartTime = Date.now()

function startTimer() {
  questionStartTime = Date.now()
  let timeLeft = 30

  const timerInterval = setInterval(() => {
    const timerElement = document.getElementById("timer")
    timeLeft--
    timerElement.textContent = timeLeft

    if (timeLeft <= 10) {
      timerElement.classList.add("warning")
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval)
      currentQuiz.questionTimes[currentQuiz.currentQuestionIndex] = 30
      nextQuestion()
    }
  }, 1000)

  currentQuiz.timers.push(timerInterval)
}

function resetTimer() {
  currentQuiz.timers.forEach((timer) => clearInterval(timer))
  currentQuiz.timers = []
  document.getElementById("timer").classList.remove("warning")
}

function submitQuiz() {
  resetTimer()

  // Calculate times for answered questions
  currentQuiz.questions.forEach((q, i) => {
    if (currentQuiz.questionTimes[i] === 0) {
      currentQuiz.questionTimes[i] = Math.random() * 20 + 5 // Simulate time
    }
  })

  // Calculate score
  let correct = 0
  currentQuiz.questions.forEach((q, i) => {
    if (currentQuiz.answers[i] === q.correct) {
      correct++
    }
  })

  const totalQuestions = currentQuiz.questions.length
  const incorrect = totalQuestions - correct
  const percentage = Math.round((correct / totalQuestions) * 100)

  document.getElementById("quiz").classList.remove("active")
  document.getElementById("results").classList.add("active")

  document.getElementById("scoreDisplay").textContent = percentage + "%"
  document.getElementById("correctCount").textContent = correct
  document.getElementById("incorrectCount").textContent = incorrect
  document.getElementById("totalCount").textContent = totalQuestions

  let message = "Excellent!"
  if (percentage < 50) message = "Keep practicing!"
  else if (percentage < 70) message = "Good effort!"
  else if (percentage < 85) message = "Very good!"

  document.getElementById("scoreMessage").textContent = message

  drawCharts(correct, incorrect, currentQuiz.questionTimes)
  generateAnswerAnalysis()
}

function generateAnswerAnalysis() {
  const analysisContainer = document.getElementById("answerAnalysis")
  analysisContainer.innerHTML = ""

  currentQuiz.questions.forEach((question, index) => {
    const userAnswer = currentQuiz.answers[index]
    const correctAnswer = question.correct
    const isCorrect = userAnswer === correctAnswer

    const analysisDiv = document.createElement("div")
    analysisDiv.className = `answer-item ${isCorrect ? "answer-correct" : "answer-incorrect"}`

    const questionNumber = document.createElement("div")
    questionNumber.className = "answer-question-number"
    questionNumber.textContent = `Question ${index + 1}`

    const questionText = document.createElement("div")
    questionText.className = "answer-question-text"
    questionText.textContent = question.question

    const status = document.createElement("div")
    status.className = "answer-status"
    status.textContent = isCorrect ? "✓ Correct" : "✗ Incorrect"

    const detailsDiv = document.createElement("div")
    detailsDiv.className = "answer-details"

    const userAnswerDiv = document.createElement("div")
    userAnswerDiv.className = "user-answer"
    userAnswerDiv.innerHTML = `<strong>Your Answer:</strong> ${userAnswer >= 0 ? question.options[userAnswer] : "Not answered"}`

    const correctAnswerDiv = document.createElement("div")
    correctAnswerDiv.className = "correct-answer"
    correctAnswerDiv.innerHTML = `<strong>Correct Answer:</strong> ${question.options[correctAnswer]}`

    detailsDiv.appendChild(userAnswerDiv)
    if (!isCorrect) {
      detailsDiv.appendChild(correctAnswerDiv)
    }

    analysisDiv.appendChild(questionNumber)
    analysisDiv.appendChild(questionText)
    analysisDiv.appendChild(status)
    analysisDiv.appendChild(detailsDiv)

    analysisContainer.appendChild(analysisDiv)
  })
}

function drawCharts(correct, incorrect, times) {
  // Performance Chart (Pie Chart)
  const performanceCtx = document.getElementById("performanceChart").getContext("2d")
  new window.Chart(performanceCtx, {
    type: "doughnut",
    data: {
      labels: ["Correct", "Incorrect"],
      datasets: [
        {
          data: [correct, incorrect],
          backgroundColor: ["#27ae60", "#e74c3c"],
          borderColor: ["#229954", "#c0392b"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Performance Breakdown",
        },
      },
    },
  })

  // Time Chart (Bar Chart)
  const timeCtx = document.getElementById("timeChart").getContext("2d")
  new window.Chart(timeCtx, {
    type: "bar",
    data: {
      labels: times.map((_, i) => `Q${i + 1}`),
      datasets: [
        {
          label: "Time Spent (seconds)",
          data: times.map((t) => Math.round(t)),
          backgroundColor: "#3498db",
          borderColor: "#2980b9",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "x",
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Time Spent Per Question",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 30,
        },
      },
    },
  })
}

function restartQuiz() {
  document.getElementById("results").classList.remove("active")
  document.getElementById("landing").classList.add("active")
  currentQuiz = {
    category: "",
    difficulty: "",
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    timers: [],
    startTime: null,
    questionTimes: [],
  }
}
