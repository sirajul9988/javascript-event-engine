const log = document.getElementById("log");
let running = false;

document.getElementById("startBtn").addEventListener("click", () => {
  running = true;
  log.innerText = "Event engine started";
});

document.getElementById("stopBtn").addEventListener("click", () => {
  running = false;
  log.innerText = "Event engine stopped";
});

document.addEventListener("keydown", (event) => {
  if (running) {
    log.innerText = `Key pressed: ${event.key}`;
  }
});
