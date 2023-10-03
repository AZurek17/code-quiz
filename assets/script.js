var startContainer = document.querySelector (".start_container");
var quizContainer = document.querySelector (".quiz_container");
var quizContainer1 = document.querySelector (".quiz_container1");
var quizContainer2 = document.querySelector (".quiz_container2");
var quizContainer3 = document.querySelector (".quiz_container3");
var endContainer = document.querySelector (".end_container");
var scoreContainer = document.querySelector (".score_container");
/////////startContainer--------------------
var startButton = document.querySelector (".start_button");
var timer = document.querySelector (".timer");
var GI = 0;
////////quizContainer()------------------------
var questionText = document.querySelector (".question_text");
var questionText1 = document.querySelector (".question_text1");
var questionText2 = document.querySelector (".question_text2");
var questionText3 = document.querySelector (".question_text3");
var answerList = document.querySelector (".answer_list");
var answerList1 = document.querySelector (".answer_list1");
var answerList2 = document.querySelector (".answer_list2");
var answerList3 = document.querySelector (".answer_list3");
var listAnswer = document.querySelector (".list_answer");
var listAnswer1 = document.querySelector (".list_answer1");
var listAnswer2 = document.querySelector (".list_answer2");
var listAnswer3 = document.querySelector (".list_answer3");
///////end container----------------------
var listText = document.getElementById ("#list-text");
var saveButton = document.querySelector("#save-button");
var listForm = document.getElementById("#list-form");
var savedCount = document.getElementById("#saved-count");
////////ScoresContainer-------------------
var card = document.querySelector("#card");
var savedName = document.getElementById("#saved-name");
var savedScore = document.getElementById("#saved-score");
var savedList = document.getElementById("#saved-list");
////---------------------------------
//// start of code quiz
quizContainer.style.display = "none";
quizContainer1.style.display = "none";
quizContainer2.style.display = "none";
quizContainer3.style.display = "none";
endContainer.style.display = "none";
scoreContainer.style.display = "none";

//---------------timer
var seconds = 45;

function setTimer() {
    var timerInterval = setInterval(function() {
        seconds--;
        timer.textContent = seconds + " seconds left.";
    
        if (seconds <= 0) {
          clearInterval(timerInterval);
          quizContainer.style.display = "none";
          quizContainer1.style.display = "none";
          quizContainer2.style.display = "none";
          quizContainer3.style.display = "none";
          endContainer.style.display = "block";
          //playerScores()
        }
    }, 1000);      
}

//--------------display questions---------------------------------

function display(GI) {
    questionText.textContent = questions[GI].question;
    questions [GI].answer.forEach(function(a){
        var button = document.createElement("button");
        button.textContent = a;
        answerList.appendChild (button)
    }) 
}
function display1(GI) {
    questionText1.textContent = questions1[GI].question1;
    questions1 [GI].answer1.forEach(function(a){
        var button = document.createElement("button");
        button.textContent = a;
        answerList1.appendChild (button)
    }) 
}
function display2(GI) {
    questionText2.textContent = questions2[GI].question2;
    questions2 [GI].answer2.forEach(function(a){
        var button = document.createElement("button");
        button.textContent = a;
        answerList2.appendChild (button)
    }) 
}
function display3(GI) {
    questionText3.textContent = questions3[GI].question3;
    questions3 [GI].answer3.forEach(function(a){
        var button = document.createElement("button");
        button.textContent = a;
        answerList3.appendChild (button)
    }) 
}

///----------------
 
//button-------event
startButton.addEventListener("click", function (event) {
    quizContainer.style.display = "block";
    quizContainer1.style.display = "none";
    quizContainer2.style.display = "none";
    quizContainer3.style.display = "none";
    startContainer.style.display = "none";

    setTimer();
    display(0);
    })
    

answerList.addEventListener("click", function (event) {
    if  (questions.answer === questions.correct_answer) {
        quizContainer.style.display = "none";
        quizContainer1.style.display = "block";
        display1(0);
        
    } else { 
        (questions.answer === questions.correct_answer)   
        seconds = seconds - 12;
        }
    })
    
answerList1.addEventListener("click", function (event) {
    if  (questions1.answer1 === questions1.correct_answer1) {
        quizContainer1.style.display = "none";
        quizContainer2.style.display = "block";
        display2(0);
            
    } else { 
        (questions1.answer1 === questions1.correct_answer1)   
        seconds = seconds - 12;
         }
    })

answerList2.addEventListener("click", function (event) {
    if  (questions2.answer2 === questions2.correct_answer2) {
        quizContainer2.style.display = "none";
        quizContainer3.style.display = "block";
        display3(0);
            
    } else { 
        (questions2.answer2 === questions2.correct_answer2)   
        seconds = seconds - 12;
         }
    })

answerList3.addEventListener("click", function (event) {
    if (questions3.answer3 === questions3.correct_answer3) {  
        seconds = seconds - 12;
        

        } else { 
        quizContainer3.style.display = "none";
        endContainer.style.display = "block";
        } 
    })

var questions = [
    {
        question:"Commonly used data type DO not include: ",
        answer: ["strings", "booleans", "alerts", "numbers"], 
        correct_answer: "booleans",
    }]
var questions1 = [   
    {
        question1:"String values must be enclosed within _____ when being assigned to variables.    ",
        answer1: ["commas", "curly brackets", "quotes", "parenthesis"], 
        correct_answer1: "curly brackets",
    }]
var questions2 = [
    {
        question2:"Arrays in java script can store _____.",
        answer2: ["numbers and strings", "other arrays", "booleans", "all of the above"],  
        correct_answer2: "all of the above",
    }]
var questions3 = [
    {
        question3:"The condition in an if /else statement is enclosed with ____.",
        answer3: ["quotes", "curly brackets", "parenthesis", "square brackets"],  
        correct_answer3: "parenthesis",
    }
]
///------------

card.addEventListener("click", function(event) {
    startContainer.style.display = "none";    
    quizContainer.style.display = "none";
    quizContainer1.style.display = "none";
    quizContainer2.style.display = "none";
    quizContainer3.style.display = "none";
    endContainer.style.display = "none";
    timer.style.display = "none"
    scoreContainer.style.display = "block";
    })

///-----------


///--------------score container

var lists = []
//var listcount = []; 
function showScore() {
    scoreContainer.style.display = "block";
    endContainer.style.display = "none";
    savedList.innerHTML = "saved-list"; 
    savedCount.textContent= lists.length;

    for (var i = 0; i < lists.length; i++) {
        var list = lists[i];
    
        var li = document.createElement("li");
        li.textContent = list;
        li.setAttribute("data-index", i);

        button = document.createElement("button");
        li.appendChild(button);
        savedList.appendChild(li);
     }
     }

function savedIntials() {
    var nameInits = localStorage.getItem("#saved-name");
    savedName.textContent = nameInits;
    savedScore.textContent = highScore;
  }

//---------eventlistener

endContainer.addEventListener("click", function(event) {
    

startContainer.style.display = "none";    
quizContainer.style.display = "none";
quizContainer1.style.display = "none";
quizContainer2.style.display = "none";
quizContainer3.style.display = "none";
endContainer.style.display = "none";
timer.style.display = "none"
scoreContainer.style.display = "block";
event.preventDefault();
var nameInitals = document.querySelector("#saved-name").value;
var highScore = document.querySelector("#saved-score").value;

    if (nameInitals === ""){
        displayMessage("error, email cannot be blank");
    }
localStorage.setitem("#saved-name", nameInitals);
localStorage.setitem("#saved-score", highScore);
savedIntials();

})

savedIntials();

