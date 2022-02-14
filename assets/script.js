let timerEl = document.getElementById("timer");
let startStopContainerEl = document.getElementById("start-stop-container");
let resetContainerEl = document.getElementById("reset-container");

var seconds = 0;
var miliseconds = 0;

let display = () => {
  startEl = document.createElement("button");
  startEl.className = "btn btn-success";
  startEl.setAttribute("id", "start");

  startIconEl = document.createElement("i");
  startIconEl.className = "bi bi-play-fill";
  startIconEl.style.fontSize = "2rem";

  startEl.append(startIconEl);
  startStopContainerEl.append(startEl);

  startEl.addEventListener("click", () => {
    time = setInterval(() => {
      if (miliseconds === 99) {
        miliseconds = 0;
        seconds += 1;
      } else {
        miliseconds += 1;
      }
      timerEl.innerText = seconds + ":" + miliseconds;
    }, 10);
    startEl.remove();
    changeIcon();
    resetBtn();
  });

  let changeIcon = () => {
    pauseEl = document.createElement("button");
    pauseEl.className = "btn btn-success";
    pauseEl.setAttribute("id", "stop");

    pauseIconEl = document.createElement("i");
    pauseIconEl.className = "bi bi-pause-fill";
    pauseIconEl.style.fontSize = "2rem";

    pauseEl.append(pauseIconEl);
    startStopContainerEl.append(pauseEl);

    document.getElementById("stop").addEventListener("click", () => {
      clearInterval(time);
      pauseEl.remove();
      resetEl.remove();
      display();
    });
  };

  let resetBtn = () => {
    resetEl = document.createElement("button");
    resetEl.className = "btn btn-danger";
    resetEl.setAttribute("id", "reset");

    resetIconEl = document.createElement("i");
    resetIconEl.className = "bi bi-arrow-repeat";
    resetIconEl.style.fontSize = "2rem";

    resetEl.append(resetIconEl);
    resetContainerEl.append(resetEl);

    document.getElementById("reset").addEventListener("click", () => {
      clearInterval(time);
      seconds = 0;
      miliseconds = 0;
      timerEl.innerText = seconds + "0:0" + miliseconds;
      resetEl.remove();
      pauseEl.remove();
      display();
    });
  };
};

display();
