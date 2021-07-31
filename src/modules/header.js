export function addHeader(parentElement) {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");

  h1.textContent = "FOODIES";

  const nav = document.createElement("nav");

  const a1 = document.createElement("a");
  const a3 = document.createElement("a");
  const a2 = document.createElement("a");

  a1.textContent = "HOME";
  a2.textContent = "MENU";
  a3.textContent = "CONTACT";

  nav.appendChild(a1);
  nav.appendChild(a2);
  nav.appendChild(a3);

  header.appendChild(h1);
  header.appendChild(nav);

  parentElement.appendChild(header);
}
