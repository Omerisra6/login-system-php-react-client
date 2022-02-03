<?php

    function addUser( $username, $password ){

        $userDetailsPath = getUserDetailsPath( $username );
        $handle = fopen( $userDetailsPath, 'w');
        
        $hashed_password = password_hash( $password, PASSWORD_DEFAULT);
        $online = TRUE;
        $login_count = 0;
        $ip = $_SERVER['REMOTE_ADDR'];
        $last_login = date("h:i:sa");

        $user = [ $username, $hashed_password, $online, $login_count, $ip, $last_login ];

        fputcsv( $handle, $user, ','); 
        fclose( $handle );
    }

    function logUser( $username, $password ){

        $userDetails = getUser( $username );
      
        //Verifing password
        $db_password = $userDetails[1];
        $isPasswordCorrect = password_verify( $password, $db_password );
        if( ! $isPasswordCorrect ){
            header("HTTP/1.1 400 Wrong password");
            exit();           
        }

        //Marks user as online, adds his logins count and updates ip
        $userDetails[ 2 ]  = TRUE;    
        $userDetails[ 3 ]  = (int)$userDetails[ 3 ]++;
        $userDetails [ 4 ] = $_SERVER['REMOTE_ADDR'];
        
        //Sets users session
        session_start();
        $_SESSION[ 'username' ] = $username;

        updateUser( $username, $userDetails);
        
        //Success
        header("HTTP/1.1 200 User logged in successfully");
        exit();
    }

    function logUserOff( $username ){

        $userDetails = getUser( $username );

        if ( ! isset( $_SESSION[ 'username' ] ) ) {
            header("HTTP/1.1 400 user allready offline");
            exit(); 
        }

        $userDetails[ 2 ] = FALSE;
        updateUser( $username, $userDetails);

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


