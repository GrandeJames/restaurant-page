import { loadContent } from "../components/loadContent.js";
import { addHeading } from "../components/addHeading.js";

export function loadMenu() {
  loadContent(addMenu);
}

function addMenu(parentElement) {
  const main = document.querySelector("main");
  main.id = "menu-container";

  addHeading(main, "Our Menu");
  addAppetizerSection(main);
  addEntreeSection(main);
}

function addAppetizerSection(parentElement) {
  const section = document.createElement("section");

  section.className = "food-section";

  addSectionHeading(section, "Appetizer");

  addFoodInfo(section, "Gyoza", "$4.95");
  addFoodInfo(section, "Calamari", "$6.95");
  addFoodInfo(section, "Shrimp Tampura", "$6.95");

  parentElement.appendChild(section);
}

function addEntreeSection(parentElement) {
  const section = document.createElement("section");

  section.className = "food-section";

  addSectionHeading(section, "Entree");

  addFoodInfo(section, "Steak", "$14.95");
  addFoodInfo(section, "Chicken", "$11.95");
  addFoodInfo(section, "Fish", "$14.95");

  parentElement.appendChild(section);
}

function addSectionHeading(section, textContent) {
  const h3 = document.createElement("h3");
  h3.textContent = textContent;
  section.appendChild(h3);
}

function addFoodInfo(parentElement, foodName, foodPrice) {
  const div = document.createElement("div");

  div.className = "food-info";

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p1.textContent = foodName;
  p2.textContent = foodPrice;

  div.appendChild(p1);
  div.appendChild(p2);

  parentElement.appendChild(div);
}
