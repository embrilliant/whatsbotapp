<?php 
	
	$_POST = json_decode(file_get_contents('php://input'), true);

	fwrite(fopen('log.txt', 'a'), $_POST['user'] . ": " .  $_POST['text'] . "\n");

?>