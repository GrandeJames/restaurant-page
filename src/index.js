import { addHeader } from "./modules/header.js";
import "./styles.css";

function init() {
  const content = document.querySelector("#content");
  addHeader(content);
}

init();
