<?php
    require(realpath("./db_functions.php"));
    require(realpath("./helpers.php"));

    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

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
    $username = preg_replace('/\s+/', '', $_POST['username']);
    $password = $_POST['password'];

    if ( ! isset( $username ) || ! isset( $password ) ) {
        header("HTTP/1.1 400 Please fill al fields");
        exit();
    }

    //Checks if user exists
    if ( ! isUserExists( $username ) ) {
        header( "HTTP/1.1 400 ". $username .  " is not exists");
        exit();       
    }

    //Checks if user allready online
    session_start();
    if ( isset( $_SESSION[ 'username' ] ) ) {
        header("HTTP/1.1 400 User allready online");
        exit();
    }


    logUser( $username, $password);
?>