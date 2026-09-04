const output = document.querySelector(".output");

let startTime = null;
let timerId = null;

function startTimer() {
  startTime = Date.now();
  timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentTime = Date.now();
  const secondDate = new Date();
  secondDate.setHours(23, 59, 59, 0);
  const deltaTime = secondDate - currentTime;

  renderTime(deltaTime);
  // console.log(secondDate, deltaTime);
}

function renderTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);

  output.textContent = `${String(h).padStart(2, "0")} : ${String(m).padStart(
    2,
    "0"
  )} : ${String(s).padStart(2, "0")}`;
}

startTimer();
