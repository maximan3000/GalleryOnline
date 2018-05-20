<?php
$filename=$_GET["filename"];
echo $filename;
 if (file_exists("../photo/$filename")) {
     unlink("../photo/$filename");
 }