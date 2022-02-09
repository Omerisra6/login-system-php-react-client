<?php

    require(realpath("./db_functions.php"));
    require(realpath("./helpers.php"));

    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    session_start();

    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == "OPTIONS") {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
        header("HTTP/1.1 200 OK");
        exit();
    }

    logUserOff( );
    exit();

?>