const boton = document.getElementById("playBtn");
    const musica = document.getElementById("miMusica");
    const icono = boton.querySelector("i");

    boton.addEventListener("click", () => {
      if (musica.paused) {
        musica.play();
        icono.classList.remove("fa-play");
        icono.classList.add("fa-pause");
      } else {
        musica.pause();
        icono.classList.remove("fa-pause");
        icono.classList.add("fa-play");
      }
    });