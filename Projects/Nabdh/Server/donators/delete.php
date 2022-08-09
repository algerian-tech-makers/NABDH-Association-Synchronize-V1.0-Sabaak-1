<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if(!isset($_GET['id']) || !$_GET['id']) {
    die('Id Is Required');
}



require_once "../database/config.php";

$id = $_GET['id'];

$isExist = $db -> query("SELECT * FROM Donators WHERE  id = $id LIMIT 1") -> fetch_assoc();

if(!empty($isExist)) {

    $delete = $db -> query("DELETE FROM Donators WHERE id = $id");

    if(!$db -> error) {

        $message = [
            'message' => 'تم حذف المتبرع بنجاح',
            'id'=> $id,
            'email' => $isExist['email']
        ];
        http_response_code(400); 
        echo json_encode($message,JSON_UNESCAPED_UNICODE);
    }

    else{
        echo json_encode("intenal server error");
        http_response_code(500); 

    }


}

else{
    echo json_encode("المتبرع غير موجود",JSON_UNESCAPED_UNICODE);
    http_response_code(400); 
}




?>
