var startContainer = document.querySelector (".start_container");
var quizContainer = document.querySelector (".quiz_container");
var endContainer = document.querySelector (".end_container");
var startButton = document.querySelector (".start_button");
var timer = document.querySelector (".timer");
var globalIndex = 0;
var questionText = document.querySelector (".question_text");
var answerList = document.querySelector (".answer_list");
var listAnswer = document.querySelector (".list_answer");

quizContainer.style.display = "none";
endContainer.style.display = "none";

startButton.addEventListener("click", function (e) {
quizContainer.style.display = "block";
startContainer.style.display = "none";
setTimer();
display(0);
})

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
        question:"how many states?",
        answer: ["50", "52", "60", "40"], 
        correct_answer: "50",
    },
    {
        question:"how many lakes?",
        answer: ["50", "52", "60", "40"], 
        correct_answer: "50",
    },
    {
        question:"how many?",
        answer: ["50", "52", "60", "40"], 
        correct_answer: "50",
    },
    {
        question:"how lakes?",
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
        // listAnswer.style.display = "none";
    })
}

quizContainer.addEventListener("click", function (e) {
    if (questions.answer !== questions.correct_answer) {        
        timePenalty();
        document
        //questionText.textContent = questions[].question;
        }else {
          display();
            
        }
} )


function timePenalty() {
    if (seconds > 4) {
        seconds - 4;   
    }else {
        testOver();
    }
}

// var seconds = 60;
// function setTimer() {
//     var timerInterval = setInterval(function() {
//         seconds--;
//         timer.textContent = seconds + " seconds left.";
    
//         if(seconds === 0) {
//           clearInterval(timerInterval);
//         //   sendMessage();
//         }
//       }, 1000);




function testOver() {{
    
}

}


// startButton.addEventListener("click", function (e) {
//     quizContainer.style.display = "block";
//     startContainer.style.display = "none"
//     setTimer();
//     display(0);
//     })

    
// incrementEl.addEventListener("click", function(e) {
//     console.log(e);
//     count = count + 1;
//     // count++;
//     setCounterText();
//     // countEl.textContent = count;
//   });

function sendMessage() {

}

