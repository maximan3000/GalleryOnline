<?php
$dir='../photo/';
$answer = array();
$files=scandir($dir);
foreach ($files as $key => $photoname){
    if($photoname!='.' && $photoname!='..') {
        $file = array("URL" => "photo/".$photoname, "Name" => $photoname);
        $answer[]=$file;
    };
}
echo json_encode($answer);
