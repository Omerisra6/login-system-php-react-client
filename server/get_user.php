<?php
    require(realpath("./db_functions.php"));
    require(realpath("./helpers.php"));

    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    if ( session_status() === PHP_SESSION_NONE && isset(  $_GET[ 'PHPSESSID' ] ) ) {
        session_id( $_GET[ 'PHPSESSID' ]  );
        session_start();
    }


    //React js sends  options request before the original request
    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == "OPTIONS") {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
        header("HTTP/1.1 200 OK");
        exit();
    }


    if ( ! isset( $_SESSION['username'] ) ) {
        header("HTTP/1.1 400 User must be logged in");
        exit();
    }

    //Gets the user from request username
    $user = getUser( $_GET[ 'username' ] );
    $user = removePassword( $user );

    header( "HTTP/1.1 200 user returned successfully" );
    echo( json_encode( $user) );
    exit();

?>