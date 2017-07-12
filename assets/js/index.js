// Variable that will hold the setInterval
var timer;
var questionArea = $("#questions");
var answerArea = $("#answers");

var game = {
        correct: 0,
        incorrect: 0,
        counter: 60,

        countdown: function() {
            game.counter--;
            $("counter-number").html(game.counter);
            if (game.counter === 0) {
                $("#counter-number").text("Time's Up");
                game.done();
            }
        },
        start: function() {
            // This will clear the button
            $("#welcome").html(" ");
            timer = setInterval(game.countdown, 1000);

            for (var i = 0; i < testItems.length; i++) {
                questionArea.append("<h2>" + testItems[i].question + "</h2>");
                for (var j = 0; j < testItems[i].choices.length; j++) {
                    questionArea.append("<input type = 'radio' name='question-"+ i +"' value='" + testItems[i].choices[j] + "''>" + testItems[i].choices[j]);
                }
            }
            questionArea.append("<br>");
            questionArea.append("<button id = 'done'> Grade It </button>");
        },
        done: function() {
            $.each($("input[name='question-0']:checked"), function() {
                var answer = $(this)
                if (answer.val() === testItems[0].correct) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
                console.log(answer);
            });

            $.each($("input[name='question-1']:checked"), function() {
                    if ($(this).val() === testItems[1].correct) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });

            $.each($("input[name='question-2']:checked"), function() {
                    if ($(this).val() === testItems[2].correct) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
            });
            this.results();

        },
        results: function() {
                    clearInterval(timer);
                    $("#questions").remove();
                    answerArea.html("<h1> Here's how you did</h1>" + "<br>" +
                        "<h3> Correct answers: " + this.correct + "</h3>" +
                        "<h3> Inorrect answers: " + this.incorrect + "</h3>"
                    );
        }
};


var testItems = [

    {
        question: "1. Who appears in the $100 dollar bill?",
        choices: ["Benjamin Franklin", "Abraham Lincoln", "George Washington"],
        correct: "Benjamin Franklin"
    },

    {
        question: "2. Who authored the phrase Confidence comes not from always being right but not fearing to be wrong?",
        choices: ["Marquis de Sade", "Nicolo Machiavelli", "Anonymous", "J.P Morgan"],
        correct: "Anonymous"
    },

    {
        question: "3.   Author of “How to win friends and influence people”:",
        choices: ["Marquis de Sade", "Nicolo Machiavelli", "Dale Carnegie", "J.R. Tolkien"],
        correct: "Dale Carnegie"
    }
];

// Click events

// The user will have the option to click on the button to start the game. 
$("#welcome").on("click", function() {
    game.start();
});

$(document).on("click", "#done", function() {
    game.done();
});
