document.addEventListener('DOMContentLoaded', function () {
            const envelope = document.querySelector('.envelope');
            const seal = document.querySelector('.seal');
            const form = document.getElementById('nombre-form');

            // Lista de invitados permitidos
            const nombresPermitidos = [
                'Agustin Pulido',
                'Sandra Rugeles',
                'Brayan Pulido',
                'Yeison Pulido',
                'Diana Escalante',
                'Ernesto Garcia',
                'Monica Rugeles',
                'Stefania Rugeles',
                'Darwin Olaya',
                'Jhon Rugeles',
                'Maria Romero',
                'Sebastian Villamizar',
                'Gilma Rugeles',

                'Crisanto Pulido',
                'Luz Herrera',
                'Jorge Pulido',
                'Yadira Gonzales',
                'Yesenia Gonzales',
                'Julian Pulido',
                'Fredy Pulido',
                'Yoelis Yepes',
                'Ferney Pulido',
                'Diana Pulido',
                'Esther Pulido',
                'Jhon Jaimes',
                'Monica Pulido',
                'Jaiver cruz ',
                'Yanet Mendoza',

                'Deicy Lozano',
                'Deicy Alvarado',
                'Cristobal Garcia',
                'Miguel Herrera',
                'Stefanny Herrera',
                'Stella Vega',
                'Saul Salas',
                'Maye',
                'GilRoberto Vargas',
                'Gil Vargas',
                'Gil Roberto Vargas',
                'Ladis Vargas',

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