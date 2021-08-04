import { loadContent } from "../components/loadContent";
import { addMenuButtonListener } from "../index.js";

export function loadHome() {
  loadContent(addHome);
  addMenuButtonListener();
}

function addHome() {
  const main = document.querySelector("main");
  main.id = "home-container";

  addHeading(main);
  addButton(main);
}

function addHeading(parentElement) {
  const h2 = document.createElement("h2");
  h2.id = "headline";
  h2.innerHTML = `Eat.<br>Drink.<br>Love.`;
  parentElement.appendChild(h2);
}

function addButton(parentElement) {
  const button = document.createElement("button");
  button.textContent = "View menu";
  button.id = "menu-button";
  parentElement.appendChild(button);
}
