export function removeChildElements(parentElement) {
  if (parentElement !== null) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }
}
