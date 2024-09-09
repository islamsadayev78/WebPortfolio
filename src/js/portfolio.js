// script.js

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('.menu-links a');

    // Toggle menu visibility
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});

