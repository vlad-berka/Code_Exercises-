//variables
var secondsLeft = 75;
var timeEl = document.querySelector(".time");
var endMessage = "Quiz is complete!";
var score = 0;

// array of questions + their answers
var questAns = [
  "Which of the following is not a data type?",
  "Boolean",
  "Integer",
  "String",
  "Null",
  "The item found within a tag, which can be used to identify a specific tag is called a(n) ______.",
  "Element",
  "Object",
  "Attribute",
  "Style",
  "Which major language would you use to style and position content on your webpage?",
  "JavaScript",
  "HTML",
  "CSS",
  "C++",
  "Which flex property aligns properties on the horizontal axis?",
  "Flex-direction",
  "Justify-content",
  "Align-items",
  "Align-self",
  "What does HTML stand for?",
  "Hypertext Markup Language",
  "Hypertype Markup Language",
  "Hypertext Making Language",
  "Hypertext Market Language",
];

//array of answers
var answers = [
  questAns[2],
  questAns[8],
  questAns[13],
  questAns[17],
  questAns[21],
];

//timer countdown function
function timer() {
  var timerInterval = setInterval(function () {
    timeEl.textContent = secondsLeft + " seconds remaining";
    secondsLeft--;
    if (secondsLeft === 0) {
      timeEl.textContent = "Time's up";
      clearInterval(timerInterval);
    }
  }, 1000);
}

//button click triggers timer to begin and startQuiz function
document.querySelector("button").addEventListener("click", function () {
  document.getElementById("begin").style.display = "none";
  timer();
  startQuiz();
});

//making the ul a clickable event
var responses = document.querySelector(".responses");
responses.addEventListener("click", function (selection) {
  //idenitifying if answer selected by the user is correct (an element of the answer array)
  function checkValue(selection, answers) {
    var status = "correct";
    for (var i = 0; i < answers.length; i++) {
      var name = answers[i];
      if (name == selection) {
        status = "correct";
        score++;
      }
    }
  }
});

// })

// variables for questions and answers
var question = document.querySelector(".question");
var answerOne = document.querySelector(".answer1");
var answerTwo = document.querySelector(".answer2");
var answerThree = document.querySelector(".answer3");
var answerFour = document.querySelector(".answer4");

//score count
var score = 0;

//fxn to ask q1
function questionOne() {
  question.textContent = questAns[0];
  answerOne.textContent = questAns[1];
  answerTwo.textContent = questAns[2];
  answerThree.textContent = questAns[3];
  answerFour.textContent = questAns[4];
  //   if () {
  //       score++
  //   } else {
  //     secondsLeft = (secondsLeft - 8)
  //   }
}

//function to ask q2
function questionTwo() {
  question.textContent = questAns[5];
  answerOne.textContent = questAns[6];
  answerTwo.textContent = questAns[7];
  answerThree.textContent = questAns[8];
  answerFour.textContent = questAns[9];
}

//fxn to ask q3
function questionThree() {
  question.textContent = questAns[10];
  answerOne.textContent = questAns[11];
  answerTwo.textContent = questAns[12];
  answerThree.textContent = questAns[13];
  answerFour.textContent = questAns[14];
}

// fxn to ask q4
function questionFour() {
  question.textContent = questAns[15];
  answerOne.textContent = questAns[16];
  answerTwo.textContent = questAns[17];
  answerThree.textContent = questAns[18];
  answerFour.textContent = questAns[19];
}

//fxn to ask q5
function questionFive() {
  question.textContent = questAns[20];
  answerOne.textContent = questAns[21];
  answerTwo.textContent = questAns[22];
  answerThree.textContent = questAns[23];
  answerFour.textContent = questAns[24];
}

// function to start quiz
function startQuiz() {
  questionOne();
}

console.log(answers[2]);
console.log(answers);
console.log(typeof answers);
console.log(typeof answers[0]);
console.log("score:" + score);
// console.log(typeof (answerTwo.textContent = questAns[2]))