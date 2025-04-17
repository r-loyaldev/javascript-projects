let slides = document.querySelectorAll(".slide ");
let slideindex = 0;
let intervalid = null;
document.addEventListener("DOMContentLoaded", initialize);
function initialize() {
  if (slides.length > 0) {
    slides[slideindex].classList.add("displayslide");
    intervalid = setInterval(nextslide, 5000);
  }
}
function showslide(index) {
  if (index >= slides.length) {
    slideindex = 0;
  } else if (index < 0) {
    slideindex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displayslide");
  });
  slides[slideindex].classList.add("displayslide");
}
function nextslide() {
  slideindex++;
  clearInterval(intervalid);
  showslide(slideindex);
}
function prevslide() {
  slideindex--;
  showslide(slideindex);
}
