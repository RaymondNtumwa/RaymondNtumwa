// quiz.js

const quizData = [
    {
        question: "Which river is the longest in Africa?",
        a: "Nile",
        b: "Congo",
        c: "Niger",
        d: "Zambezi",
        correct: "a",
    },
    {
        question: "What is the traditional attire of the Maasai people called?",
        a: "Dashiki",
        b: "Kanga",
        c: "Shúkà",
        d: "Boubou",
        correct: "c",
    },
    {
        question: "Which African country is famous for its pyramids?",
        a: "Sudan",
        b: "Egypt",
        c: "Ethiopia",
        d: "Libya",
        correct: "b",
    },
    // Add more questions as needed
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextButton = document.getElementById('next-button');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const quizContainer = document.getElementById('quiz-container');

function loadQuiz() {
    deselectChoices();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    choicesEl.innerHTML = `
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.d}
        </label>
    `;
}

function getSelected() {
    const answers = document.getElementsByName('answer');
    let selected = undefined;
    answers.forEach((answer) => {
        if (answer.checked) {
            selected = answer.value;
        }
    });
    return selected;
}

function deselectChoices() {
    const answers = document.getElementsByName('answer');
    answers.forEach((answer) => {
        answer.checked = false;
    });
}

nextButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.classList.add('hidden');
            scoreEl.innerText = `${score} / ${quizData.length}`;
            resultEl.classList.remove('hidden');
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
});

function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    resultEl.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuiz();
}

// Initialize the quiz on page load
loadQuiz();
