
document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.querySelector('.envelope');
    const seal = document.querySelector('.seal');
    const form = document.getElementById('nombre-form');

    // Lista de invitados permitidos
    const nombresPermitidos = [
        'Agustin Pulido', 'Sandra Rugeles', 'Brayan Pulido', 'Yeison Pulido', 'Diana Escalante',
        'Ernesto Garcia', 'Monica Ardilla', 'Stefania Rugeles', 'Stefania Ardilla', 'Darwin Olaya', 'Jhon Rugeles',
        'Maria Romero', 'Sebastian Villamizar', 'Gilma Rugeles', 'Crisanto Pulido', 'Luz Herrera',
        'Jorge Pulido', 'Yadira Gonzales', 'Yesenia Gonzales', 'Julian Pulido', 'Fredy Pulido',
        'Yoelis Yepes', 'Ferney Pulido', 'Diana Pulido', 'Esther Pulido', 'Jhon Jaimes',
        'Monica Pulido', 'Jaiver Cruz', 'Yanet Mendoza', 'Deicy Lozano', 'Deicy Alvarado',
        'Cristobal Garcia', 'Miguel Herrera', 'Stefanny Herrera', 'Stella Vega', 'Saul Salas',
        'Maye', 'GilRoberto Vargas', 'Gil Vargas', 'Gil Roberto Vargas', 'Ladis Vargas'
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

    // Función para normalizar texto (quita tildes, espacios extra y pone en minúsculas)
    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Elimina acentos
            .replace(/\s+/g, " ") // Quita espacios dobles
            .trim();
    }

    // Función para calcular similitud (distancia de Levenshtein aproximada)
    function similar(a, b) {
        const longer = a.length > b.length ? a : b;
        const shorter = a.length > b.length ? b : a;
        const longerLength = longer.length;
        if (longerLength === 0) return 1.0;
        const same = longerLength - editarDistancia(longer, shorter);
        return (same / longerLength);
    }

    // Distancia de edición (Levenshtein)
    function editarDistancia(a, b) {
        const matrix = Array.from({ length: b.length + 1 }, () => []);
        for (let i = 0; i <= b.length; i++) matrix[i][0] = i;
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + (a[j - 1] === b[i - 1] ? 0 : 1)
                );
            }
        }
        return matrix[b.length][a.length];
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombreIngresado = document.getElementById('nombre').value;

        if (nombreIngresado.trim() === '') {
            alert('Por favor, ingrese su nombre');
            return;
        }

        const nombreNormalizado = normalizar(nombreIngresado);

        // Verificar coincidencia exacta o similar (>0.8)
        const permitido = nombresPermitidos.some(n => {
            const nombreLista = normalizar(n);
            return (
                nombreLista === nombreNormalizado || 
                similar(nombreLista, nombreNormalizado) > 0.8
            );
        });

        if (permitido) {
            window.location.href = 'home.html';
        } else {
            alert('Lo sentimos, tu nombre no está en la lista de invitados.');
        }
    });
});
