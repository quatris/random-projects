const display = document.querySelector('.display');
const resultDisplay = document.querySelector('.result-display');
const buttons = document.querySelectorAll('.button');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

let operand1 = '';
let operand2 = '';
let operator = '';

function inputNumber(number) {
    if (!operator) {
      operand1 += number;
      display.value = operand1;
    } else if (!operand2) {
      operand2 += number;
      display.value = operand2;
    }
  }

function inputOperator(op) {
  if (!operator) {
    operator = op;
  } else {
    calculate();
    operand1 = display.value;
    operand2 = '';
    operator = op;
  }
}

function calculate() {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);
  switch (operator) {
    case '+':
      operand1 = (num1 + num2).toString();
      break;
    case '-':
      operand1 = (num1 - num2).toString();
      break;
    case '*':
      operand1 = (num1 * num2).toString();
      break;
    case '/':
      operand1 = (num1 / num2).toString();
      break;
    default:
      break;
  }
  resultDisplay.textContent = operand1;
}

function clear() {
  operand1 = '';
  operand2 = '';
  operator = '';
  display.value = '';
  resultDisplay.textContent = '';
}

function updateDisplay() {
  display.value = operand1 + operator + operand2;
}

// Add click event listeners to all number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    inputNumber(button.textContent);
    updateDisplay();
  });
});

// Add click event listener to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    inputOperator(button.textContent);
    updateDisplay();
  });
});

// Add click event listener to the equal button
equalButton.addEventListener('click', () => {
  calculate();
  updateDisplay();
});

// Add click event listener to the clear button
clearButton.addEventListener('click', () => {
  clear();
  updateDisplay();
});
