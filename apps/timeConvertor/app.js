// variable-declaration:

const ipValue = document.getElementById("input-value");
const opValue = document.getElementById("output-value");

const ipUnit = document.getElementById("input-unit");
const opUnit = document.getElementById("output-unit");

const milisec = 1;
const sec = 1000;
const min = 60 * sec;
const hour = 60 * min;
const day = 24 * hour;
const week = 7 * day;
const month = 30 * day;
const year = 365 * day;

// calculation:

const timeConversion = () => {

    // when input-unit => milisecond
    if (ipUnit.value == "milisecond") {
        const milisec = 1;
        const sec = 1000;
        const min = 60 * sec;
        const hour = 60 * min;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 365 * day;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value / sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value / min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value / hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value / day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value / week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value / month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value / year;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit => second
    if (ipUnit.value == "second") {
        const sec = 1;
        const milisec = 1000 * sec;
        const min = 60 * sec;
        const hour = 60 * min;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 365 * day;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value * sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value / min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value / hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value / day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value / week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value / month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value / year;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit => minute
    if (ipUnit.value == "minute") {
        const min = 1;
        const sec = 60 * min;
        const milisec = 1000 * sec;
        const hour = 60 * min;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 365 * day;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value * sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value * min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value / hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value / day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value / week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value / month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value / year;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit => hour
    if (ipUnit.value == "hour") {
        const hour = 1;
        const min = 60 * hour;
        const sec = 60 * min;
        const milisec = 1000 * sec;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 365 * day;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value * sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value * min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value * hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value / day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value / week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value / month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value / year;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit => day
    if (ipUnit.value == "day") {
        const day = 1;
        const hour = 24 * day;
        const min = 60 * hour;
        const sec = 60 * min;
        const milisec = 1000 * sec;
        const week = 7 * day;
        const month = 30 * day;
        const year = 365 * day;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value * sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value * min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value * hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value * day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value / week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value / month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value / year;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit => week
    if (ipUnit.value == "week") {
        const week = 1;
        const day = 7 * week;
        const hour = 24 * day;
        const min = 60 * hour;
        const sec = 60 * min;
        const milisec = 1000 * sec;
        const month = 30 * day;
        const year = 365 * day;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value * sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value * min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value * hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value * day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value * week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value / month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value / year;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit => month
    if (ipUnit.value == "month") {
        const month = 1;
        const week = 4.285714285714286 * month;
        const day = 7 * week;
        const hour = 24 * day;
        const min = 60 * hour;
        const sec = 60 * min;
        const milisec = 1000 * sec;
        const year = 365 * day;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value * sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value * min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value * hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value * day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value * week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value * month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value / year;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit => year
    if (ipUnit.value == "year") {
        const year = 1;
        const month = 12 * year;
        const week = 4.285714285714286 * month;
        const day = 7 * week;
        const hour = 24 * day;
        const min = 60 * hour;
        const sec = 60 * min;
        const milisec = 1000 * sec;
        if (opUnit.value == "milisecond") {
            let result = ipValue.value * milisec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "second") {
            let result = ipValue.value * sec;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "minute") {
            let result = ipValue.value * min;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "hour") {
            let result = ipValue.value * hour;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "day") {
            let result = ipValue.value * day;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "week") {
            let result = ipValue.value * week;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "month") {
            let result = ipValue.value * month;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "year") {
            let result = ipValue.value * year;
            // console.log(result);
            opValue.value = result;
        }
    }

}