function toggleInfo(icon) {
  const infoText = icon.nextElementSibling;
  infoText.style.display = infoText.style.display === "block" ? "none" : "block";
}
