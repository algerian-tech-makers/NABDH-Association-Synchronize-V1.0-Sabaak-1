<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
if(!isset($_GET['id']) || !$_GET['id']) {
    die('Id Is Required');
}



require_once "../database/config.php";

$id = $_GET['id'];

$isExist = $db -> query("SELECT * FROM events WHERE  id = $id LIMIT 1") -> fetch_assoc();

if(!empty($isExist)) {

    $delete = $db -> query("DELETE FROM events WHERE id = $id");

    if(!$db -> error) {
        $message = [
            'message' => 'تم حذف الحدث بنجاح',
            'id'=> $id,
           
        ];

        echo json_encode($message,JSON_UNESCAPED_UNICODE);
    }

    else{
        echo json_encode("intenal server error");
        http_response_code(500); 

    }

}

else
{
    http_response_code(400); 

    echo json_encode("حدث خطأ أثناء الحذف",JSON_UNESCAPED_UNICODE);
}




?>
