
var startEl= document.querySelector(".start");
var timeEl = document.querySelector(".timer");
var startPageEl = document.querySelector(".startPage");
var questionEl = document.querySelector(".question");
var scoreEl = document.querySelector(".score");
var btnEl = document.querySelector(".Btn");
var questionHereEl = document.querySelector(".questionHere")


questionEl.classList.add("hide");

function startFunction(event){
    var score =" ";
    scoreEl.textContent = "Current score: " + score;
    var secondsLeft = 75;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0){
        clearInterval(timerInterval);
      }
    }, 1000)
    startPageEl.classList.add("hide");
    questionEl.classList.remove("hide");
}

function BtnFunction(event){
    var question= "";
    questionHereEl.textContent = question
}

startEl.addEventListener("click", startFunction);
btnEl.addEventListener("click", BtnFunction);


