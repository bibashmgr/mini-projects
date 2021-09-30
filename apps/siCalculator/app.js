// variables-declaration:
const principal = document.getElementById("input-principal");
const rate = document.getElementById("input-rate");
const time = document.getElementById("input-time");
const findBtn = document.getElementById("btn-find");
const outputText = document.getElementById("span-output");

const calculateSI = () => {

    if (findBtn.value == "Retry") {
        window.location.reload();
    } else {

        let principalVal = principal.value;
        let rateVal = rate.value;
        let timeVal = time.value;

        if (principalVal == "" && rateVal == "" && timeVal == "") {
            window.alert("FILL UP!");
        } else if (isNaN(principalVal) == true && isNaN(rateVal) == true && isNaN(timeVal) == true) {
            window.alert("INVALID ENTRY!");
        } else {
            let simInt = (principalVal * rateVal * timeVal) / 100;
            outputText.innerText = "Rs." + simInt;
            findBtn.classList.add("btn-danger");
            findBtn.setAttribute("value", "Retry");
        }

    }

};