// variable-declaration:

const ipValue = document.getElementById("input-value");
const opValue = document.getElementById("output-value");

const ipUnit = document.getElementById("input-unit");
const opUnit = document.getElementById("output-unit");

// calculation:

const massConversion = () => {

    // when input-unit ==> microgram
    if (ipUnit.value == "microgram") {

        if (opUnit.value == "microgram") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "miligram") {
            let result = ipValue.value / 1000;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "gram") {
            let result = ipValue.value / (1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kilogram") {
            let result = ipValue.value / (1000 * 1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "quintal") {
            let result = ipValue.value / (1000 * 1000 * 1000 * 100);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "tonne") {
            let result = ipValue.value / (1000 * 1000 * 1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }

    }

    // when input-unit ==> miligram
    if (ipUnit.value == "miligram") {

        if (opUnit.value == "microgram") {
            let result = ipValue.value * 1000;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "miligram") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "gram") {
            let result = ipValue.value / (1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kilogram") {
            let result = ipValue.value / (1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "quintal") {
            let result = ipValue.value / (1000 * 1000 * 100);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "tonne") {
            let result = ipValue.value / (1000 * 1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }

    }

    // when input-unit ==> gram
    if (ipUnit.value == "gram") {

        if (opUnit.value == "microgram") {
            let result = ipValue.value * (1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "miligram") {
            let result = ipValue.value * 1000;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "gram") {
            let result = ipValue.value * 1000;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kilogram") {
            let result = ipValue.value / 1000;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "quintal") {
            let result = ipValue.value / (1000 * 100);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "tonne") {
            let result = ipValue.value / (1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }

    }

    // when input-unit ==> kilogram
    if (ipUnit.value == "kilogram") {

        if (opUnit.value == "microgram") {
            let result = ipValue.value * (1000 * 1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "miligram") {
            let result = ipValue.value * (1000 * 10000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "gram") {
            let result = ipValue.value * 1000;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kilogram") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "quintal") {
            let result = ipValue.value / 100;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "tonne") {
            let result = ipValue.value / 1000;
            // console.log(result);
            opValue.value = result;
        }

    }
    // when input-unit ==> quintal
    if (ipUnit.value == "quintal") {

        if (opUnit.value == "microgram") {
            let result = ipValue.value * (1000 * 1000 * 1000 * 100);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "miligram") {
            let result = ipValue.value * (1000 * 1000 * 100);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "gram") {
            let result = ipValue.value * (1000 * 100);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kilogram") {
            let result = ipValue.value * 100;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "quintal") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "tonne") {
            let result = ipValue.value / 10;
            // console.log(result);
            opValue.value = result;
        }

    }
    // when input-unit ==> tonne
    if (ipUnit.value == "tonne") {

        if (opUnit.value == "microgram") {
            let result = ipValue.value * (1000 * 1000 * 1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "miligram") {
            let result = ipValue.value * (1000 * 1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "gram") {
            let result = ipValue.value * (1000 * 1000);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kilogram") {
            let result = ipValue.value * 1000;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "quintal") {
            let result = ipValue.value * 10;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "tonne") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }

    }

}