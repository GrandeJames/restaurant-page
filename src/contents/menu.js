import { loadContent } from "../components/loadContent.js";
import { addHeading } from "../components/content-heading.js";

export function loadMenu() {
  loadContent(addMenu);
}

function addMenu(parentElement) {
  const main = document.querySelector("main");
  main.id = "menu-container";

  addHeading(main, "Our Menu");
  addDinnerSection(main);
}

function addDinnerSection(parentElement) {
  /*
    Section (id=food-section flex: column) GOOD TODO: fix styling later if needed
        h3 Dinner GOOD TODO: change color maybe
        <div class="food-info"> (flex: spacebetween) GOOD
            <p>Steak</p>
            <p>14.95</p>
        </div>
    */

  const section = document.createElement("section");

  section.id = "food-section";

  const h3 = document.createElement("h3");
  h3.textContent = "Dinner";
  section.appendChild(h3);

  addFoodInfo(section, "Steak", "$14.95");
  addFoodInfo(section, "Chicken", "$11.95");

  parentElement.appendChild(section);
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
