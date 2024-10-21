let startTime;
let updatedTime;
let difference;
let timeInterval;
let savedTime = 0;
let paused = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  startTime = new Date().getTime();
  timeInterval = setInterval(updateTimer, 1000);

  startButton.style.display = "none";
  pauseButton.style.display = "inline";
}

function updateTimer() {
  updatedTime = new Date().getTime();

  console.log("updatedTime--", updatedTime);
  console.log("start time--", startTime);
  console.log("saved time--", savedTime);

  difference = updatedTime - savedTime + savedTime;

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  timerDisplay.textContent =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

// functuonality for formating time
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function pauseTimer() {
  clearInterval(timeInterval);
  savedTime = difference;
  paused = true;
  resumeButton.style.display = "inline";
  pauseButton.style.display = "inline";
  resetButton.style.display = "inline";
}

function resumeTimer() {
  if (paused) {
    startTime = new Date().getTime();
    timeInterval = setInterval(updateTimer, 1000);
    resumeButton.style.display = "inline";
    pauseButton.style.display = "inline";
  }
}

function resetTimer() {
  clearInterval(timeInterval);
  startButton.style.display = "inline";
  pauseButton.style.display = "none";
  resumeButton.style.display = "none";
  timerDisplay.textContent = "00:00:00";
  savedTime = 0;
  paused = false;
}
