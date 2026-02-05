const button = document.getElementById("menu-button");
const menu = document.getElementById("menu");

button?.addEventListener("click", (e) => {
  const isActive = e.currentTarget.getAttribute("aria-expanded");
  if (isActive === "true") {
    e.currentTarget.setAttribute("aria-expanded", "false");
  } else {
    e.currentTarget.setAttribute("aria-expanded", "true");
  }
});
