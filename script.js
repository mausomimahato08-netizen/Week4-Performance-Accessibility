// Accessible mobile navigation and client-side demo form validation.
const menuToggle = document.querySelector('#menuToggle');
const navigation = document.querySelector('#primary-navigation');

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('.visually-hidden').textContent =
    isOpen ? 'Close navigation menu' : 'Open navigation menu';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('.visually-hidden').textContent = 'Open navigation menu';
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('.visually-hidden').textContent = 'Open navigation menu';
    menuToggle.focus();
  }
});

document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = document.querySelector('#formFeedback');

  if (!form.reportValidity()) {
    feedback.textContent = 'Please complete all required fields using a valid email address.';
    return;
  }

  feedback.textContent = 'Thank you. The form fields passed browser validation.';
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
