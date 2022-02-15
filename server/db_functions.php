<?php

    //Adds user to DB
    function addUser( $username, $password ){

        if ( session_status() === PHP_SESSION_NONE ) {
        
            session_start();
        }
        $userDetailsPath = getUserDetailsPath( $username );
        $handle = fopen( $userDetailsPath, 'w');
        
        $hashed_password = password_hash( $password, PASSWORD_DEFAULT);
        $login_count     = 0;
        $ip              = $_SERVER['REMOTE_ADDR'];
        $user_agent      = $_SERVER['HTTP_USER_AGENT'];
        $last_action     = date("Y-m-d H:i:s");     
        $last_login      = date("Y-m-d H:i:s");  
        $register_time   = date("Y-m-d H:i:s");  
        
        $user = [ 
            $username, $hashed_password, 
            $login_count, $ip, 
            $user_agent, $last_action,
            $last_login, $register_time
        ];

        fputcsv( $handle, $user, ','); 
        fclose( $handle );

        $_SESSION[ 'username' ] = $username;

    }

    //Verify user and updates his details
    function logUser( $username, $password ){

        if ( session_status() === PHP_SESSION_NONE ) {
        
            session_start();
        }

        $userDetails = getUser( $username );

        //Verifing password
        $db_password = $userDetails[ 1 ];
        $isPasswordCorrect = password_verify( $password, $db_password );

        if( ! $isPasswordCorrect ){
            header("HTTP/1.1 400 Wrong password");
            exit();           
        }

        //updates user data
        updateUser( $username );

        //sets use session
        $_SESSION[ 'username' ] = $username;
        
        //Success
        header("HTTP/1.1 200 User logged in successfully");
        echo( json_encode( session_id() ) );
        exit();
    }

    //Deletes session if exists
    function logUserOff(){

        if ( session_status() === PHP_SESSION_NONE ) {
        
            session_start();
        }

        markUserOffline();

        session_destroy();

        header("HTTP/1.1 200 Logged off");
        exit();              
    }
    
    //Retuens all user who where active in the last three minutes
    function getLoggedUsers(){

        if ( session_status() === PHP_SESSION_NONE ) {
        
            session_start();
        }

        $loggedUsers = array();

        $usersFolder =  preg_grep('/^([^.])/', scandir( __DIR__ . '/users' ));

        foreach ( $usersFolder  as $userFile ) {
            
            $userDetails = getUserFromFile(  __DIR__ . '/users/' . $userFile );

            //Skipps offline users
            if ( $userDetails[ 5 ] === 'offline') {
                continue;
            }

            //Updates the current user
            $username = $userDetails[ 0 ];
            if ( $_SESSION[ 'username' ] === $username ) {
                updateUser();
                continue;
            }

            //removes password from user
            $userDetails = removePassword( $userDetails );


            //Adds only user which was active in the last three minutes
            $lastTimeActive = strtotime( $userDetails[ 4 ] );
            $minutes = 3;

            if ( time() - $lastTimeActive  <  $minutes * 60 ){
                array_push( $loggedUsers, $userDetails );

            }
            
        }

        return  $loggedUsers;

    }

    //Updates the user details on request
    function updateUser( $currentUsername = null ){

        //Sets username if it not passed
        if (! isset( $currentUsername ) ) {
            $currentUsername = $_SESSION[ 'username' ];

        }

        $userDetailsPath =  getUserDetailsPath( $currentUsername );
        $handle = fopen( $userDetailsPath, 'a+' );

        $userDetails = getUser( $currentUsername );


        //if it is user login request increase login count and last login time
        if ( ! isset( $_SESSION[ 'username' ] ) ) {
            $userDetails [ 2 ] = (int)$userDetails[ 2 ] + 1;
            $userDetails [ 6 ] =  date("Y-m-d H:i:s"); 
        }

        $userDetails [ 3 ] = $_SERVER['REMOTE_ADDR'];
        $userDetails [ 4 ] = $_SERVER['HTTP_USER_AGENT'];
        $userDetails [ 5 ] = date("Y-m-d H:i:s");     

        file_put_contents( $userDetailsPath, "" );
        fputcsv( $handle, $userDetails, ','); 

        fclose( $handle );
    }

    //Marks the logged user as offline
    function markUserOffline(){

        if ( session_status() === PHP_SESSION_NONE ) {
        
            session_start();
        }
        $currentUsername = $_SESSION[ 'username' ];
        $userDetailsPath =  getUserDetailsPath( $currentUsername );

        $handle = fopen( $userDetailsPath, 'a+' );
        $userDetails = getUser( $currentUsername );

        $userDetails [ 5 ] = "offline";
        file_put_contents( $userDetailsPath, "" );
        fputcsv( $handle, $userDetails, ','); 

        fclose( $handle );

    }

    //Gets user details from username
    function getUser( $username ){
        $userDetailsPath =  getUserDetailsPath( $username );
        
        return getUserFromFile( $userDetailsPath );
    }

    //Returns user details by file path
    function getUserFromFile( $filePath ){

        $handle = fopen( $filePath, 'r' );

        $userDetails = fgetcsv( $handle ) ;
        fclose( $handle );

        return $userDetails;
    }

    //Returns path by username
    function getUserDetailsPath( $username ){
        return "./users/" . $username . ".csv";
    }
    
    //Returns user array without password
    function removePassword( $userDetails ){

        $formattedUser = array();

        //removes password
        for ($i=0; $i < sizeof( $userDetails ); $i++) { 

            if( $i !== 1 ){
                array_push( $formattedUser, $userDetails[ $i ]);
            } 
        }

        return $formattedUser;
    }
?>