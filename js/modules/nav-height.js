const navbar = document.querySelector("nav");
const mainContent = document.querySelector(".main-content");

const updateNavbarHeight = () => {
  const navbarHeight = navbar.offsetHeight;
  mainContent.style.marginTop = `${navbarHeight}px`;
};

const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

window.addEventListener("load", updateNavbarHeight);
window.addEventListener("resize", debounce(updateNavbarHeight, 150));
