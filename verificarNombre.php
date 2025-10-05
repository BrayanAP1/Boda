<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = trim($_POST['nombre'] ?? '');

    if ($nombre === '') {
        echo 'ERROR';
        exit;
    }

    $archivo = 'nombres.csv';

    if (!file_exists($archivo)) {
        echo 'ERROR';
        exit;
    }

    $lineas = file($archivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $permitido = false;

    foreach ($lineas as $linea) {
        if (strcasecmp($nombre, trim($linea)) === 0) {
            $permitido = true;
            break;
        }
    }

    echo $permitido ? 'OK' : 'NO';
}
?>
