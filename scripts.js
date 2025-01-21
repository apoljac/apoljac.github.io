const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const title = document.getElementById('welcomeTitle');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        title.style.opacity = '0'; // Titel ausblenden
    } else {
        title.style.opacity = '1'; // Titel wieder anzeigen
    }
});
