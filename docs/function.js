const button = document.getElementById("button");
const upperpart = document.querySelector(".upperpart");
const letter = document.querySelector(".letter");
button.addEventListener("click", () => {
  console.log("Button clicked");
  upperpart.classList.remove("upperpart");
  upperpart.classList.add("transform");
  setTimeout(() => {
    letter.classList.remove("hidden");
  }, 1500);
  letter.classList.add("moveup");
  button.classList.add("hidden");
});
