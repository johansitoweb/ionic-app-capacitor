<?php
$favorites = json_decode(file_get_contents('favorites.json'), true);
echo json_encode($favorites);
?>
