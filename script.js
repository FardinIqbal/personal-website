/**
 * Toggles the hamburger menu open and closed.
 * This function adds/removes the "open" class to both the menu and the hamburger icon.
 */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
