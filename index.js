// Mark-1

//welcome :readlinesync
//define score
//use play function and condition to update score
//array of objects i.e. ques. & ans.
// access array using for loop
//final thank you message.

// welcome user
var readlineSync = require("readline-sync");

var userName = readlineSync.question("Please, Enter your name : ");

console.log("");

console.log("Welcome" + " " + userName + " ," + "Let's check HOW WELL YOU know me ?");

console.log("");

var score = 0;

//function use to know an answer is right or wrong and calculate score

function play(question,answer){
  var userAnswer = readlineSync.question(question); //i.e. Question1=answer1
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Your answer is right.");
    score= score + 1;
  }else{
    console.log("Your answer is wrong.");
  }
  
  console.log("Your Current Score is : ", score); //as we only want correct score, we aren't penalizing them for mistake

  console.log(" ");
}

// defining objects and using them in an array

var quiz =[{ 
  question :"What is my name ? \nYour response : ",
  answer : "Nitesh",
  }, 
  {
  question : "Choose from given options.\n Where is my home town ? \n a. Allahabad \n b. Lucknow \n c. Gorakhpur \n Your response : ",
  answer : "c",
  },
  {
  question : "What is my favourite fruit ? \n a. Mangoes \n b. Banana \n c. Apple \n Your response : ",
  answer : "a",
  },
  {
    question : "What is my favourite sport ? \n a. Football \n b. Cricket \n c. Hockey \n Your response : ",
    answer : "a",
  },
  {
    question : "Who is my favourite sports personality ? \n a. Virat Kohli \n b. M.S. Dhoni \n c. Lionel Messi \n Your response : ",
    answer : "b",
  },
  {
    question : "What's my favourite thing to do when I'm free? \n a. Writing Poetry & stories \n b. Painting \n c. Music \n Your response : ",
    answer: "a",
  }]

  
  //accessing array objects through for loop
  
  for(i=0;i<quiz.length;i++){
    var currentQuestion =quiz[i];
   play(currentQuestion.question,currentQuestion.answer); //Note: we used the "play" function to check the answers and update score
  }

  console.log("Yay! Your final score is : ", score);


//data of high score

var highScores =[{
  name:"Nitesh",
  score:"6",
  }
]

console.log("");
console.log("Check out the high scores : ", highScores);

console.log("");
console.log("If you have scored more than 5. Congrat's you're a Top Scorer.");
console.log("Send me the screenshot of your Final Score.");
console.log("You'll be shown as a high scorer.")

console.log("");
console.log("Thank you!, You're amazing.")