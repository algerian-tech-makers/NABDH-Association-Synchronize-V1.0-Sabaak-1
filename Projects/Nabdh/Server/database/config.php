<?php


$db  = new mysqli('mysql-nabdh.alwaysdata.net','nabdh','azerkaci','nabdh_db');


if($db -> connect_error) {
    die('Error To Connect To Database');
}


?>