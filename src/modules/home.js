import background from "../images/home-background.jpg";

export function addHome(parentElement) {
  const topSection = document.createElement("div");
  const bottomSection = document.createElement("div");

  topSection.id = "top-section";
  bottomSection.id = "bottom-section";

  const h2 = document.createElement("h2");
  h2.innerHTML = `Eat.<br>Drink.<br>Love.`;
  topSection.appendChild(h2);

  const button = document.createElement("button");
  button.textContent = "View menu";
  topSection.appendChild(button);

  const image = document.createElement("img");
  image.src = background;
  bottomSection.appendChild(image);

  parentElement.appendChild(topSection);
  parentElement.appendChild(bottomSection);
}
