var startContainer = document.querySelector (".start_container");
var quizContainer = document.querySelector (".quiz_container");
var endContainer = document.querySelector (".end_container");
var startButton = document.querySelector (".start_button");
var timer = document.querySelector (".timer");
var globalIndex = 0;
var questionText = document.querySelector (".question_text");
var answerList = document.querySelector (".answer_list");

quizContainer.style.display = "none";
endContainer.style.display = "none";

startButton.addEventListener("click", function (e) {

quizContainer.style.display = "block";
startContainer.style.display = "none"
setTimer();
display(0);
} )

var seconds = 60;
function setTimer() {
    var timerInterval = setInterval(function() {
        seconds--;
        timer.textContent = seconds + " seconds left.";
    
        if(seconds === 0) {
          clearInterval(timerInterval);
        //   sendMessage();
        }
      }, 1000);
}

var questions = [
    {
        question:"how many state?",
        answer: ["50", "52", "60", "40"], 
        correct_answer: "50",
    },
    {
        question:"how many lakes?",
        answer: ["50", "52", "60", "40"], 
        correct_answer: "50",
    }
]

function display(GI) {
    questionText.textContent = questions[GI].question;
    questions [GI].answer.forEach(function(a){
        var button = document.createElement("button");
        button.textContent = a;
        answerList.appendChild (button)
    })
}