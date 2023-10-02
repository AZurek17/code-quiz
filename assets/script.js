var startContainer = document.querySelector (".start_container");
var quizContainer = document.querySelector (".quiz_container");
var quizContainer1 = document.querySelector (".quiz_container1");

var endContainer = document.querySelector (".end_container");
var scoreContainer = document.querySelector (".score_container");

/////////startContainer--------------------
var startButton = document.querySelector (".start_button");
var timer = document.querySelector (".timer");
var globalIndex = 0;
////////quizContainer------------------------
var questionText = document.querySelector (".question_text");
var answerList = document.querySelector (".answer_list");
var listAnswer = document.querySelector (".list_answer");
///////end container----------------------
var listText = document.getElementById ("#list-text");
var saveButton = document.getElementById("#save-button");
var listForm = document.getElementById("#list-form");
var savedCount = document.getElementById("#saved-count");

////////ScoresContainer-------------------
var savedName = document.getElementById("#saved-name");
var savedScore = document.getElementById("#saved-score");
var savedList = document.getElementById("#saved-list");

////--------------------------------
////---------------------------------
//// start of code
quizContainer.style.display = "none";
endContainer.style.display = "none";
scoreContainer.style.display = "none";

//button-------event
startButton.addEventListener("click", function (e) {
quizContainer.style.display = "block";
startContainer.style.display = "none";

setTimer();
display(0);
})

//---------------timer
var seconds = 60;

function setTimer() {
    var timerInterval = setInterval(function() {
        seconds--;
        timer.textContent = seconds + " seconds left.";
    
        if (seconds === 0 || seconds < 0) {
          clearInterval(timerInterval);
          quizContainer.style.display = "none";
          endContainer.style.display = "block";
          //playerScores()
        }
    }, 1000);      
}

//-----------------------------------------------

function display(GI) {
    questionText.textContent = questions[GI].question;
    questions [GI].answer.forEach(function(a){
        var button = document.createElement("button");
        button.textContent = a;
        answerList.appendChild (button)
    }) 
}
function display1(GI) {
    questionText.textContent = questions[GI].question;
    questions [GI].answer.forEach(function(a){
        var button = document.createElement("button");
        button.textContent = a;
        answerList.appendChild (button)
    }) 
}

///----------------next page

answerList.addEventListener("click", function (event) {

    if (questions.answer == questions.correct_answer) {  
       seconds = seconds - 8;

        } else {
            quizContainer.style.display = "none";
            quizContainer1.style.display = "block";
            setTimer();
            display1(0);
        } 
})


var questions = [
    {
        question:"Commonly used data type DO not include: ",
        answer: ["strings", "booleans", "alerts", "numbers"], 
        correct_answer: "booleans",
    },
    {
        question:"String values must be enclosed within _____ when being assigned to variables.    ",
        answer: ["commas", "curly brackets", "quotes", "parenthesis"], 
        correct_answer: "curly brackets",
    },
    {
        question:"Arrays in java script can store _____.",
        answer: ["numbers and strings", "other arrays", "booleans", "all of the above"],  
        correct_answer: "all of the above",
    },
    {
        question:"The condition in an if /else statement is enclosed with ____.",
        answer: ["quotes", "curly brackets", "parenthesis", "square brackets"],  
        correct_answer: "parenthesis",
    }
]

///--------------score container

var lists = []
//var listcount = []; 
function showScore() {
    scoreContainer.style.display = "block";
    endContainer.style.display = "none";
    savedList.innerHTML = ""; 
    savedCount.textContent= lists.length;
    
    //var quizScore = {//JSON.parse(localStorage.getItem("studentScore"));
    
    for (var i = 0; i < lists.length; i++) {
        var list = lists[i];
    
        var li = document.createElement("li");
        li.textContent = list;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        // li.appendChild(button);
        savedList.appendChild(li);
     }
     }

function init(){
    var storedLists = JSON.parse(localStorage.getItem("lists"));
        if (storedLists !== null) {
            lists = storedLists;
        }
    showScore();
}
function storeLists() {
    localStorage.setItem("lists", JSON.stringify(lists));
}

////---------eventlistener

saveButton.addEventListener("click", function(event) {
    
    event.preventDefault();
    var textList = savedList.value.trim();
        if (textList === "") {
        return;
        }
    lists.push(textList);
    textList.value = "";
    
    storeLists();
    showScore();
});



init();
//endContainer.style.display = "none";
//scoreContainer.style.display = "block";




    // if (quizScore !== null){
    // document.getElementById("#saved-text").innerHTML = quizScore.initials;
    // document.getElementById("#saved-score").innerHTML = quizScore.score;// change to score vs inititals
    // }else {
    //     return;
    // }


    //endContainer.style.display = "none";
    //scoreContainer.style.display = "block";
//var scoreSave =  timer.textContent = seconds

//var score = seconds;
// function savedText() {
//      var studentScore = {
//          initials: initials.value.trim()
//          //score: score.value
//      }
//     }

//      localStorage.setItem("studentScore", JSON.stringify(studentScore));
// }
 

/////--------- next page

// scoreButton.addEventListener("click", function(event) {
//     endContainer.style.display = "none";
//     scoreContainer.style.display = "block";
//     event.preventDefault();

    //saveHistory();
    //showScore();
//   });

// function storeLists() {
//     localStorage.setItem("lists", JSON.stringify(lists));
// }
///--------------score container

//42 var lists = []
  
// function saveScore() {
//     //endContainer.style.display = "none";
//     //scoreContainer.style.display = "block";
//     //savedList.innerHTML = ""; 
//     //var quizScore = {//JSON.parse(localStorage.getItem("studentScore"));
    
//     var testerName = {
//         listText: listText.value
//         //savedScore: savedScore.value

//     };
//         localStorage.setItem("testerName", JSON.stringify(testerName));
//     }
    
    // 42 for (var i = 0; i < lists.length; i++) {
    //     var list = lists[i];
    
    //     var li = document.createElement("li");
    //     li.textContent = list;
    //     li.setAttribute("data-index", i);

    //     savedList.appendChild(li);
    // }
    // }