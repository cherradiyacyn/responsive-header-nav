const header__hamburger = document.querySelector(".header__hamburger");
const header__menu = document.querySelector(".header__menu");
const menu__container = document.querySelector(".menu__container");
const menu__closer = document.querySelector(".menu__closer");

// handle__ = () => {};
handle__header__menu = () => {
  header__menu.classList.toggle("hidden");
};

// .addEventListener("click", handle__);
header__hamburger.addEventListener("click", handle__header__menu);
menu__container.addEventListener("click", handle__header__menu);
menu__closer.addEventListener("click", handle__header__menu);
