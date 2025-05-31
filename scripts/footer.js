document.addEventListener("DOMContentLoaded", () => {
  // Set the current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set the last modified date of the document
  document.getElementById("lastModified").textContent = document.lastModified;
});
