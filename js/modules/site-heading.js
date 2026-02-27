const navbar = document.querySelector("nav");
const mainContent = document.querySelector(".main-content");
const siteHeading = document.querySelector(".site-heading");

// const minSize = 42;

const updateNavbarHeight = () => {
  const navbarHeight = navbar.offsetHeight;
  mainContent.style.marginTop = `${navbarHeight}px`;
  // siteHeading.style.fontSize = `${navbarHeight / 2}px`;
};

window.addEventListener("load", updateNavbarHeight);
window.addEventListener("resize", updateNavbarHeight);
