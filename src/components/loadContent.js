import { removeChildElements } from "./reset.js";

export function loadContent(addContent) {
  const main = document.querySelector("main");

  removeChildElements(main);
  addContent(main);
}
