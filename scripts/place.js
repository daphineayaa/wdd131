// place.js
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Optional: Wind Chill Calculation
function calculateWindChill(tempF, speed) {
  if (tempF <= 50 && speed >= 3) {
    return (
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
document.getElementById("chill").textContent = calculateWindChill(temp, wind);
