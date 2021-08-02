import { loadContent } from "../components/loadContent.js";

export function loadContact() {
  loadContent(addContact);
}

function addContact(parentElement) {
  const h2 = document.createElement("h2");
  h2.className = "page-headings";
  h2.textContent = "Contact Us";
  parentElement.appendChild(h2);

  const div1 = document.createElement("div");
  div1.id = "contact-container";

  const p1 = document.createElement("p");
  p1.textContent = "Phone: 123-456-7890";
  div1.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "Email: name@example.com";
  div1.appendChild(p2);

  const div2 = document.createElement("div");
  div2.id = "available-times-container";

  const p3 = document.createElement("p");
  p3.textContent = "Monday - Friday";
  div1.appendChild(p3);

  const p4 = document.createElement("p");
  p4.textContent = "7:00 AM - 10:00 PM";
  div1.appendChild(p4);

  div2.appendChild(document.createElement("br"));

  const p5 = document.createElement("p");
  p5.textContent = "Saturday - Sunday";
  div2.appendChild(p5);

  const p6 = document.createElement("p");
  p6.textContent = "9:00 AM - 10:00 PM";
  div2.appendChild(p6);

  parentElement.appendChild(div1);
  parentElement.appendChild(div2);
}
