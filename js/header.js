// const name = document.querySelector(".BEM");
const navHamburger = document.querySelector(".nav__hamburger");
const navInnerWrapper = document.querySelector(".nav__inner-wrapper");
const navMenu = document.querySelector(".nav__menu");
const navCloser = document.querySelector(".nav__closer");

// const handlerName = () => {};
const handlenavInnerWrapper = () => {
  navInnerWrapper.classList.toggle("hidden");
  // alert("FIX IT LATER : this should not work in desktop version!");
};

// name.addEventListener("click", handlerName);
navHamburger.addEventListener("click", handlenavInnerWrapper);
navMenu.addEventListener("click", handlenavInnerWrapper);
navCloser.addEventListener("click", handlenavInnerWrapper);
