<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");




require_once "../database/config.php";




    $events = $db -> query("SELECT * FROM events ") -> fetch_all(MYSQLI_ASSOC);
    if($events){
        http_response_code(200);
    }
    else{
        http_response_code(204);
    }


header('Content-type: text/javascript');

echo json_encode($events,JSON_UNESCAPED_UNICODE);

?>
