let display = document.getElementById("display");
let trailingResult = 0;
let operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = "";

function updateDisplay(input) {
    if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0."
        } else if (input === "negative-value") {
            if (display.innerHTML.indexOf("-1") === -1) {
                display.innerHTML = "-" + display.innerHTML;
            } else if (display.innerHTML.indexOf("-1" > -1)) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }
        } else {
            display.innerHTML = input;
        }
    } else if (operationOptions.indexOf(input) >= 0) {
        if (trailingResult === display.innerHTML) {
            workingOperation = input;
        } else if (workingOperation === "") {
            workingOperation = input
            trailingResult = display.innerHTML;
            display.innerHTML = 0;
        } else {
            trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
            display.innerHTML = 0;
            workingOperation = input;
        }
    } else if (input === "equals") {
        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = "";
    } else if (input === "decimal") {
        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
        }
    } else if (input === "negative-value") {
        if (display.innerHTML.indexOf("-1") === -1) {
            display.innerHTML = "-" + display.innerHTML;
        } else if (display.innerHTML.indexOf("-1" > -1)) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        }
    } else {
        display.innerHTML += input;
    }
}

function clearDisplay() {
    trailingResult = 0;
    display.innerHTML = 0;
}

function calculate (firstNumber, secondNumber, operation) {
    let result;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operation) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
    }
    return result.toString();
}