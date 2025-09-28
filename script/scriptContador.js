// Fecha objetivo: 25 de noviembre de 2025
        const targetDate = new Date('November 25, 2025 00:00:00').getTime();
        
        function updateCountdown() {
            // Obtener fecha y hora actual
            const now = new Date().getTime();
            
            // Calcular la diferencia en milisegundos
            const difference = targetDate - now;
            
            // Si ya llegó la fecha objetivo
            if (difference <= 0) {
                document.getElementById('dias').innerText = '0';
                document.getElementById('horas').innerText = '0';
                document.getElementById('minutos').innerText = '0';
                document.getElementById('segundos').innerText = '0';
                return;
            }
            
            // Calcular días, horas, minutos y segundos
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            // Actualizar los valores en el HTML
            document.getElementById('dias').innerText = days;
            document.getElementById('horas').innerText = hours;
            document.getElementById('minutos').innerText = minutes;
            document.getElementById('segundos').innerText = seconds;
            
            // Actualizar la fecha de hoy
            const today = new Date();
            document.getElementById('fecha-hoy').innerText = 'Hoy: ' + today.toLocaleDateString('es-ES', {
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
            });
        }
        
        // Actualizar el contador cada segundo
        setInterval(updateCountdown, 1000);
        
        // Ejecutar una vez al cargar la página
        updateCountdown();