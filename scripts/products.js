// scripts/products.js

const products = [
  { id: "p1", name: "Safari Tent" },
  { id: "p2", name: "Handwoven Basket" },
  { id: "p3", name: "Ebony Sculpture" },
  { id: "p4", name: "African Drum" },
  { id: "p5", name: "Beaded Jewelry" }
];

function populateProductDropdown() {
  const productSelect = document.getElementById("product");

  // Add a default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "--Select a product--";
  productSelect.appendChild(defaultOption);

  // Add product options from array
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", populateProductDropdown);
