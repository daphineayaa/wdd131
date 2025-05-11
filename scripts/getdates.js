// Set the current year
document.getElementById("year").textContent = new Date().getFullYear();
// Set the current date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Set the last modified date
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
// Set the current date
const currentDate = new Date();
