<?php
header('Content-type: json');
header('Access-Control-Allow-Origin: *');
$dir='../photo/';
$answer = array();
$files=scandir($dir);
foreach ($files as $key => $photoname){
    if($photoname!='.' && $photoname!='..') {
        $file = array("URL" => "https://grazsite.000webhostapp.com/photo/".$photoname, "Name" => $photoname);
        $answer[]=$file;
    };
}
echo json_encode($answer);
