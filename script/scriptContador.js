// Fecha objetivo: 25 de noviembre de 2025
    const targetDate = new Date('November 25, 2025 00:00:00').getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        document.getElementById('dias').innerText = '0';
        document.getElementById('horas').innerText = '0';
        document.getElementById('minutos').innerText = '0';
        document.getElementById('segundos').innerText = '0';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById('dias').innerText = days;
      document.getElementById('horas').innerText = hours;
      document.getElementById('minutos').innerText = minutes;
      document.getElementById('segundos').innerText = seconds;

      const today = new Date();
      document.getElementById('fecha-hoy').innerText = 'Hoy: ' + today.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Animación para el botón de play
    document.querySelector('.play-button-circle').addEventListener('click', function () {
      this.style.animation = 'shake 0.5s ease';
      setTimeout(() => {
        this.style.animation = 'pulseElegant 2s ease-in-out infinite';
        alert('¡Gracias por confirmar tu asistencia! Te esperamos en nuestra boda.');
      }, 500);
    });

    // Modal para imagen ampliada
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    // Abrir modal al hacer clic en la imagen del itinerario
    document.getElementById('itinerario-img').addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
    });

    // Cerrar modal
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera de la imagen
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Animación para botones "Como llegar" y "confirmar"
    document.querySelectorAll('.button-llegar').forEach(button => {
      button.addEventListener('click', function() {
        this.style.animation = 'bounceIn 0.6s ease';
        setTimeout(() => {
          this.style.animation = '';
          
          if (this.textContent.toLowerCase().includes('confirmar')) {
            alert('¡Gracias por confirmar tu asistencia!');
          } else {
            alert('Redirigiendo a Google Maps...');
            // Aquí iría la redirección a Google Maps
          }
        }, 600);
      });
    });

    // Animación de entrada para los títulos al hacer scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'all 0.6s ease';
        }
      });
    }, observerOptions);

    // Observar todos los títulos h1 y subtítulos
    document.querySelectorAll('.padres-padrinos h1, .padres-padrinos .subtitulo, .intineario h1').forEach(el => {
      // Aplicar estilos iniciales para la animación
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      observer.observe(el);
    });