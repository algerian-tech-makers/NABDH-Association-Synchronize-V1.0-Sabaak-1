<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


if(!isset($_GET['id']) || !$_GET['id']) {
    die('Id Is Required');
    http_response_code(400); 
}



require_once "../database/config.php";

$id = $_GET['id'];

$isExist = $db -> query("SELECT * FROM Association WHERE  id = $id LIMIT 1") -> fetch_assoc();

if(!empty($isExist)) {

    $delete = $db -> query("DELETE FROM Association WHERE id = $id");

    if(!$db -> error) {
        $message = [
            'message' => 'تم حذف الجمعية بنجاح',
            'id'=> $id,
            'email' => $isExist['email']
        ];

        echo json_encode($message,JSON_UNESCAPED_UNICODE);
    }

    else{
        http_response_code(500); 
    }

}


else
{
    http_response_code(400); 

    echo json_encode("الجمعية غير موجودة",JSON_UNESCAPED_UNICODE);
}




?>
