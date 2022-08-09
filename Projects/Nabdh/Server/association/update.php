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
        $activity = mysqli_real_escape_string($db, $_POST['activity']);
        $idCard = mysqli_real_escape_string($db, $_POST['idCard']);
        $associationLicence = mysqli_real_escape_string($db, $_POST['associationLicence']);
        $id=$_POST['id'];
    
    
        if (empty($id)) {
            array_push($errors, 'id is required');
        } 
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
    
        if (empty($activity)) {
            array_push($errors, 'اسم النشاط مطلوب');
        }
    
    
        if (empty($idCard)) {
            array_push($errors, ' رقم الكارد مطلوب');
        }
    
        if (empty($associationLicence)) {
            array_push($errors, ' صلاحية الجمعية مطلوبة');
        }
    
       
    
    
    
        // Check if Array Of Errors Empty
    
    
        if (empty($errors)) {
    
           
    
                // Check if Email Exist
    
               
    
                    // Add Association In DataBase
    
                   
                   
                    $update = $db -> query("SELECT * FROM Association WHERE id = $id LIMIT 1") -> fetch_all(MYSQLI_ASSOC);
                    if($update)
                    {
    
                        $prepared = $db->prepare("UPDATE Association set name=?,address=?,phone=?,image=?,activity=?,id_Card=?,associationLicence=?,completedOnBoarding=1  WHERE id=?");
    
                        $prepared->bind_param('ssissssi', $NAME, $ADDRESS,$PHONE,$IMAGE,$ACITIVITY,$IDCARD,$ASSOCIATIONLICENSE,$ID);
                        $NAME=$name;
                        $ADDRESS=$address;
                        $PHONE=$phone;
                        $IMAGE=$image;
                        $ACTIVITY=$activity;
                        $IDCARD=$idCard;
                        $ASSOCIATIONLICENSE=$associationLicence;
                        $ID=$id;
                        if ($prepared->execute()) {
    
                            $user = [
                                'id' => $id,
                                'name' => $name,
                                'address' => $address,
                                'phone' => $phone,
                                'image' =>$image,
                                'activity' =>$activity,
                               
        
                            ];
        
                            echo json_encode($user, JSON_UNESCAPED_UNICODE);
                        } else {
                            echo json_encode("حدث خطأ أثناء التحديث", JSON_UNESCAPED_UNICODE);
                            echo json_encode($db->error);
                            http_response_code(500); 
                        }
                    }
    
                    else{
                        http_response_code(400);
                        echo json_encode("لا توجد هذه الجمعية", JSON_UNESCAPED_UNICODE);
                    }
    
                 
    
                } else {
                    echo json_encode($errors, JSON_UNESCAPED_UNICODE);
                    http_response_code(400); 
                }




    }
   

    
        
       
    




?>