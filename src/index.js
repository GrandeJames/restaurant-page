import "./styles.css";
import * as contents from "./contents/index.js";
import { loadDashboard } from "./dashboard/dashboard.js";

init();

function init() {
  loadDashboard();
  addContactListener();
}

function addContactListener() {
  const contactLink = document.querySelector("#contact-link");
  contactLink.addEventListener("click", () => contents.loadContact());
}
