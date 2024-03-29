// Copyright (c) 2022-2023 gparap
// Digital Clock

var time = null;
var hours = null;
var minutes = null;
var seconds = null;

// display the time
setInterval(displayTime, 1000);

// get html elements
var elementHours = document.getElementById("hours");
var elementMinutes = document.getElementById("minutes");
var elementSeconds = document.getElementById("seconds");


function displayTime() {
    getTimeNow();
    fixOneZeroDisplay();
    elementHours.innerHTML = hours;
    elementMinutes.innerHTML = minutes;
    elementSeconds.innerHTML = seconds;
}

function getTimeNow() {
    time = new Date();
    hours = time.getHours();
    
    // check whether to display the hours to 12-hour format
    var hourType = document.getElementById("hour-type-12");
    if (hourType.checked == true) {
        hours = hours % 12;

        //add pm or am on 12-hour clock
        var period = document.getElementById("period");
        if (time.getHours() >= 12) {
            period.innerHTML = "&nbsp;pm";
        }
        else {
            period.innerHTML = "&nbsp;pm";
        }
    }
    
    minutes = time.getMinutes();
    seconds = time.getSeconds();
}

function fixOneZeroDisplay() {
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
}

function getDate() {
    let timestamp = new Date();
    let date = document.getElementById("date");
    date.innerHTML += timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' + timestamp.getFullYear();
}
getDate();