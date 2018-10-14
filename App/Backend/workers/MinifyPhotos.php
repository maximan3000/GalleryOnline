<?php
require '../init.php';

$files = scandir($_sourceImageDir);
$countEdit = 0;

foreach ($files as $key => $photoname){
    if($photoname!='.' && $photoname!='..') {

    	$minifiedName = str_replace(".jpg", ".min.jpg", $photoname);
    	$minifiedPath = $_minifiedImageDir.$minifiedName;

    	if (!file_exists($minifiedPath)) {
    		$minifiedImage = new Imagick($_sourceImageDir.$photoname);
			$minifiedImage->adaptiveResizeImage(50,50);

			$minifiedImageFile = fopen($minifiedPath, "w");
			$minifiedImage->writeImageFile($minifiedImageFile);

			$countEdit++;
    	}
    };
}

echo $countEdit;