<?php
require '../init.php';

header('Content-type: json');
header('Access-Control-Allow-Origin: *');

$answer = array();
$files=scandir($_sourceImageDir);

foreach ($files as $key => $photoname){
    if($photoname!='.' && $photoname!='..') {

    	$minifiedName = str_replace(".jpg", ".min.jpg", $photoname);

        $file = array(
        	"source" => $_sourceImageDirUrl.$photoname, 
        	"minified" => $_minifiedImageDirUrl.$minifiedName,
        	"name" => $photoname
        );
        
        $answer[]=$file;
    };
}

echo json_encode($answer);