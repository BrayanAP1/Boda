// Buscar todos los carruseles en la página
    document.querySelectorAll('.carrusel').forEach(carrusel => {
      const images = carrusel.querySelectorAll('img');
      let current = 0;

      function showNextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
      }

      setInterval(showNextImage, 3000); // cada carrusel independiente
    });