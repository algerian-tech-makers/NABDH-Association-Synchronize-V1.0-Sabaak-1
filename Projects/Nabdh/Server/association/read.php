<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");




require_once "../database/config.php";



if(isset($_GET['id']) || $_GET['id']) {

    $id = $_GET['id'];
    $associations = $db -> query("SELECT id,name,address,email,phone,image,activity,completedOnBoarding FROM Association WHERE id = $id LIMIT 1") -> fetch_all(MYSQLI_ASSOC); 
    if($associations){
        http_response_code(200);
        header('Content-type: text/javascript');
        echo json_encode($associations,JSON_UNESCAPED_UNICODE);
    
    }
    else{
        http_response_code(204);
    }


}


else{
  
    http_response_code(400);
    echo json_encode("id is required");

}






?>
