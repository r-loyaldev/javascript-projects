let starttime = 0,
  elapsedtime = 0,
  currenttime = 0,
  running = false,
  timer = null,
  displaytime = document.querySelector(".display");

function start() {
  if (!running) {
    starttime = Date.now() - elapsedtime;
    running = true;
    timer = setInterval(update, 10);
    running = true;
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  elapsedtime = 0;
  displaytime.innerHTML = "00:00:00:00";
  starttime = Date.now();
  currenttime = starttime;
  elapsedtime = currenttime - starttime;
  running = false;
}

function stop() {
  if (running) {
    clearInterval(timer);
    running = false;
  }
}

function update() {
  currenttime = Date.now();
  elapsedtime = currenttime - starttime;
  let hours = Math.floor(elapsedtime / 3600000);
  let minutes = Math.floor((elapsedtime / 60000) % 60);
  let seconds = Math.floor((elapsedtime / 1000) % 60);
  let milliseconds = Math.floor((elapsedtime % 1000) / 10);
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  milliseconds = (milliseconds < 10 ? "0" : "") + milliseconds;
  displaytime.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
