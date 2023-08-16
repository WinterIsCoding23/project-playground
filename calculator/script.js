const calculatorDisplay = document.querySelector("h1");
// inputsBtns -> array of all buttons
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  // if current display value is 0, replace it, if not add number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
}

function addDecimal() {
  // if no decimal, add one
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

// Add event-listeners for numbers, operators, decimal button
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", function () {
      sendNumberValue(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", function () {
      sendNumberValue(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", function () {
      addDecimal();
    });
  }
});

// Reset Display
function resetAll() {
  calculatorDisplay.textContent = "0";
}

// Event Listener
clearBtn.addEventListener("click", resetAll);
