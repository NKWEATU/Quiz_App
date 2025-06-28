const quizData = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Home Tool-markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
    },
    {
        question: "Which is not a JavaScript Framework?",
        choices: ["Python Script", "JQuery", "Django"],
        correct: 2
    },
    {
        question: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEL = document.getElementById("question");
const choicesEL = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEL = document.getElementById("result");
const scoreEL = document.getElementById("score");

function showQuestion() {
    const q = quizData[currentQuestion];
    questionEL.textContent = q.question;
    choicesEL.innerHTML = "";

    q.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;
        input.id = "choice" + index;

        const label = document.createElement("label");
        label.setAttribute("for", input.id);
        label.textContent = " " + choice;

        li.appendChild(input);
        li.appendChild(label);
        choicesEL.appendChild(li);
    });
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEL.classList.remove("hidden");
    scoreEL.textContent = `${score} / ${quizData.length}`;
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Please select an answer");
        return;
    }

    const answer = parseInt(selected.value);
    if (answer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Start the quiz
showQuestion();
