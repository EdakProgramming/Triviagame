var stopwatch = {
    minutes: "5",
    seconds: "00"
}

var testItems = [

    {
        question: "1. Who appears in the $100 dollar bill?",
        choices: ["Benjamin Franklin", "Abraham Lincoln", "George Washington"],
        correct: "Benjamin Franklin"
    },

    {
        question: "2. Who authored the phrase Confidence comes not from always being right but not fearing to be wrong?",
        choices: ["Marquis de Sade", "Nicolo Machiavelli", "Anonymous", "J.P Morgan"],
        correct: "Benjamin Franklin"
    },

    {
        question: "3.	Author of “How to win friends and influence people”:",
        choices: ["Marquis de Sade", "Nicolo Machiavelli", "Anonymous", "J.P Morgan"],
        correct: "Benjamin Franklin"
    }
];

function createRadioBtn(i) {
    for (k = 0; k < testItems[i].choices.length; k++) {
        var $radioBtn = $('<input type="radio" name="rbtnCount' + i + '"/>');
        var $label = $("<label>").text(testItems[i].choices[k]);
        $radioBtn.appendTo("#questions");
        $label.appendTo("#questions");
    }
}

function questionChecker() {

    for (var i = 0; i < testItems.length; i++) {
        $("#questions").append(testItems[i].question);
        $("#questions").append("<br>");
        createRadioBtn(i);
        $("#questions").append("<br>");

        // create and if statement to verify choices against correct
    }
};

// The user will have the option to click on the button to start the game. 
$("#welcome").on("click", function() {
    // This will clear the button
    $("#welcome").html(" ");
    // display the questions 
    questionChecker();
    timer();
});

// <div class="reset-button">
// 			<button class="resetbtn btn btn-warning">Restart the Trivia Game!</button>		
// 		</div>

function timer() {
    var quizCounter = setTimeout(function() {
    // before you clear the html, get playerAnswer
    $("body").on("click", ".answer", function(event) {
        //answeredQuestion = true;
        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswers[questionCounter]) {
            //alert("correct");

            clearInterval(theClock);
            generateWin();
        } else {
            //alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    });
    // Get 
    for ()

    $("#questions").html("");
    }, 60000);
}
// find which question was selected
// compare playerAnswer to 











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
