<?php
foreach ($_FILES["pictures"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["pictures"]["tmp_name"][$key];
        $name = basename($_FILES["pictures"]["name"][$key]);
        while (file_exists("photo/$name"))
        {
            $name=rand(0,9).$name;
        }
        move_uploaded_file($tmp_name, "photo/$name");
    }
}
?>