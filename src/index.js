import { addHeader } from "./modules/header.js";
import { addHome } from "./modules/home.js";
import "./styles.css";

function init() {
  const content = document.querySelector("#content");
  addHeader(content);

  const main = document.createElement("main");
  addHome(main);
  content.appendChild(main);
}

init();
