import { loadContent } from "../components/loadContent.js";
import { addHeading } from "../components/addHeading.js";

export function loadContact() {
  loadContent(addContact);
}

function addContact() {
  const main = document.querySelector("main");
  main.id = "contact-container";

  addHeading(main, "Contact Us");
  addContactSection(main);
  addAvailableTimesSection(main);
}

function addContactSection(parentElement) {
  const section = document.createElement("section");

  section.id = "contact-section";

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p1.textContent = "Phone: 123-456-7890";
  p2.textContent = "Email: name@example.com";

  section.appendChild(p1);
  section.appendChild(p2);

  parentElement.appendChild(section);
}

function addAvailableTimesSection(parentElement) {
  const section = document.createElement("section");
  section.id = "available-times-section";

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");

  p1.textContent = "Monday - Friday";
  p2.textContent = "7:00 AM - 10:00 PM";
  p3.textContent = "Saturday - Sunday";
  p4.textContent = "9:00 AM - 10:00 PM";

  section.appendChild(p1);
  section.appendChild(p2);
  section.appendChild(document.createElement("br"));
  section.appendChild(p3);
  section.appendChild(p4);

  parentElement.appendChild(section);
}
