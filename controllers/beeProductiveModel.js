var counter = 0;
var randomBugNumber;
var Sequelize = require('sequelize');
var db = require("../models/");
var timer = {
    countUp: function (){
        counter++;
        console.log(counter);
        if(counter>2){
            timer.stopCounter()
        };
    }

    , startCounter: function (){
        timerInterval= setInterval(timer.countUp, 1000);
    }

    , stopCounter: function (){
        clearInterval(timerInterval);
        console.log("Stopping");
        randomBugNumber = Math.random();
        console.log(randomBugNumber)
        timer.counterCheck()
    }
    , counterCheck: function (){
        if (counter < 5){
            timer.awardBug(1);
        } else if (counter < 10){
            if (randomBugNumber < .7){
                timer.awardBug(2);
            } else {
                timer.awardBug(3);
            }
        } else if (counter < 15){
            if (randomBugNumber < .3){
                timer.awardBug(2);
            } else if (randomBugNumber < .8){
                timer.awardBug(3);
            } else {
                timer.awardBug(4);
            }
        } else {
            if (randomBugNumber < .2){
                timer.awardBug(1);
            } else if(randomBugNumber < .4){
                timer.awardBug(2);
            } else if (randomBugNumber < .6){
                timer.awardBug(3);
            } else {
                timer.awardBug(4);
            };
        };
    }
    , counterTest: function (){
        counter = Math.floor(Math.random() * 20);
        console.log(counter);
    }

    , awardBug: function (bugNumber){
        console.log("You got Bug Number " + bugNumber);

        /* Input Sanitization
        if(inputName.indexOf(";") !== -1 || inputDescription.indexOf(";") !== -1){
            cussOutUser()
        } else {
        //do a SQL statement;
        }
        */
    }
};

module.exports = timer;