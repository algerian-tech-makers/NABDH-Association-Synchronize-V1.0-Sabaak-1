<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
require_once "../database/config.php";

$errors = [];

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = mysqli_real_escape_string($db, $_POST['name']);
    $address = mysqli_real_escape_string($db, $_POST['address']);
    $phone = mysqli_real_escape_string($db, $_POST['phone']);
    $image = mysqli_real_escape_string($db, $_POST['image']);
   
    $id=$_POST['id'];



    // Email Validation

    if (empty($name)) {
        array_push($errors, 'الاسم مطلوب');
    } 

    // Address Validation

    if (empty($address)) {
        array_push($errors,'العنوان مطلوب');
    }

    // Confirm Password Validation


    if (empty($phone)) {
        array_push($errors, 'رقم الهاتف مطلوب');
    }

   


  

    

    // Check if Array Of Errors Empty


    if (empty($errors)) {

       

            // Check if Email Exist

           

                // Add Association In DataBase
               
                $update = $db -> query("SELECT * FROM Donators WHERE id = $id LIMIT 1") -> fetch_all(MYSQLI_ASSOC);
               if($update)
               {
                $prepared = $db->prepare("UPDATE Donators set name=?,address=?,phone=?,image=?,completedOnBoarding=1  WHERE id=?");

                $prepared->bind_param('ssdsi', $NAME, $ADDRESS,$PHONE,$IMAGE,$ID);
                $NAME=$name;
                $ADDRESS=$address;
                $PHONE=$phone;
                $IMAGE=$image;
                $ID=$id;


                if ($prepared->execute()) {

                    $user = [
                        'id' => $id,
                        'name' => $name,
                        'address' => $address,
                        'phone' => $phone,
                        'image' =>$image,
                        
            
                    ];
            
                    echo json_encode($user, JSON_UNESCAPED_UNICODE);
                } else {
                    echo json_encode("حدث خطأ أثناء التحديث", JSON_UNESCAPED_UNICODE);
                    echo json_encode($db->error);
                    http_response_code(500); 
                }
               }
else{
    echo json_encode("المتبرع غير موجود",JSON_UNESCAPED_UNICODE);
    http_response_code(400); 
}
              

            } else {

                echo json_encode($errors, JSON_UNESCAPED_UNICODE);
                http_response_code(400); 
            }

        } 
       
    




?>