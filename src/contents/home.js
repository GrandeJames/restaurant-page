import { loadContent } from "../components/loadContent";
import { loadMenu } from ".";

export function loadHome() {
  loadContent(addHome);
  addMenuButtonListener();
}

function addHome() {
  const main = document.querySelector("main");
  main.id = "home-container";

  const h2 = document.createElement("h2");
  h2.id = "headline";
  h2.innerHTML = `Eat.<br>Drink.<br>Love.`;
  main.appendChild(h2);

  const button = document.createElement("button");
  button.textContent = "View menu";
  button.id = "menu-button";
  main.appendChild(button);
}

// Must be loaded each time because it gets removed
function addMenuButtonListener() {
  const menuButton = document.querySelector("#menu-button");
  menuButton.addEventListener("click", loadMenu);
}
