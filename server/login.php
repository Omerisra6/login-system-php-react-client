<?php
    require(realpath("./db_functions.php"));
    require(realpath("./helpers.php"));

    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    //React js sends  options request before the original request
    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == "OPTIONS") {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
        header("HTTP/1.1 200 OK");
        die();
    }

   
    $username = preg_replace('/\s+/', '', $_GET['username']);
    $password = $_GET['password'];

    if ( ! isset( $username ) || ! isset( $password ) ) {
        header("HTTP/1.1 400 Please fill al fields");
        exit();
    }

    //Checks if user exists
    if ( ! isUserExists( $username ) ) {
        header( "HTTP/1.1 400 ". $username .  " is not exists");
        exit();       
    }


    logUser( $username, $password);
?>