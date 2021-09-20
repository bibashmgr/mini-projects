// variable declaration:
const hours = document.getElementById("hours-span");
const minutes = document.getElementById("mins-span");
const seconds = document.getElementById("secs-span");

let currentTime = () => {
    let currentDate = new Date();
    let hrs = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let secs = currentDate.getSeconds();

    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;

    setTimeout("currentTime()", 1000);
};

currentTime();

// dark-mode
const darkMode = (boxName) => {
    boxName.classList.toggle("active");
    document.body.classList.toggle("active");
};