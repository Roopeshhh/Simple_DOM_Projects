const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: 2,
  },
  {
    question: "Which HTML element is used to define the largest heading?",
    options: ["<head>", "<h1>", "<heading>", "<h6>"],
    correct: 1,
  },
  {
    question: "Which of the following is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
  },
  {
    question:
      "Which CSS property is used to set the spacing between lines of text?",
    options: ["line-spacing", "line-height", "text-spacing", "text-height"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelector(".option");
// console.log(optionsEls);
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  quizData.forEach((optionEl, index) => {
    /* console.log(currentQuestion.options[index]);
    console.log(index); */
    document.getElementById("option" + index).textContent =
      currentQuestion.options[index];

    optionEl.checked = false;
  });
}

function checkAnswer() {
  let selectedOption = document.querySelector('input[name="option"]:checked');
  console.log(selectedOption);
  if (!selectedOption) {
    alert("please select an option");
    return;
  }
  let answer = selectedOption.value;
  console.log(answer);
  if (answer == quizData[currentQuestionIndex].correct) {
    score++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultEl.classList.remove("hidden");
  scoreEl.textContent = score;
  totalEl.textContent = quizData.length;
  document.getElementById("quiz").classList.add("hidden");
}

submitBtn.addEventListener("click", checkAnswer);

loadQuestion();
