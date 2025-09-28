document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('playBtn');
    let isPlaying = false;

    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            this.classList.add('paused');
            console.log('Reproduciendo...');
        } else {
            this.classList.remove('paused');
            console.log('Pausado');
        }
    });
});