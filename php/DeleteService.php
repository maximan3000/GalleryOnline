<?php
$filename=$_GET["filename"];

 if (file_exists("photo/$filename")) {
     unlink("photo/$filename");
 }