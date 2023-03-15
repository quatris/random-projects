window.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const resultDisplay = document.querySelector(".result-display");
  const buttons = document.querySelectorAll(".button");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  const decimalButton = document.querySelector(".decimal");
  const equalButton = document.querySelector(".equal");
  const clearButton = document.querySelector(".clear");
  const deleteButton = document.querySelector(".delete");

  let operand1 = "";
  let operand2 = "";
  let operator = "";
  let decimalClicked = false;

  const inputNumber = (number) => {
    if (!operator) {
      operand1 += number;
      display.value = operand1;
    } else {
      operand2 += number;
      display.value = operand2;
    }
  };

  const inputDecimal = () => {
    if (!operator) {
      if (operand1.indexOf(".") === -1) {
        operand1 += ".";
        decimalClicked = true;
      }
    } else {
      if (operand2.indexOf(".") === -1) {
        operand2 += ".";
        decimalClicked = true;
      }
    }

    // Disable the decimal button if it has already been clicked
    if (decimalClicked) {
      decimalButton.disabled = true;
    }

    display.value = operand1 + operator + operand2;
  };

  const inputOperator = (op) => {
    if (!operator) {
      operator = op;
    } else {
      calculate();
      operator = op;
      operand1 = resultDisplay.textContent;
      operand2 = "";
    }
    // Enable the decimal button when an operator is clicked
    decimalClicked = false;
    decimalButton.disabled = false;
  };

  const calculate = () => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          resultDisplay.textContent = "Error: Division by zero";
          operand1 = "";
          operand2 = "";
          operator = "";
          display.value = "";
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = num1; // Set result to zero if the operator is not recognized
        break;
    }
    operand1 = result.toFixed(2);
    operand2 = "";
    operator = "";
    resultDisplay.textContent = operand1;
    // Enable the decimal button after calculation is done
    decimalClicked = false;
    decimalButton.disabled = false;
  };

  function clearCalculation() {
    operand1 = "";
    operand2 = "";
    operator = "";
    display.value = "";
    resultDisplay.textContent = "";
    decimalClicked = false;
    decimalButton.disabled = false;
  }

  function deleteLastDigit() {
    if (!operator) {
      operand1 = operand1.slice(0, -1);
      display.value = operand1;
    } else {
      operand2 = operand2.slice(0, -1);
      display.value = operand2;
    }
    if (!operand1) {
      operand1 = "0";
    }
    if (!operand2) {
      operand2 = "0";
    }
  }

  function updateDisplay() {
    if (operator) {
      display.value = operand1 + " " + operator + " " + operand2;
    } else {
      display.value = operand1;
    }
  }

  // Add click event listeners to all number buttons
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inputNumber(button.textContent);
      updateDisplay();
    });
  });

  // Add click event listener to the operator buttons

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inputOperator(button.textContent);
      updateDisplay();
    });
  });

  // Add click event listener to the decimal button

  decimalButton.addEventListener("click", () => {
    inputDecimal();
  });

  // Add click event listener to the equal button

  equalButton.addEventListener("click", () => {
    calculate();
    updateDisplay();
  });

  // Add click event listener to the clear button

  clearButton.addEventListener("click", () => {
    clearCalculation();
    updateDisplay();
  });

  // Add click event listener to the delete button

  deleteButton.addEventListener("click", () => {
    deleteLastDigit();
    updateDisplay();
  });

  // Add keyboard support for deleting last digit
  window.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      deleteLastDigit();
      updateDisplay();
    }
  });

  // Add focus and blur styles to all buttons when clicked or pressed
  buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.classList.add("active");
    });
    button.addEventListener("mouseup", () => {
      button.classList.remove("active");
    });
    button.addEventListener("touchstart", () => {
      button.classList.add("active");
    });
    button.addEventListener("touchend", () => {
      button.classList.remove("active");
    });
  });

  // Add focus to display when the page is loaded
  display.focus();

  // Remove focus from display when any button is clicked
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      display.blur();
    });
  });
});
