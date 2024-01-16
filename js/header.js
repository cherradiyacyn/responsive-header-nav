// const name = document.querySelector(".BEM");
const headerHamburger = document.querySelector(".header__hamburger");
const headerMenu = document.querySelector(".header__menu");
const menuContainer = document.querySelector(".menu__container");
const menuCloser = document.querySelector(".menu__closer");

// const handlerName = () => {};
const handleHeaderMenu = () => {
  headerMenu.classList.toggle("hidden");
};

// name.addEventListener("click", handlerName);
headerHamburger.addEventListener("click", handleHeaderMenu);
menuContainer.addEventListener("click", handleHeaderMenu);
menuCloser.addEventListener("click", handleHeaderMenu);
