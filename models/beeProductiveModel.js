var counter = 0;
var randomBugNumber;
var Sequelize = require('sequelize');

function countUp(){
    counter++;
    console.log(counter);
    if(counter>2){
        stopCounter()
    };
}

function startCounter(){
    timerInterval= setInterval(countUp, 1000);
};

function stopCounter(){
    clearInterval(timerInterval);
    console.log("Stopping");
    randomBugNumber = Math.random();
    console.log(randomBugNumber)
}

function counterTest(){
    counter = Math.floor(Math.random() * 20);
    console.log(counter);
}

function awardBug(bugNumber){
    console.log("You got Bug Number " + bugNumber);
    //do a SQL statement;
};

startCounter();

if (counter < 5){
    awardBug(1);
} else if (counter < 10){
    if (randomBugNumber < .7){
        awardBug(2);
    } else {
        awardBug(3);
    }
} else if (counter < 15){
    if (randomBugNumber < .3){
        awardBug(2);
    } else if (randomBugNumber < .8){
        awardBug(3);
    } else {
        awardBug(4);
    }
} else {
    if (randomBugNumber < .2){
        awardBug(1);
    } else if(randomBugNumber < .4){
        awardBug(2);
    } else if (randomBugNumber < .6){
        awardBug(3);
    } else {
        awardBug(4);
    };
};