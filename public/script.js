const button = document.getElementById("menu-button");
const menu = document.getElementById("menu");

button?.addEventListener("click", () => {
  const isActive = menu.getAttribute("aria-expanded");
  if (isActive === "true") {
    menu.setAttribute("aria-expanded", false);
  } else {
    menu.setAttribute("aria-expanded", true);
  }
});
