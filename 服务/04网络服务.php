<?php

	// $success = array('msg' => 'ok', 'src' => '01_frank.jpg');
	
	$success = array('msg' => 'ok', 'info' => $_POST);
	echo json_encode($success);

?>