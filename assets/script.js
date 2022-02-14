let timerEl = document.getElementById("timer");
let startStopContainerEl = document.getElementById("start-stop-container");
let resetContainerEl = document.getElementById("reset-container");
let savedTimeEl = document.getElementById("saved-time");

let newTimeCheck = true;
let seconds = 0;
let miliseconds = 0;

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
    resetContainerEl.innerHTML = "";
    resetBtn();
    saveTime();
  });
};

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
    saveBtnEl.remove();
    display();
  });
};

let resetBtn = () => {
  resetEl = document.createElement("button");
  resetEl.className = "btn btn-secondary m-1";
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
    startEl.remove();
    resetEl.remove();
    pauseEl.remove();
    saveBtnEl.remove();
    savedTimeEl.innerHTML = "";
    display();
  });
};

let saveTime = () => {
  let savedNum = 0;

  saveBtnEl = document.createElement("button");
  saveBtnEl.className = "btn btn-secondary m-1";
  saveBtnEl.setAttribute("id", "save");

  saveBtnIconEl = document.createElement("i");
  saveBtnIconEl.className = "bi bi-stopwatch";
  saveBtnIconEl.style.fontSize = "2rem";

  saveBtnEl.append(saveBtnIconEl);
  resetContainerEl.append(saveBtnEl);

  saveBtnEl.addEventListener("click", () => {
    if (newTimeCheck === false) {
      clearInterval(newTime);
    }
    newTimeCheck = false;

    pEl = document.createElement("p");
    newSeconds = 0;
    newMiliseconds = 0;
    savedNum++;

    savedTimeEl.append(pEl);

    newTime = setInterval(() => {
      if (newMiliseconds === 99) {
        newMiliseconds = 0;
        newSeconds += 1;
      } else {
        newMiliseconds += 1;
      }
      pEl.innerHTML = `
      #${savedNum}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ${newSeconds}:${newMiliseconds}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      ${seconds}:${miliseconds}
      `;
    }, 10);
  });
};

display();
