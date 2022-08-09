<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");




require_once "../database/config.php";




    $associations = $db -> query("SELECT id,name,address,email,phone,image,activity,completedOnBoarding FROM Association ") -> fetch_all(MYSQLI_ASSOC);
    if($associations){
        http_response_code(200);
    }
    else{
        http_response_code(204);
    }



header('Content-type: text/javascript');

echo json_encode($associations,JSON_UNESCAPED_UNICODE);

?>
