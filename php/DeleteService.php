<?php
header('Content-type: json');
header('Access-Control-Allow-Origin: *');
$filename=$_GET["filename"];
$answer = false;
if (file_exists("../photo/$filename")) {
	$answer = unlink("../photo/$filename");
}
echo json_encode($answer);
?>