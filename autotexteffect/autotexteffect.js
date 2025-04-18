const textEl = document.querySelector(".text");
const speedEl = document.querySelector("#speed");
let idx = 1;
let speed = 300 / speedEl.value;
const text = prompt("Please enter your statement");
writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
