// variable-declaration:

const ipValue = document.getElementById("input-value");
const opValue = document.getElementById("output-value");

const ipUnit = document.getElementById("input-unit");
const opUnit = document.getElementById("output-unit");

// calculation:

const lenConversion = () => {

    // when input-unit ==> micrometer
    if (ipUnit.value == "micrometer") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value / 1000;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value / (1000 * 10);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = ipValue.value / (1000 * 10 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            // 30.48
            let result = ipValue.value / (1000 * 10 * 12 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = ipValue.value / (1000 * 10 * 100);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = ipValue.value / (1000 * 10 * 100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = (ipValue.value * 0.621371) / (1000 * 10 * 100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

    // when input-unit ==> milimeter
    if (ipUnit.value == "milimeter") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * 1000;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value / 10;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = ipValue.value / (10 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            let result = ipValue.value / (10 * 12 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = ipValue.value / (10 * 100);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = ipValue.value / (10 * 100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = (ipValue.value * 0.621371) / (10 * 100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

    // when input-unit ==> centimeter
    if (ipUnit.value == "centimeter") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * (1000 * 10);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value * 10;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = ipValue.value / 2.54;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            let result = ipValue.value / (12 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = ipValue.value / 100;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = ipValue.value / (100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = (ipValue.value * 0.621371) / (100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

    // when input-unit ==> inch
    if (ipUnit.value == "inch") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * (1000 * 10 * 2.54);
            // console.log(result);
            opValue.value = result;
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value * (10 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value * 2.54;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            let result = ipValue.value / 12;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = (ipValue.value * 2.54) / 100;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = (ipValue.value * 2.54) / (100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = (ipValue.value * 2.54 * 0.621371) / (100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

    // when input-unit ==> foot
    if (ipUnit.value == "foot") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * (1000 * 10 * 2.54 * 12);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value * (10 * 2.54 * 12);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value * (2.54 * 12);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = ipValue.value * 12;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = (ipValue.value * 2.54 * 12) / 100;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = (ipValue.value * 2.54 * 12) / (100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = (ipValue.value * 2.54 * 12 * 0.621371) / (100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

    // when input-unit ==> meter
    if (ipUnit.value == "meter") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * (1000 * 10 * 100);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value * (10 * 100);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value * 100;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = (ipValue.value * 100) / 2.54;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            let result = (ipValue.value * 100) / (12 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = ipValue.value / 1000;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = (ipValue.value * 0.621371) / 1000;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

    // when input-unit ==> kilometer
    if (ipUnit.value == "kilometer") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * (1000 * 10 * 100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value * (10 * 100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value * (100 * 1000);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = (ipValue.value * 100 * 1000) / 2.54;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            let result = (ipValue.value * 100 * 1000) / (12 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = ipValue.value * 1000;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = ipValue.value * 0.621371;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

    // when input-unit ==> mile
    if (ipUnit.value == "mile") {

        if (opUnit.value == "micrometer") {
            let result = ipValue.value * (1000 * 10 * 100 * 1000 * 0.621371);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "milimeter") {
            let result = ipValue.value * (10 * 100 * 1000 * 0.621371);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "centimeter") {
            let result = ipValue.value * (100 * 1000 * 0.621371);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "inch") {
            let result = (ipValue.value * 100 * 1000 * 0.621371) / 2.54;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "foot") {
            let result = (ipValue.value * 100 * 1000 * 0.621371) / (12 * 2.54);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "meter") {
            let result = ipValue.value * (1000 * 0.621371);
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "kilometer") {
            let result = ipValue.value / 0.621371;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }
        if (opUnit.value == "mile") {
            let result = ipValue.value * 1;
            // console.log(result);
            opValue.value = Number.parseFloat(result).toExponential(5);
        }

    }

}