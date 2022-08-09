<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
require_once "../database/config.php";

$errors = [];

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $confirmPassword = mysqli_real_escape_string($db, $_POST['confirmPassword']);
    $type = mysqli_real_escape_string($db, $_POST['type']);


    // Email Validation

    if (empty($email)) {
        array_push($errors, 'البريد الإلكتروني مطلوب');
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, 'البريد الإلكتروني غير صالح');
    }

    // Password Validation

    if (empty($password)) {
        array_push($errors, 'كلمة السر مطلوبة');
    }

    // Confirm Password Validation


    if (empty($confirmPassword)) {
        array_push($errors, 'تأكيد كلمة السر مطلوبة');
    }


    // Check if Password Equal ConfirmPassword

    if (!($password == $confirmPassword)) {
        array_push($errors, 'كلمة السر غير متطابقة');
    }

    // Type Validation

    if (empty($type)) {
        array_push($errors, 'نوع المستخدم مطلوب');
    }


    // Check if Array Of Errors Empty


    if (empty($errors)) {

        if ($type == 'Associations') {

            // Check if Email Exist

            $isexist = $db->query("SELECT * FROM Association WHERE email = '$email' LIMIT 1")->fetch_assoc();

            if (empty($isexist)) {

                // Add Association In DataBase

                $prepared = $db->prepare("INSERT INTO Association (email,password) VALUES (?,?)");

                $prepared->bind_param('ss', $EMAIL, $PASSWORD);

                $EMAIL = $email;
                $PASSWORD = password_hash($password,PASSWORD_DEFAULT);


                if ($prepared->execute()) {

                    $user = [
                        'id' => $prepared->insert_id,
                        'email' => $email,
                        'type' => $type
                    ];

                    echo json_encode($user, JSON_UNESCAPED_UNICODE);
                } else {
                    echo json_encode("حدث خطأ أثناء التسجيل", JSON_UNESCAPED_UNICODE);
                    echo json_encode($db->error);
                    http_response_code(500); 
                }

            } else {
                echo json_encode("البريد الإلكتروني موجود بالفعل", JSON_UNESCAPED_UNICODE);
                http_response_code(400); 
            }

        } elseif ($type == "benefactor") {

            // Add Donator In DataBase


            $isexist = $db->query("SELECT * FROM Donators WHERE email = '$email' LIMIT 1")->fetch_assoc();


            if (empty($isexist)) {

                $prepared = $db->prepare("INSERT INTO Donators (email,password) VALUES (?,?)");

                $prepared->bind_param('ss', $EMAIL, $PASSWORD);

                $EMAIL = $email;
                $PASSWORD = password_hash($password,PASSWORD_DEFAULT);


                if ($prepared->execute()) {


                    $user = [
                        'id' => $prepared->insert_id,
                        'email' => $email,
                        'type' => $type
                    ];

                    echo json_encode($user, JSON_UNESCAPED_UNICODE);
                    http_response_code(200); 
                } else {
                    echo json_encode("حدث خطأ أثناء التسجيل", JSON_UNESCAPED_UNICODE);
                    echo json_encode($db->error);
                    http_response_code(500); 
                }

            } else {
                echo json_encode("البريد الإلكتروني موجود بالفعل", JSON_UNESCAPED_UNICODE);
                http_response_code(400); 
            }

        }
    } else {
        
        echo json_encode($errors, JSON_UNESCAPED_UNICODE);
        http_response_code(400); 
    }


}

?>
