const tabButtons = document.querySelectorAll(".tabs__button");
const tabContents = document.querySelectorAll(".tabs__content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    tabButtons.forEach((btn) => btn.classList.remove("tabs__button--active"));
    tabContents.forEach((content) =>
      content.classList.remove("tabs__content--active"),
    );

    button.classList.add("tabs__button--active");
    document.getElementById(targetTab).classList.add("tabs__content--active");
  });
});
