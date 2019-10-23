var startEl = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var startPageEl = document.querySelector("#startPage");
var questionEl = document.querySelector("#question");
var scoreEl = document.querySelector("#score");
var scoreboxEl = document.querySelector("#scorebox");
var answersHereEl = document.querySelector("#choicesHere");
var questionHereEl = document.querySelector("#questionHere");
var highScoreLinkEl = document.querySelector("#highScoreLink");
var score, secondsLeft, timerInterval, question, qIndex;


startEl.addEventListener("click", startFunction);

function startFunction(event) {
    score = 0, qIndex = 0, secondsLeft = 75;
    scoreEl.textContent = score;
    timeEl.textContent = secondsLeft;
    scoreboxEl.classList.remove("hide");

    startPageEl.classList.add("hide");
    questionEl.classList.remove("hide");
    highScoreLinkEl.classList.add("hide");

    startTimer();
    displayQuestion();
}
function startTimer() {
    clearInterval(timerInterval)
    timerInterval = setInterval(function () {
        secondsLeft--;

        if (secondsLeft <= 0) {
            secondsLeft = 0;
            endGame();
        }
        timeEl.textContent = secondsLeft;
    }, 1000)
}
function displayQuestion() {
    question = questions[qIndex];
    questionHereEl.innerText = question.title;
    answersHereEl.innerHTML = "";
    for (var i in question.choices) {
        var button = document.createElement("button");
        button.setAttribute("value", question.choices[i]);
        button.classList.add("btn", "btn-default");
        button.innerText = question.choices[i];
        button.onclick = handleClick;
        answersHereEl.appendChild(button)
    }
}

function handleClick() {
    var quess = this.value;
    if (quess === question.answer) {
        score++;
        scoreEl.textContent = score;
    } else {
        secondsLeft -= 15;
    }
    qIndex++;
    if (qIndex >= questions.length) {
        endGame();
    } else {
        displayQuestion();
    }
}
function endGame() {
    clearInterval(timerInterval);

    startPageEl.classList.toggle("hide");
    questionEl.classList.toggle("hide");
    highScorePage();
}
function highScorePage(){
    window.location = "../CodeQuiz/highscores.html";
    scoreboxEl.classList.remove("hide");
}
console.log(score);
