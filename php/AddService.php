<?php
header('Content-type: json');
header('Access-Control-Allow-Origin: *');
$tmp_name = $_FILES["file"]["tmp_name"];
$name = basename($_FILES["file"]["name"]);
while (file_exists("../photo/.$name"))
{
    $name=rand(0,9).$name;
}
$answer = move_uploaded_file($tmp_name, "../photo/$name");
echo json_encode($answer);
?>