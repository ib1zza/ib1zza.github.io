import anime from "./anime.js";

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      console.log(
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")"
      );
    }
  }
  console.log("ibg");
}

ibg();

const reactLogoEl = document.querySelector(".header__logo");
const reactLogo = [...document.querySelectorAll(".react")];
const reactLogo1 = document.querySelector(".react");

console.log(reactLogo1);

const loopRotate = anime({
  targets: reactLogo,
  loop: true,
  duration: 4000,
  rotate: "1turn",
  easing: "linear",
});

loopRotate.start;

const h = (el) => {
  loopRotate.reverse();
};

const l = (el) => {
  loopRotate.reverse();
};

// animation.seek(animation.duration);

let scroll = scrollY;

const setScroll = (n) => (scroll = n);

reactLogoEl.addEventListener("mouseover", () => h(reactLogo));
reactLogoEl.addEventListener("mouseleave", () => l(reactLogo));

const animateElements = document.querySelectorAll(".anim")[0];

let mas = [];

for (let i = 0; i < animateElements.length; i++) {
  mas[i] = animateElements[i].getBoundingClientRect().top + window.scrollY;
}

window.addEventListener("scroll", function () {
  setScroll(scrollY + "px");
  console.log(scroll);
  if (parseInt(scroll) > 1200) {
    console.log("true");
    showF();
  } else {
    hideF();
  }
});

if (parseInt(scroll) > 1700) {
  console.log("true");
}

const showF = () =>
  anime({
    targets: animateElements,
    translateX: 0,
    easing: "linear",
  });

const hideF = () =>
  anime({
    targets: animateElements,
    translateX: -250,
    easing: "linear",
  });

const burgerTogglerLink = document.querySelector(".header__burger__button");
const burgerEl = document.querySelector(".header__burger");
const burgerBg = document.querySelector(".header__burger__overlay");

const toggleBurgerMenu = () => {
  if (burgerEl.classList.contains("header__burger_active")) {
    burgerEl.classList.add("header__burger");
    burgerEl.classList.remove("header__burger_active");
  } else {
    burgerEl.classList.add("header__burger_active");
    burgerEl.classList.remove("header__burger");
  }
};

burgerBg.addEventListener("click", toggleBurgerMenu);
burgerTogglerLink.addEventListener("click", toggleBurgerMenu);

const arrowTextEl = document.querySelector(".arrow");
const arrowEl = arrowTextEl.childNodes[1];
console.log(arrowEl);

const arrowAnime = (x) => {
  anime({
    targets: arrowEl,
    translateX: x,
  });
  console.log("animetion");
};

arrowTextEl.addEventListener("mouseenter", () => arrowAnime(10));
arrowTextEl.addEventListener("mouseleave", () => arrowAnime(0));
