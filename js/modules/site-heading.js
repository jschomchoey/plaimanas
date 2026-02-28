const heading = document.querySelector(".site-heading");
const hero = document.querySelector(".hero");
const nav = document.querySelector("nav");

let maxSize;
let maxSizeMobile;
let scrollRange;

const minSize = 42; // px

const calculateValues = () => {
  maxSize = window.innerWidth * 0.14; // 14vw
  maxSizeMobile = window.innerWidth * 0.135; // 13.5vw
  scrollRange = hero.offsetHeight - nav.offsetHeight;
};

const updateHeading = () => {
  if (window.innerWidth < 480) {
    heading.style.fontSize = `${maxSizeMobile}px`;
    heading.style.lineHeight = `1`;
    return;
  }

  const scroll = Math.min(window.scrollY, scrollRange);
  const progress = scrollRange > 0 ? scroll / scrollRange : 0;
  const size = maxSize - (maxSize - minSize) * progress;
  const lineHeight = 1 + 0.75 * progress;

  heading.style.fontSize = `${size}px`;
  heading.style.lineHeight = `${lineHeight}`;
};

const init = () => {
  calculateValues();
  updateHeading();
};

const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

window.addEventListener("load", init);
window.addEventListener("resize", debounce(init, 150));
window.addEventListener(
  "scroll",
  () => {
    requestAnimationFrame(updateHeading);
  },
  { passive: true },
);
