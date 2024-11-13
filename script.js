//questions//
const questions = [{
        topic: "History",
        question: "In what year did the Russian revolution end?",
        answers: [{
                text: "1923",
                correct: true
            },
            {
                text: "1917",
                correct: false
            },
            {
                text: "1918",
                correct: false
            },
            {
                text: "1921",
                correct: false
            },
            {
                text: "1914",
                correct: false
            },
        ]
    }, {
        topics: "Movies",
        question: "Which movie is the higest grossing of all time?",
        answers: [{
                text: "Star Wars: The Force Awakens",
                correct: false
            },
            {
                text: "Titanic",
                correct: false
            },
            {
                text: "The Lion King",
                correct: false
            },
            {
                text: "Avatar",
                correct: true
            },
            {
                text: "Avengers: Endgame",
                correct: false
            },
        ]
    }


];
const topicElement = document.getElementById("topic");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("sub-b");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Submit";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    showQuestion();
}

//question and answers set up//
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans-b");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function showTopic(topic){
    resetState();
    topicElement.innerText = topic.topic
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//colour select//
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
// submit button setup//
function showScore() {
    resetState();
    questionElement.innerHTML = `Well done ${username} You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.lenght) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.lenght) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
