// variables declaration:

const minutes = document.getElementById("display-mins");
const seconds = document.getElementById("display-secs");
const miliseconds = document.getElementById("display-milisecs");

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const resetBox = document.getElementById("reset-box");

let timer = false;
let totalms = 0;
let secs = 0;
let mins = 0;

function startTime() {
    timer = true;

    startBtn.setAttribute("style", "opacity:0.5;pointer-events:none");
    pauseBtn.setAttribute("style", "opacity:1;pointer-events:all");
    resetBtn.setAttribute("style", "opacity:1;pointer-events:all");
    resetBox.setAttribute("style", "opacity:1;pointer-events:all");

    stopWatch();
}

function pauseTime() {
    timer = false;

    startBtn.setAttribute("style", "opacity:0.5;pointer-events:none");
    pauseBtn.setAttribute("style", "opacity:0.5;pointer-events:none");
    resetBtn.setAttribute("style", "opacity:1;pointer-events:all");
    resetBox.setAttribute("style", "opacity:1;pointer-events:all");

    stopWatch();
}

function resetTime() {
    startBtn.setAttribute("style", "opacity:1;pointer-events:all");
    pauseBtn.setAttribute("style", "opacity:0.5;pointer-events:none");
    resetBtn.setAttribute("style", "opacity:0.5;pointer-events:none");
    resetBox.setAttribute("style", "opacity:0.5;pointer-events:none");

    timer = false;

    location.reload();
    return false;
}

function stopWatch() {
    if (timer === true) {

        totalms = totalms + 1;

        if (totalms == 100) {
            secs = secs + 1;
            totalms = 0;
        }

        if (secs == 60) {
            mins = mins + 1;
            secs = 0;
        }

        if (totalms == 59 && secs == 59 && mins == 59) {
            timer = false;
        }

        if (totalms < 10) {
            miliseconds.innerText = "0" + totalms;
        } else {
            miliseconds.innerText = totalms;
        }
        if (secs < 10) {
            seconds.innerText = "0" + secs;
        } else {
            seconds.innerText = secs;
        }
        if (mins < 10) {
            minutes.innerText = "0" + mins;
        } else {
            minutes.innerText = mins;
        }

        setTimeout("stopWatch()", 10);

    }
}