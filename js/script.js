// script.js

// Language Toggle Functionality
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'es' : 'en';  // Example: toggles between English and Spanish
    document.documentElement.lang = newLang;
    // Update language specific content accordingly
}

// Form Handling Functionality
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const formData = new FormData(form); // Capture form data
    // Here you could add validation and send form data to a server
    console.log('Form submitted', Object.fromEntries(formData));
}

// Smooth Scroll Functionality
function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event Listeners
document.querySelector('#language-toggle').addEventListener('click', toggleLanguage);
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => link.addEventListener('click', smoothScroll));
