<?php
    require(realpath("./db_functions.php"));
    require(realpath("./helpers.php"));


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');


    //saving username and ignoring spaces
    $username         = preg_replace('/\s+/', '', $_POST['username']);
    $password         = $_POST['password'];
    $password_confirm = $_POST['password_confirm'];


    validateUserDetails( $username, $password, $password_confirm);
    addUser( $username, $password );
    
    //Successfull signup
    header("HTTP/1.1 200 Signed up sucsessfully");
    exit();


?>
