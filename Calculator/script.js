


// Function to append a character to the display
function appendCharacter(character) {
  const display = document.getElementById("display");
  display.textContent += character;
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById("display");
  display.textContent = "";
}

// Function to delete the last character in the display
function deleteLast() {
  const display = document.getElementById("display");
  display.textContent = display.textContent.slice(0, -1);
}

// Function to calculate the result of the expression in the display
function calculateResult() {
  const display = document.getElementById("display");
  const expression = display.textContent;
  const result = evaluateExpression(expression);
  display.textContent = result;
}

// User-defined function to evaluate the expression
function evaluateExpression(expression) {
  try {
      const result = new Function('return ' + expression)();
      return result;
  } catch {
      return "Error";
  }
}
