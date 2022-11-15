window.onscroll = function showHeader() {
  let header = document.querySelector(".header");
  let upBtn = document.querySelector(".up-button");

  if (window.pageYOffset > 0) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }

  if (window.pageYOffset > 900) {
    upBtn.classList.add("class_opacity");
  } else {
    upBtn.classList.remove("class_opacity");
  }
};

// sliders
//=========================================================
const slides = document.querySelectorAll(".slide");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const pre = (ind) => {
  activeSlide(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    pre(index);
  } else {
    index++;
    pre(index);
  }
};

setInterval(nextSlide, 7000);
// text
// ========================================================

let typed = new Typed(".typed", {
  typeSpeed: 175,
  backSpeed: 50,
  loop: true,
  stringsElement: ".typed-strings",
});

// up - btn

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.documentElement.setAttribute("style", "scroll-behavior: smooth;");
