<?php
require '../init.php';

header('Content-type: json');
header('Access-Control-Allow-Origin: *');

$filename=$_GET["filename"];
$answer = false;

if (file_exists($_sourceImageDir."$filename")) {
	$answer = unlink($_sourceImageDir."$filename");
}

echo json_encode($answer);