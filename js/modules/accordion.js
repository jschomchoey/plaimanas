const accordionItems = document.querySelectorAll(".accordion__item");
// console.log("test");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion__header");
  const content = item.querySelector(".accordion__content");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("accordion__item--open");

    // Close all items
    accordionItems.forEach((i) => i.classList.remove("accordion__item--open"));

    // Toggle the clicked item
    if (!isOpen) {
      item.classList.add("accordion__item--open");
    }
  });
});
