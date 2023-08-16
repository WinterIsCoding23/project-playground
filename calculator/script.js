const calculatorDisplay = document.querySelector("h1");
// inputsBtns -> array of all buttons
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  console.log(number);
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
      sendNumberValue();
    });
  }
});
