// Small enhancements only: mobile navigation and demo form feedback.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const navigationLinks = document.querySelectorAll('.nav-links a');
const inquiryForm = document.querySelector('#inquiry-form');
const formStatus = document.querySelector('#form-status');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '×' : '☰';
});

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thank you! Your message has been recorded for this demo.';
  inquiryForm.reset();
});
