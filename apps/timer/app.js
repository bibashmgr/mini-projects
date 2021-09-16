// variables declaration:
const days = document.getElementById('input-days');
const hours = document.getElementById('input-hours');
const mins = document.getElementById('input-mins');
const secs = document.getElementById('input-secs');

const startBtn = document.getElementById('start-btn');
const resetBox = document.getElementById('reset-box');
const resetBtn = document.getElementById('reset-btn');

function startTime() {

    if (isNaN(days.value) != true && isNaN(hours.value) != true && isNaN(mins.value) != true && isNaN(secs.value) != true && days.value != "" && hours.value != "" && mins.value != "" && secs.value != "") {

        const dayValue = (days.value) * 24 * 60 * 60 * 1000;
        const hourValue = (hours.value) * 60 * 60 * 1000;
        const minValue = (mins.value) * 60 * 1000;
        const secvalue = (secs.value) * 1000;

        let totalValue = dayValue + hourValue + minValue + secvalue;

        function totalGap() {

            if (totalValue > 0) {
                totalValue = totalValue - 1000;
                let textDay = Math.floor(totalValue / (24 * 60 * 60 * 1000));
                let textHour = Math.floor((totalValue % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                let textMin = Math.floor((totalValue % (60 * 60 * 1000)) / (60 * 1000));
                let textSec = Math.floor((totalValue % (60 * 1000)) / 1000);

                if (textDay < 10) {
                    textDay = "0" + textDay;
                }
                if (textHour < 10) {
                    textHour = "0" + textHour;
                }
                if (textMin < 10) {
                    textMin = "0" + textMin;
                }
                if (textSec < 10) {
                    textSec = "0" + textSec;
                }

                days.value = textDay;
                hours.value = textHour;
                mins.value = textMin;
                secs.value = textSec;

            } else {

                clearInterval(myCounter);

            }

        }

        startBtn.setAttribute("style", "opacity:0.5; pointer-events:none");
        resetBox.setAttribute("style", "opacity:1; pointer-events:all");
        resetBtn.setAttribute("style", "opacity:1; pointer-events:all");

        const myCounter = setInterval(totalGap, 1000);

    } else {

        window.alert("Invalid");

    }

}

function resetTime() {
    startBtn.setAttribute("style", "opacity:1; pointer-events:all");
    resetBox.setAttribute("style", "opacity:0.5; pointer-events:none");
    resetBtn.setAttribute("style", "opacity:0.5; pointer-events:none");
    location.reload();
    return false;
}