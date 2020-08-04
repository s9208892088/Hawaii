const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) {
    header.classList.remove("dynamicHeader");
  } else {
    header.classList.add("dynamicHeader");
  }
});
