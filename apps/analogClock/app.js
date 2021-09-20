// variable declaration:
const clock = document.getElementById("clock-container");

const secHand = document.getElementById("second-hand");
const minHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

// clock
const clockER = () => {
    let currentDate = new Date();
    let seconds = (currentDate.getSeconds()) / 60;
    let minutes = (currentDate.getMinutes() + seconds) / 60;
    let hours = currentDate.getHours();

    if (hours > 12) {
        hours = ((hours - 12) + minutes) / 12;
    } else {
        hours = (hours + minutes) / 12;
    }

    let secRotation = "transform: rotate(" + seconds * 360 + "deg);";
    let minRotation = "transform: rotate(" + minutes * 360 + "deg);";
    let hourRotation = "transform: rotate(" + hours * 360 + "deg);";

    secHand.setAttribute("style", secRotation);
    minHand.setAttribute("style", minRotation);
    hourHand.setAttribute("style", hourRotation);
};

setInterval("clockER()", 1000);

// dark-mode
const darkMode = (boxName) => {
    boxName.classList.toggle("active");
    document.body.classList.toggle("active");

    clock.classList.toggle("active");

    secHand.classList.toggle("active");
    minHand.classList.toggle("active");
    hourHand.classList.toggle("active");
};