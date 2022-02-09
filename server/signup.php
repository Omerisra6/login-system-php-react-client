<?php
    require(realpath("./db_functions.php"));
    require(realpath("./helpers.php"));


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');
    
    
    session_start();

    //React js sends  options request before the post
    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == "OPTIONS") {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
        header("HTTP/1.1 200 OK");
        die();
    }

    //Saves the post attributes
    $_POST = json_decode(file_get_contents("php://input"), true);

    //saving username and ignoring spaces
    $username         = preg_replace('/\s+/', '', $_POST['username']);
    $password         = $_POST['password'];
    $password_confirm = $_POST['password_confirm'];


    validateUserDetails( $username, $password, $password_confirm);
    addUser( $username, $password );
    
    //Successfull signup
    header("HTTP/1.1 201 Signed up sucsessfully");
    echo( json_encode( session_id() ) );
    exit();


?>
