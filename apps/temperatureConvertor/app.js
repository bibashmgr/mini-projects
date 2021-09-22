// variable-declaration:

const ipValue = document.getElementById("input-value");
const opValue = document.getElementById("output-value");

const ipUnit = document.getElementById("input-unit");
const opUnit = document.getElementById("output-unit");

// calculation:

const tempConversion = () => {

    // when input-unit ==> celsius
    if (ipUnit.value == "celsius") {
        if (opUnit.value == "celsius") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "fahrenheit") {
            let result = (ipValue.value * (9 / 5)) + 32;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kelvin") {
            let result = (ipValue.value * 1) + 273.15;
            // console.log(result);
            opValue.value = result;
        }
    }

    // when input-unit ==> fahrenheit
    if (ipUnit.value == "fahrenheit") {
        if (opUnit.value == "celsius") {
            let result = (ipValue.value - 32) * (5 / 9);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "fahrenheit") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kelvin") {
            let result = ((ipValue.value - 32) * (5 / 9)) + 273.15;
            // console.log(result);
            opValue.value = result;
        }
    }
    // when input-unit ==> kelvin
    if (ipUnit.value == "kelvin") {
        if (opUnit.value == "celsius") {
            let result = ipValue.value - 273.15;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "fahrenheit") {
            let result = ((ipValue.value - 273.15) * (9 / 5)) + 32;
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "kelvin") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = result;
        }
    }

}