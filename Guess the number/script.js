let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
console.log(secreatNumber);
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("Please enter a number");
  } else if (guess === secreatNumber) {
    displayMessage("You Guessed Correct number");
    document.querySelector(".number").textContent = secreatNumber;
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;
  } else if (guess != secreatNumber) {
    if (score > 1) {
      displayMessage(guess > secreatNumber ? "Too High!" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreatNumber);
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").disabled = false;
});
