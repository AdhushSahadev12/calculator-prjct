let display = document.getElementById("display");
let currentInput = "";
let shouldResetDisplay = false;

function appendNumber(number) {
  if (shouldResetDisplay) {
    clearDisplay();
    shouldResetDisplay = false;
  }
  if (currentInput.length < 10) {
    currentInput += number.toString();
    updateDisplay();
  }
}

function appendOperator(operator) {
  if (currentInput === "" && operator !== "-") return;
  if (shouldResetDisplay) {
    shouldResetDisplay = false;
  }
  currentInput += operator;
  updateDisplay();
}

function calculateResult() {
  if (currentInput === "") return;
  
  try {
    currentInput = eval(currentInput).toString();  // Corrected function
    updateDisplay();
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
  shouldResetDisplay = true;
}

function performSquare() {
  if (currentInput === "") return;
  let result = parseFloat(currentInput) ** 2;
  currentInput = result.toString();
  updateDisplay();
}

function performSquareRoot() {
  if (currentInput === "") return;
  let result = Math.sqrt(parseFloat(currentInput));
  currentInput = result.toString();
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}
