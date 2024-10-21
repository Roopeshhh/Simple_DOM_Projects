const player0E1 = document.querySelector(".player--0");
const player1E1 = document.querySelector(".player--1");
const score0E1 = document.querySelector("#score--0");
const score1E1 = document.querySelector("#score--1");
const current0E1 = document.querySelector("#current--0");
const current1E1 = document.querySelector("#current--1");

const diceE1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let score, currentScore, activePlayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;

  diceE1.classList.add("hidden");
  player0E1.classList.remove("player-winner");
  player1E1.classList.remove("player-winner");

  player0E1.classList.add("player-active");
  player1E1.classList.remove("player-active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0E1.classList.toggle("player--active");
  player1E1.classList.toggle("player--active");

  /*   document.player0E1.style.background = "none";
  document.player1E1.style.background = "none"; */
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generating random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceE1.classList.remove("hidden");
    diceE1.src = `dice-${dice}.png`;

    // check for rolled
    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to active palyer
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //   check if player score is >=100
    if (score[activePlayer] >= 10) {
      playing = false;
      diceE1.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
