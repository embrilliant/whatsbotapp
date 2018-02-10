<?php 

	$_POST = json_decode(file_get_contents('php://input'), true);

	fwrite(fopen('log.txt', 'a'), $_POST['sender'] . ": " .  $_POST['message'] . "\n");

?>