import "./styles.css";
import * as contents from "./contents/index.js";
import { loadDashboard } from "./dashboard/dashboard.js";

init();

function init() {
  loadDashboard();
  loadListeners();
}

function loadListeners() {
  addContactListener();
  addHomeListener();
  addMenuListener();
}

function addContactListener() {
  addClickListener("#contact-link", () => contents.loadContact());
}

function addMenuListener() {
  addClickListener("#menu-link", () => contents.loadMenu());
  addClickListener("#menu-button", () => contents.loadMenu());
}

function addHomeListener() {
  addClickListener("#home-link", () => contents.loadHome());
}

function addClickListener(selector, loader) {
  const element = document.querySelector(selector);
  element.addEventListener("click", loader);
}
