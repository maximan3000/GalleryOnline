<?php
require "App/init.php";

header('Content-type: json');
header('Access-Control-Allow-Origin: *');

$tmp_name = $_FILES["file"]["tmp_name"];
$name = basename($_FILES["file"]["name"]);

while (file_exists($_sourceImageDir.".$name"))
{
    $name=rand(0,9).$name;
}

$addImageResult = move_uploaded_file($tmp_name, $_sourceImageDir."$name");

$fullName = $_sourceImageDir."taks.jpg";

$minifiedImage = new Imagick($fullName);
$minifiedImage->adaptiveResizeImage(50,50);
$minifiedImageName = str_replace(".jpg", ".min.jpg", $name);

$minifiedImageFile = fopen($_minifiedImageDir.$minifiedImageName, "w");
$minifiedImage->writeImageFile($minifiedImageFile);

echo json_encode($addImageResult);