<?php
$dir='photo/';
$answer = array();
$files=scandir($dir);
foreach ($files as $key => $photoname){
    if($photoname!='.' && $photoname!='..') {
        $answer[]=$dir.$photoname;
    };
}
return json_encode( $answer);
