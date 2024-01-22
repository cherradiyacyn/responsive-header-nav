const navHamburger = document.querySelector(".nav__hamburger");
const navWrapper = document.querySelector(".nav__wrapper");
const navMenu = document.querySelector(".nav__menu");
const navCloser = document.querySelector(".nav__closer");

const mql = window.matchMedia("(min-width: 768px)");

function initMobileFirst() {
  navWrapper.classList.add("hide");
}

const handleNavWrapper = () => {
  navWrapper.classList.toggle("hide");
};

function handleMedia() {
  if (mql.matches) {
    navWrapper.classList.remove("hide");
    navHamburger.removeEventListener("click", handleNavWrapper);
    navMenu.removeEventListener("click", handleNavWrapper);
    navCloser.removeEventListener("click", handleNavWrapper);
  } else {
    navWrapper.classList.add("hide");
    navHamburger.addEventListener("click", handleNavWrapper);
    navMenu.addEventListener("click", handleNavWrapper);
    navCloser.addEventListener("click", handleNavWrapper);
  }
}

mql.addEventListener("change", handleMedia);

initMobileFirst();
handleMedia();
