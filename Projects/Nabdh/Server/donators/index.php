<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require_once "../database/config.php";




    $donators = $db -> query("SELECT id,name,address,phone,email,completedOnBoarding FROM Donators ") -> fetch_all(MYSQLI_ASSOC);
    if($donators){
        http_response_code(200);
    }
    else{
        http_response_code(204);
    }



header('Content-type: text/javascript');


echo json_encode($donators,JSON_UNESCAPED_UNICODE);

?>
