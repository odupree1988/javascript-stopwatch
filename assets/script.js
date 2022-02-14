timerEl = document.getElementById("timer");

var seconds = 0;
var miliseconds = 0;

startTimer = () => {
  setInterval(() => {
    if (miliseconds === 99) {
      miliseconds = 0;
      seconds += 1;
    }
    miliseconds += 1;
    timerEl.innerText = seconds + ":" + miliseconds;
  }, 10);
};

startTimer();
