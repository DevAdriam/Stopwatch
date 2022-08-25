const stopwatchtag = document.getElementsByClassName("stopwatch")[0];
const startbuttontag = document.getElementsByClassName("startbutton")[0];
const pausebuttontag = document.getElementsByClassName("pausebutton")[0];
const continuebuttontag = document.getElementsByClassName("continuebutton")[0];
const restartbuttontag = document.getElementsByClassName("restartbutton")[0];

let hours = 0;
minutes = 0;
seconds = 0;

const startTime = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  const secondtext = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minutetext = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourtext = hours < 10 ? "0" + hours.toString() : hours;
  stopwatchtag.textContent = hourtext + ":" + minutetext + ":" + secondtext;
};

let intervalId;
let clicked = false;
startbuttontag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
  startbuttontag.classList.toggle("afterclick");
  if (clicked !== true) {
    pausebuttontag.classList.remove("afterclick");
    continuebuttontag.classList.remove("afterclick");
    restartbuttontag.classList.remove("afterclick");
  }
});

pausebuttontag.addEventListener("click", () => {
  clearInterval(intervalId);
  pausebuttontag.classList.toggle("afterclick");
  if (clicked !== true) {
    startbuttontag.classList.remove("afterclick");
    continuebuttontag.classList.remove("afterclick");
    restartbuttontag.classList.remove("afterclick");
  }
});

continuebuttontag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
  continuebuttontag.classList.toggle("afterclick");
  if (clicked !== true) {
    startbuttontag.classList.remove("afterclick");
    pausebuttontag.classList.remove("afterclick");
    restartbuttontag.classList.remove("afterclick");
  }
});
restartbuttontag.addEventListener("click", () => {
  clearInterval(intervalId);
  (hours = 0), (minutes = 0), (seconds = 0);
  intervalId = setInterval(startTime, 1000);
  restartbuttontag.classList.toggle("afterclick");
  if (clicked !== true) {
    startbuttontag.classList.remove("afterclick");
    continuebuttontag.classList.remove("afterclick");
    pausebuttontag.classList.remove("afterclick");
  }
});

function resetbutton(buttontag) {
  if (clicked !== true) {
    startbuttontag.classList.remove("afterclick");
    pausebuttontag.classList.remove("afterclick");
    restartbuttontag.classList.remove("afterclick");
  }
}
