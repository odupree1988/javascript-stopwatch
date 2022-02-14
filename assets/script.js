timerEl = document.getElementById("timer");

var seconds = 0;
var miliseconds = 0;

let display = () => {
  document.getElementById("start").addEventListener("click", () => {
    t = setInterval(() => {
      if (miliseconds === 99) {
        miliseconds = 0;
        seconds += 1;
      } else {
        miliseconds += 1;
      }
      timerEl.innerText = seconds + ":" + miliseconds;
    }, 0);
  });

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(t);
  });

  document.getElementById("reset").addEventListener("click", () => {
    seconds = 0;
    miliseconds = 0;
    timerEl.innerText = seconds + "0:0" + miliseconds;
  });
};

display();
