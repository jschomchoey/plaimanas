const navbar = document.querySelector("nav");
const mainContent = document.querySelector(".main-content");

const updateNavbarHeight = () => {
  const navbarHeight = navbar.offsetHeight;
  mainContent.style.marginTop = `${navbarHeight}px`;
};

window.addEventListener("load", updateNavbarHeight);
window.addEventListener("resize", updateNavbarHeight);
