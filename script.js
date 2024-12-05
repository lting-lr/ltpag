// Menú desplegable
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Formulario de contacto (simulación)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Mensaje enviado!');
});
