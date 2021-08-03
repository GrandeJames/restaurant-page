export function addHeading(parentElement, textContent) {
  const h2 = document.createElement("h2");

  h2.className = "content-heading";
  h2.textContent = textContent;

  parentElement.appendChild(h2);
}
