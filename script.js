let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let firstOperand = "";

function appendNumber(number) {
  if (currentInput.length < 10) {
    currentInput += number.toString();
    updateDisplay();
  }
}

function appendOperator(operator) {
  if (currentInput === "" && operator !== "-") return;
  if (firstOperand !== "") calculateResult();
  firstOperand = currentInput;
  currentOperator = operator;
  currentInput = "";
}

function calculateResult() {
  if (firstOperand === "" || currentInput === "") return;
  let result;
  switch (currentOperator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(currentInput);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(currentInput);
      break;
    case "%":
      result = parseFloat(firstOperand) % parseFloat(currentInput);
      break;
  }
  currentInput = result.toString();
  firstOperand = "";
  currentOperator = "";
  updateDisplay();
}

function performSquare() {
  if (currentInput === "") return;
  let result = parseFloat(currentInput) ** 2;
  currentInput = result.toString();
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  firstOperand = "";
  currentOperator = "";
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}
