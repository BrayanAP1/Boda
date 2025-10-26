const barraFin = document.getElementById("fin");
    let mostrado = false;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const alturaTotal = document.documentElement.scrollHeight;
      const alturaVisible = window.innerHeight;

      // Detecta cuando llega al final
      if (scrollY + alturaVisible >= alturaTotal - 5 && !mostrado) {
        mostrado = true;

        // Sube un poco la página
        window.scrollTo({
          top: scrollY - 150,
          behavior: "smooth"
        });

        // Muestra el div subiendo desde abajo
        setTimeout(() => {
          barraFin.style.bottom = "0";
        }, 200);

        // Lo baja nuevamente después de un tiempo
        setTimeout(() => {
          barraFin.style.bottom = "-100px";
          mostrado = false;
        }, 1400);
      }
    });