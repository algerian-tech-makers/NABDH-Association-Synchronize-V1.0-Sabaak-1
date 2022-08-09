<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

// This Page For Login

require_once "../database/config.php";

$errors = [];


if($_SERVER['REQUEST_METHOD'] == 'POST') {

    try{

    $email = mysqli_real_escape_string($db,$_POST['email']);
    $password = mysqli_real_escape_string($db,$_POST['password']);

    // Email Validation

    if(empty($email)){
        array_push($errors,'البريد الإلكتروني مطلوب');

    }elseif(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
        array_push($errors,'البريد الإلكتروني غير صالح');
    }

    // Password Validation

    if(!$password){
        array_push($errors,'كلمة السر مطلوبة');
    }


    if(empty($errors)) {

        $is_exist1 = $db -> query("SELECT * FROM Donators WHERE email = '$email'  LIMIT 1")->fetch_assoc();
        $is_exist2= $db -> query("SELECT * FROM Association WHERE email = '$email'   LIMIT 1")->fetch_assoc();

        if(!empty($is_exist1)) {
if (password_verify( $password,  $is_exist1['password']))
{
    $user = [
        'id' => $is_exist1['id'],
        'name' => $is_exist1['name'],
        'email' => $is_exist1['email'],
        'address'=>$is_exist1['address'],
        'phone'=>$is_exist1['phone'],
        'image'=>$is_exist1['image'],
        'completedOnBoarding'=>$is_exist1['completedOnBoarding'],
         

    ];
    http_response_code(200);
    echo json_encode($user,JSON_UNESCAPED_UNICODE);

}
else{
   
    echo json_encode("البريد الإلكتروني خاطئ أو كلمة السر",JSON_UNESCAPED_UNICODE);
    http_response_code(400);
}

        }elseif(!empty($is_exist2)) {

            if (password_verify( $password,  $is_exist2['password']))
            {
                $user = [
                    'id' => $is_exist2['id'],
                    'name' => $is_exist2['name'],
                    'email' => $is_exist2['email'],
                    'address'=>$is_exist2['address'],
                    'phone'=>$is_exist2['phone'],
                    'image'=>$is_exist2['image'],
                ];
    
                echo json_encode($user,JSON_UNESCAPED_UNICODE);
                http_response_code(200);
            }
            else{
                echo json_encode("البريد الإلكتروني خاطئ أو كلمة السر",JSON_UNESCAPED_UNICODE);
                http_response_code(400);
            }

           

        }else {
            echo json_encode("البريد الإلكتروني خاطئ أو كلمة السر",JSON_UNESCAPED_UNICODE);
            http_response_code(400);
        }

    }else {
     
        echo json_encode($errors,JSON_UNESCAPED_UNICODE);
        http_response_code(400);
       
    }

}
catch(Exception $e){
    echo json_encode("internel server error");
    http_response_code(500);

}

}



?>


