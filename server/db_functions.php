<?php

    //Adds user to DB
    function addUser( $username, $password ){

        $userDetailsPath = getUserDetailsPath( $username );
        $handle = fopen( $userDetailsPath, 'w');
        
        $hashed_password = password_hash( $password, PASSWORD_DEFAULT);
        $login_count = 0;
        $ip = $_SERVER['REMOTE_ADDR'];
        $last_action = date("h:i:sa");

        $user = [ $username, $hashed_password, $login_count, $ip, $last_action ];

        fputcsv( $handle, $user, ','); 
        fclose( $handle );

        session_start();
        $_SESSION[ 'username' ] = $username;

    }

    //Verify user and updates his details
    function logUser( $username, $password ){

        $userDetails = getUser( $username );
      
        //Verifing password
        $db_password = $userDetails[1];
        $isPasswordCorrect = password_verify( $password, $db_password );

        if( ! $isPasswordCorrect ){
            header("HTTP/1.1 400 Wrong password");
            exit();           
        }

        //updates ip
        $userDetails [ 3 ] = $_SERVER['REMOTE_ADDR'];
        
        //Updates user details if he is not logged in allready
        if( ! isset( $_SESSION[ 'username' ] ) ){

            session_start(); 
            $_SESSION[ 'username' ] = $username;

            //Updates login count
            $userDetails[ 2 ]       = (int)$userDetails[ 2 ]++;

            //Updates lastAction
            $userDetails [ 4 ]      = date("h:i:sa");
        }

        updateUser( $username, $userDetails);
        
        //Success
        header("HTTP/1.1 200 User logged in successfully");
        exit();
    }


    //Deletes session if exists
    function logUserOff(){

        //Deletes session
        session_destroy();

        header("HTTP/1.1 200 Logged off");
        exit();              
    }

    //Delete old data and put new data
    function updateUser( $username, $userDetails ){

        $userDetailsPath =  getUserDetailsPath( $username );
        $handle = fopen( $userDetailsPath, 'a+' );

        file_put_contents( $userDetailsPath, "" );
        fputcsv( $handle, $userDetails, ','); 

        fclose( $handle );
    }

    //gets user Details
    function getUser( $username ){
        $userDetailsPath =  getUserDetailsPath( $username );
        $handle = fopen( $userDetailsPath, 'r' );

        $userDetails = fgetcsv( $handle ) ;
        fclose( $handle );

        return $userDetails;
    }

    function getUserDetailsPath( $username ){
        return "./users/" . $username . ".csv";
    }

?>


