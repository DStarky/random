// Get input elements
const minInput = document.querySelector("#min-value");
const maxInput = document.querySelector("#max-value");

// Get button element
const generateButton = document.querySelector("#generate-button");

// Get result element
const result = document.querySelector("#result");

generateButton.addEventListener("click", () => {
  generateNumber(200);
});

function generateNumber(duration) {
  if (minInput.value && maxInput.value) {
    const minNumber = parseInt(minInput.value); // Parse the input value as integer
    const maxNumber = parseInt(maxInput.value); // Parse the input value as integer

    const startTime = Date.now();
    const intervalId = setInterval(() => {
      // Execute the desired function every 10 milliseconds
      result.textContent =
        Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      // Checking if the specified time has already passed
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        clearInterval(intervalId);
      }
    }, 10);
  } else {
    result.textContent = "You have not entered any input";
  }
}
