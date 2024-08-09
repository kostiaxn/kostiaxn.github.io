const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

document.addEventListener("DOMContentLoaded", (event) => {
  let containers = document.querySelectorAll(".in_progress");
  let text = "In progress...";

  containers.forEach((cont) => {
    let p = 0;

    function printSmbl() {
      let timeout = Math.round(Math.random() * 200);
      cont.innerHTML = cont.innerHTML + text[p];
      p++;
      if (p < text.length) {
        setTimeout(printSmbl, timeout);
      }
    }

    setTimeout(printSmbl, 100);
  });
});

window.addEventListener("scroll", function () {
  const aside = document.querySelector("aside");
  const sectionBlack = document.querySelector(".promo");
  const sectionWhite = document.querySelector(".about");

  const sectionBlackTop = sectionBlack.getBoundingClientRect().top;
  const sectionWhiteTop = sectionWhite.getBoundingClientRect().top;

  if (sectionBlackTop <= 0 && sectionWhiteTop > 0) {
    aside.classList.remove("sidepanel_dark");
    aside.classList.add("sidepanel");
  } else if (sectionWhiteTop <= 0) {
    aside.classList.add("sidepanel_dark");
  }
});
