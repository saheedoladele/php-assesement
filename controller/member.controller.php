<?php 
include_once("../model/db.php");
include_once("../model/member.model.php");


// Check if the action parameter is set
if (isset($_POST['action'])) {
    $action = $_POST['action'];

    // Call the appropriate function based on the action parameter
    switch ($action) {
        case 'addMember':
            addNewMember();
            break;
      
    }
}


function addNewMember(){
    // accepting and validating user input
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $school = filter_input(INPUT_POST, 'school', FILTER_VALIDATE_INT);

    $res = create_new_member($name, $email, $school);

    echo $res;
}





