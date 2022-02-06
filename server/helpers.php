<?php

    function validateUserDetails( $username, $password, $password_confirm ){

        if ( ! isset( $username ) || !  isset( $password ) || ! isset( $password_confirm )) {
            header("HTTP/1.1 400 Please fill al fields");
            exit();
        }
    
        if( $password !== $password_confirm){
            header("HTTP/1.1 400 Passwords dont match");
            exit();
        }
    
        if ( isUserExists( $username) ) {
            header("HTTP/1.1 409 username is taken");
            exit();
        }


    }

    function isUserExists( $username ){

        $userDetailsPath =  getUserDetailsPath( $username );
        return file_exists( realpath( $userDetailsPath ) ) ;
    }

    


?>