import { loadContent } from "../components/loadContent.js";

export function loadMenu() {
  loadContent(addMenu);
}

function addMenu(parentElement) {
  console.log("test");
}
