const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
// Event-Listener für das Menü
const startseiteLink = document.querySelector('a[href="#"]');

startseiteLink.addEventListener('click', (event) => {
  event.preventDefault(); // Verhindert das Standardverhalten des Links
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Sanftes Scrollen
  });
});

// Menü anzeigen
menuToggle.addEventListener('mouseenter', () => {
  dropdownMenu.style.display = 'block';
  dropdownMenu.style.opacity = '1';
  dropdownMenu.style.transform = 'translateY(0)';
});

// Menü bleibt sichtbar, wenn Maus über dem Dropdown ist
dropdownMenu.addEventListener('mouseenter', () => {
  dropdownMenu.style.display = 'block';
  dropdownMenu.style.opacity = '1';
  dropdownMenu.style.transform = 'translateY(0)';
});

// Menü ausblenden, wenn die Maus den Bereich verlässt
menuToggle.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!dropdownMenu.matches(':hover')) {
      dropdownMenu.style.display = 'none';
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.transform = 'translateY(-10px)';
    }
  }, 200); // Kurzer Delay, um sicherzustellen, dass die Maus nicht zwischen Symbol und Menü springt
});

dropdownMenu.addEventListener('mouseleave', () => {
  dropdownMenu.style.display = 'none';
  dropdownMenu.style.opacity = '0';
  dropdownMenu.style.transform = 'translateY(-10px)';
});
