var stopwatch = {
	minutes: "5",
	seconds: "00"
}


var questionList = [{
	question1: '1. Who appears in the $100 dollar bill?',
    choices: ["Benjamin Franklin", "Abraham Lincoln", "George Washington"],
    correctAnswer: "Benjamin Franklin"
  }, {
    question2: '2. Who authored the phrase Confidence comes not from always being right but not fearing to be wrong?',                                                                   ",
    choices: ["Marquis de Sade", "Nicolo Machiavelli", "Anonymous", "J.P Morgan"],
    correctAnswer: "Anonymous"
  }, {
    question3: '3.	Author of "How to win friends and influence people":',
    choices: ["Dale Carnegie", "Dalai Lama XIV ", "Donald Trump"],
    correctAnswer: "Dale Carnegie"
  }, {
    question4: '4.	Public speaker and writer of See you at the Top',
    choices: ["Robert Kiyosaki", "Tony Robbins", "Zig Ziglar"],
    correctAnswer: "Zig Ziglar"
  }, {
    question5: '5.	First and only African American multi-billionaire',
    choices: ["Jay Z", "Oprah Winfrey", "Colin Powell"],
    correctAnswer: "Oprah Winfrey"
  }];


// The user will have the option to click on the button to start the game. This will clear the button, display the questions and start the timer
$("#questions").on("click",function() {
  $("button").remove();
  $("#question-list").append("<div>'Hello'</div>")
  console.log(questionList);
  var quizCounter = setTimeout(function(){
    }, 5000);
  console.log(function);
});
// <div class="reset-button">
// 			<button class="resetbtn btn btn-warning">Restart the Trivia Game!</button>		
// 		</div>
     
 
  


// The timer will start. It will give the player 3 minutes to answer all the questions

// There will be 7 questions. I will use the <select> tag in 3, the radio tag in other three and one will be True/False

// The counter in the background will tally the answers and calculate score

// A div will pop up and display the score. 

// The score div will have a button to ask the player if they want to play again









// ____________________________________________________

// //  Only for reference

// //  Step 1:
// //  Use the following link inside the Audio function below:
// //  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
// var audio = new Audio("raven.mp3");

// //  Step 2:
// //  after 5 seconds, execute the fiveSeconds function
// //  after 10 seconds, execute the tenSeconds function
// //  after 15 seconds, execute the timeUp function

// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);

// //  Step 3:
// //  Fill in the blanks to these functions.
// function fiveSeconds() {

//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }

// function tenSeconds() {

//   // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
//   // console log 5 seconds left
//   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//   console.log("5 seconds left");
// }

// function timeUp() {

//   // in the element with an id of time-left add an h2 saying Time's Up!
//   // console log done
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");

//   //  The following line will play the audio file we linked to above:
//   audio.play();
// }
