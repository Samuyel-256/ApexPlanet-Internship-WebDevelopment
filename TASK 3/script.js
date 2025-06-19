// Quiz Logic
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Hyderabad", "Kolkata"],
    correct: 0
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Creative Style Syntax",
      "Custom Style Structure"
    ],
    correct: 0
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("quiz-question").textContent = q.question;
  for (let i = 0; i < 4; i++) {
    document.getElementById("btn" + i).textContent = q.options[i];
    document.getElementById("btn" + i).disabled = false;
    document.getElementById("btn" + i).style.backgroundColor = "#007BFF";
  }
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("nextBtn").style.display = "none";
}

function selectOption(index) {
  const q = questions[currentQuestion];
  const isCorrect = index === q.correct;
  const feedback = document.getElementById("quiz-feedback");
  if (isCorrect) {
    score++;
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    document.getElementById("btn" + index).style.backgroundColor = "green";
  } else {
    feedback.textContent = "❌ Wrong!";
    feedback.style.color = "red";
    document.getElementById("btn" + index).style.backgroundColor = "red";
    document.getElementById("btn" + q.correct).style.backgroundColor = "green";
  }

  for (let i = 0; i < 4; i++) {
    document.getElementById("btn" + i).disabled = true;
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quiz-box").style.display = "none";
  document.getElementById("resultBox").style.display = "block";
  document.getElementById("scoreDisplay").textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("resultBox").style.display = "none";
  document.querySelector(".quiz-box").style.display = "block";
  loadQuestion();
}

// Joke Logic
function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = data.value;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Oops! Couldn't fetch joke 😢";
      console.error("Error fetching joke:", err);
    });
}

// Start the quiz on page load
window.onload = loadQuestion;
