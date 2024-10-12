// Selecciona el icono del menú y la barra de navegación
const menuIcon = document.getElementById('menu-icon');
const mainNav = document.getElementById('main-nav').querySelector('ul');

// Añadir un evento de clic al icono del menú
menuIcon.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // Alterna la clase 'active' para mostrar o esconder el menú
});