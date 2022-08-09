<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
require_once "../database/config.php";

$errors = [];

if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $author = mysqli_real_escape_string($db, $_POST['author']);
    $title = mysqli_real_escape_string($db, $_POST['title']);
    $description = mysqli_real_escape_string($db, $_POST['description']);
    $image = mysqli_real_escape_string($db, $_POST['image']);
    $raised = mysqli_real_escape_string($db, $_POST['raised']);
    $goal=  mysqli_real_escape_string($db, $_POST['goal']);
    $ending= mysqli_real_escape_string($db, $_POST['endingDate']);
    $starting= mysqli_real_escape_string($db, $_POST['startingDate']);
    $id=$_POST['id'];



    // Email Validation
    if (empty($author)) {
        array_push($errors, 'المنظم مطلوب' );
    } 

    // Password Validation

    if (empty($title)) {
        array_push($errors, 'العنوان مطلوب');
    }

    // Confirm Password Validation


    if (empty($description)) {
        array_push($errors, 'الوصف مطلوب');
    }


    // Check if Password Equal ConfirmPassword

  

    // Type Validation

    if (empty($image)) {
        array_push($errors,'الصورة مطلوبة');
    }


    if (empty($raised)) {
        array_push($errors,'المجموع مطلوب');
    }
    if (empty($goal)) {
        array_push($errors,'الهدف مطلوب');
    }

    if (empty($starting)) {
        array_push($errors,'تاريخ النهاية مطلوب');
    }

    if (empty($ending)) {
       array_push($errors,'تاريخ النهاية مطلوب');
    }

   


  

    

    // Check if Array Of Errors Empty


    if (empty($errors)) {

       

            // Check if Email Exist

           

                // Add Association In DataBase
               
                $update = $db -> query("SELECT * FROM events WHERE id = $id LIMIT 1") -> fetch_all(MYSQLI_ASSOC);
               if($update)
               {
                $prepared = $db->prepare("UPDATE events set author=?,title=?,description=?,eventImg=?,donation_raised=?,donation_goal=?,startingDate=?,endingDate=?  WHERE id=?");

                $prepared->bind_param('ssssddssi', $AUTHOR,$TITLE,$DESCRIPTION,$IMAGE,$RAISED,$GOAL ,$STARTINGDATE,$ENDINGDATE,$ID);

                $AUTHOR=  $author ;
                $TITLE= $title ;
                $DESCRIPTION =$description ;
                $IMAGE= $image ;
                $RAISED =$raised ;
                $GOAL =$goal;
                $ENDINGDATE =$ending;
                $STARTINGDATE= $starting;
                $ID=$id;


                if ($prepared->execute()) {

                    $event = [
                        'id' => $id,
                        'author' => $author,
                        'title' => $title,
                        'description'=>$description,
                        'image'=>$image,
                        'donation_raised'=>$raised,
                        'donation_goal'=>$goal,
                        'startingDate'=>$starting,
                        'endingDate'=>$ending

                    ];

            
                    echo json_encode($event, JSON_UNESCAPED_UNICODE);
                } else {
                    echo json_encode("حدث خطأ أثناء التحديث", JSON_UNESCAPED_UNICODE);
                    echo json_encode($db->error);
                    http_response_code(500); 
                }
               }
else{
    echo json_encode("الحدث غير موجود",JSON_UNESCAPED_UNICODE);
    http_response_code(400); 
}
              

            } else {

                echo json_encode($errors, JSON_UNESCAPED_UNICODE);
                http_response_code(400); 
            }

        } 
       
    




?>