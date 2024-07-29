let counter = 0;
const counterDisplay = document.getElementById("counter");

function updateCounter() {
  counterDisplay.innerHTML = counter;
}

const decreaseButton = document.getElementById("decrease");
decreaseButton.addEventListener("click", function () {
  counter--;
  updateCounter();
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  counter = 0;
  updateCounter();
});

const increaseButton = document.getElementById("increase");
increaseButton.addEventListener("click", function () {
  counter++;
  updateCounter();
});
