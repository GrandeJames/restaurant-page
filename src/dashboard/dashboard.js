import { addHeader } from "../layouts/header.js";
import { loadHome } from "../contents/home.js";

export function loadDashboard() {
  const content = document.querySelector("#content");

  const main = document.createElement("main");

  addHeader(content);

  content.appendChild(main);

  loadHome();
}
