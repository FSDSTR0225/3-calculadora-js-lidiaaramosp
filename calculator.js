let currentInput = "";
let previousInput = "";
let operation = null;
let isResultDisplayed = false;

function appendNumber(number) {
  if (isResultDisplayed) {
    currentInput = "";
    isResultDisplayed = false;
  }
  if (currentInput === "0" && number === "0") return;
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "" && !isResultDisplayed) calculate();
  operation = op;
  previousInput = currentInput;
  currentInput = "";
  isResultDisplayed = false;
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "x":
      result = prev * curr;
      break;
    case "÷":
      result = curr !== 0 ? prev / curr : "Error";
      break;
    default:
      return;
  }

  currentInput = result;
  operation = null;
  previousInput = "";
  isResultDisplayed = true;
  updateDisplay();
}

function updateDisplay() {
  let displayValue = previousInput;
  if (operation != null) displayValue += " " + operation;
  if (currentInput !== "") displayValue += " " + currentInput;
  document.getElementById("display").innerText = displayValue || "0";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operation = null;
  isResultDisplayed = false;
  updateDisplay();
}
