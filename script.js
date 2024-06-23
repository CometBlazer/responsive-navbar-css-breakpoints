// script.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navLinks.style.maxHeight = '0';
    } else {
        navLinks.classList.add('active');
        navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    }
});
