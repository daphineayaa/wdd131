// Toggle navigation menu
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.classList.toggle('open');
});

// Display last modified date
document.querySelector('#lastModified').textContent = `Last Updated: ${document.lastModified}`;

// Form: Save data to localStorage
const form = document.querySelector('#feedback-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name && message) {
      localStorage.setItem('userFeedback', JSON.stringify({ name, message }));
      alert('Thank you for your feedback!');
      form.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
}

// Lazy loading images
const lazyImages = document.querySelectorAll('img[data-src]');
const loadImage = (img) => {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => img.removeAttribute('data-src');
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      obs.unobserve(entry.target);
    }
  });
});

lazyImages.forEach(img => observer.observe(img));

// Example: Display localStorage feedback on another page
const feedbackOutput = document.querySelector('#feedback-output');
if (feedbackOutput) {
  const data = JSON.parse(localStorage.getItem('userFeedback'));
  if (data) {
    feedbackOutput.innerHTML = `<strong>${data.name}:</strong> ${data.message}`;
  } else {
    feedbackOutput.textContent = 'No feedback saved yet.';
  }
}
