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
var saveButton = document.getElementById("#save-button");
var listForm = document.getElementById("#list-form");
var savedCount = document.getElementById("#saved-count");

////////ScoresContainer-------------------
var savedName = document.getElementById("#saved-name");
var savedScore = document.getElementById("#saved-score");
var savedList = document.getElementById("#saved-list");
////---------------------------------

//// start of code
quizContainer.style.display = "none";
quizContainer1.style.display = "none";
quizContainer2.style.display = "none";
quizContainer3.style.display = "none";
endContainer.style.display = "none";
scoreContainer.style.display = "none";

//---------------timer
var seconds = 60;

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
startButton.addEventListener("click", function (e) {
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
        seconds = seconds - 8;
        }
    })
    
answerList1.addEventListener("click", function (event) {
    if  (questions1.answer1 === questions1.correct_answer1) {
        quizContainer1.style.display = "none";
        quizContainer2.style.display = "block";
        display2(0);
            
    } else { 
        (questions1.answer1 === questions1.correct_answer1)   
        seconds = seconds - 8;
         }
    })

answerList2.addEventListener("click", function (event) {
    if  (questions2.answer2 === questions2.correct_answer2) {
        quizContainer2.style.display = "none";
        quizContainer3.style.display = "block";
        display3(0);
            
    } else { 
        (questions2.answer2 === questions2.correct_answer2)   
        seconds = seconds - 8;
         }
    })

answerList3.addEventListener("click", function (event) {
    if (questions3.answer3 === questions3.correct_answer3) {  
        seconds = seconds - 8;
        

        } else { 
        quizContainer3.style.display = "none";
        endContainer.style.display = "block";
        } 
    })


// var questions = [
//     {
//         question:"Commonly used data type DO not include: ",
//         answer: ["strings", "booleans", "alerts", "numbers"], 
//         correct_answer: "booleans",
//     },
//     {
//         question:"String values must be enclosed within _____ when being assigned to variables.    ",
//         answer: ["commas", "curly brackets", "quotes", "parenthesis"], 
//         correct_answer: "curly brackets",
//     },
//     {
//         question:"Arrays in java script can store _____.",
//         answer: ["numbers and strings", "other arrays", "booleans", "all of the above"],  
//         correct_answer: "all of the above",
//     },
//     {
//         question:"The condition in an if /else statement is enclosed with ____.",
//         answer: ["quotes", "curly brackets", "parenthesis", "square brackets"],  
//         correct_answer: "parenthesis",
//     }
// ]

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

// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     var textList = savedList.value.trim();
//         if (textList === "#") {
//         return;
//         }
//     lists.push(textList);
//     textList.value = "";
    
//     storeLists();
//     showScore();
// });



//init();


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

    
// funciton to get the next questions
// questions appears on screen (display)
// [ questions text]

//click funciton
//start with IF statement
//use this keyword to target value()
//clear hmtl for next input
//advance to the next question, incriment
//verify, if more questions
//if no more question, end game else go thte
  // function nextQuestion(next) {
    //     index = index + next;
    //     if (index < 0) { 
    //       index = answerList.questions.length - 1; 
    //     } else if (index > answerList.questions.length - 1) { 
    //       index = 0;
    //     }
    //     currentQuestions = questions[index];
    //     questions++;
    //   }