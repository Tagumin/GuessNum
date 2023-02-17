const hostNumbers = getRandomNumbers(1, 5, 5); // Generate random host numbers
const form = document.querySelector("form");
const result = document.querySelector("#result");

function getRandomNumbers(min, max, count) {
  // Generate an array of unique random numbers between min and max (inclusive)
  const numbers = [];
  while (numbers.length < count) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}
console.log(hostNumbers);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const guessInput = document.querySelector('input[name="guess"]');
  const playerNumbers = guessInput.value.split(" ").map(Number);
  let points = 0;
  for (let i = 0; i < hostNumbers.length; i++) {
    if (hostNumbers[i] === playerNumbers[i]) {
      points++;
    }
  }

  result.textContent = `You scored ${points * 10} points!`;
  guessInput.value = "";
});
function refreshPage() {
  location.reload();
}
