// Evita que el navegador recuerde el scroll
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Asegura que al cargar la página inicie arriba
window.onload = function () {
  window.scrollTo(0, 0);
};
