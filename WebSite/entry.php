<?php 
	
$request = strtolower($_SERVER["REQUEST_URI"]);

if ( strpos($request, "/app/services/") === 0 && file_exists( getcwd().$request) ) { 
	include getcwd().$request; 
} else { 
	header('Location: http://localhost:80/');
}

?>