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
    }, {
        question: "What is the closest star system to ours?",
        answers: [{
                text: "Epsilon Indi",
                correct: false
            },
            {
                text: "Barnard's Star",
                correct: false
            },
            {
                text: "Alpha Canis Majoris",
                correct: false
            },
            {
                text: "Luhman 16",
                correct: false
            },
            {
                text: "Alpha Centauri",
                correct: true
            },
        ]

    }, {
        question: "What country is known as the land of the rising sun?",
        answers: [{
                text: "South Africa",
                correct: false
            },
            {
                text: "Australia",
                correct: false
            },
            {
                text: "Cuba",
                correct: false
            },
            {
                text: "Japan",
                correct: true
            },
            {
                text: "England",
                correct: false
            },
        ]

    }, {
        question: "Which athlete holds the most olympic medals?",
        answers: [{
                text: "Usain Bolt",
                correct: false
            },
            {
                text: "Larisa Latynina",
                correct: false
            },
            {
                text: "Michael Phelps",
                correct: true
            },
            {
                text: "Mo Farah",
                correct: false
            },
            {
                text: "Katō Sawao",
                correct: false
            },
        ]
    }, {
        question: "Which car manufacturer built the first supercar?",
        answers: [{
                text: "Porsche 911",
                correct: false
            },
            {
                text: "Lamborghini",
                correct: true
            },
            {
                text: "Aston Martin",
                correct: false
            },
            {
                text: "Ferrari",
                correct: false
            },
            {
                text: "Ford",
                correct: false
            },
        ]
    }, {
        question: "What year did the nintendo ds come out?",
        answers: [{
                text: "2000",
                correct: false
            },
            {
                text: "2003",
                correct: false
            },
            {
                text: "2001",
                correct: false
            },
            {
                text: "2006",
                correct: false
            },
            {
                text: "2004",
                correct: true
            },
        ]
    }, {
        question: "Which kingdom united and formed the German Empire?",
        answers: [{
                text: "East Frankish kingdom,",
                correct: false
            },
            {
                text: "Kingdom of Bavaria",
                correct: false
            },
            {
                text: "Kingdom of Prussia",
                correct: true
            },
            {
                text: "Kingdom of Württemberg",
                correct: false
            },
            {
                text: "Kingdom of Saxony",
                correct: false
            },
        ]
    }, {
        question: "which planet has the most moons?",
        answers: [{
                text: "Uranus",
                correct: false
            },
            {
                text: "Jupiter",
                correct: false
            },
            {
                text: "Saturn",
                correct: true
            },
            {
                text: "Neptune",
                correct: false
            },
            {
                text: "Mars",
                correct: false
            },
        ]
    }, {
        question: "What is the capital city of Finland",
        answers: [{
                text: "Helsinki",
                correct: true
            },
            {
                text: "Oslo",
                correct: false
            },
            {
                text: "Tallinn",
                correct: false
            },
            {
                text: "Tampere",
                correct: false
            },
            {
                text: "Oulu",
                correct: false
            },
        ]
    },


];
const startingMinutes = 5;
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
    showQuestion();
}

//question and answers set up//
function showQuestion() {
    console.log(currentQuestionIndex);

    resetState();

    console.log(currentQuestionIndex);

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    console.log(currentQuestionIndex);

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

function showTopic(topic) {
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
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
//timer//
const timeCount = document.querySelector("p");
let timeSecond = 30;

displayTime(timeSecond);

const timeDown = setInterval (() => {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        endTime();
        clearInterval(timeDown);
    }

},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeCount.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`

}

function endTime(){
    timeCount.innerHTML = "TIME OUT"
}

    

startQuiz();