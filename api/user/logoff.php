<?php

    require(realpath("./db_functions.php"));
    require(realpath("./helpers.php"));


    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');


    $username = preg_replace('/\s+/', '', $_GET['username']);

    //Checks if user exists
    if ( ! isUserExists( $username) ) {
        header( "HTTP/1.1 400 ". $username .  "is not exists");
        exit();       
    }

    logUserOff( $username );

?>