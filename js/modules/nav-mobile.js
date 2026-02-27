const hamburger = document.querySelector(".navbar__image--menu");
const closeBtn = document.querySelector(".navbar__image--close-menu");
const mobileNav = document.querySelector(".navbar-mobile");

hamburger.addEventListener("click", () => {
  mobileNav.style.display = "flex";
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

const mobileSubmenuLinks = document.querySelectorAll(
  ".navbar-mobile__link--has-submenu",
);

mobileSubmenuLinks.forEach((item) => {
  const link = item.querySelector(".navbar-mobile__link--item");
  const submenu = item.querySelector(".navbar-mobile__submenu");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.classList.toggle("navbar-mobile__link--item--open");
    submenu.classList.toggle("navbar-mobile__submenu--open");
  });
});
