<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $favorites = json_decode(file_get_contents('php://input'), true);
    file_put_contents('favorites.json', json_encode($favorites));
    echo json_encode(['status' => 'success']);
}
?>
