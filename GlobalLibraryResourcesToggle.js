function toggleTable(id) {
  const table = document.getElementById(id);
  table.style.display = table.style.display === "none" ? "block" : "none";
}

function showAndScrollToTable(id) {
  const table = document.getElementById(id);
  if (table.style.display === "none") {
    table.style.display = "block";
  }
  table.scrollIntoView({ behavior: "smooth", block: "start" });
}
