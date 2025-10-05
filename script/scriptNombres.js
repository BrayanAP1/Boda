document.addEventListener('DOMContentLoaded', function () {
            const envelope = document.querySelector('.envelope');
            const seal = document.querySelector('.seal');
            const form = document.getElementById('nombre-form');

            // Lista de invitados permitidos
            const nombresPermitidos = [
                'Agustin',
                'Sandra',
                'Leidy',
                'Camilo Pulido',
                'Brayan'
            ];

            seal.addEventListener('click', openEnvelope);
            envelope.addEventListener('click', function (e) {
                if (e.target === envelope) openEnvelope();
            });

            function openEnvelope() {
                if (!envelope.classList.contains('open')) {
                    envelope.classList.add('open');
                    document.querySelector('.instructions').textContent = 'Completa tus datos para confirmar';
                }
            }

            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const nombre = document.getElementById('nombre').value.trim();

                if (nombre === '') {
                    alert('Por favor, ingrese su nombre');
                    return;
                }

                // Validar si el nombre está en la lista (sin importar mayúsculas)
                const permitido = nombresPermitidos.some(n => n.toLowerCase() === nombre.toLowerCase());

                if (permitido) {
                    window.location.href = 'home.html';
                } else {
                    alert('Lo sentimos, tu nombre no está en la lista de invitados.');
                }
            });
        });