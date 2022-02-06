
//Sends a signup request to server and updates current user
const signUpRequest = async( username, password, password_confirm, setUsername) => {

    const user = {
        username,
        password,
        password_confirm,
    }

    await fetch( 'http://localhost:8000/signup.php' ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( user )
    }).then( res => {

        const status = res.status

        //Sets current user
        if( status === 201){
            setUsername( username )
            return
        }

        if( status === 409 ){
            alert( 'Username is taken' )
            return
        }

        alert( 'Please check fields' )


    })
}

//Sends a login request to server and updates current user
const logOnRequest = async( username, password, setUsername ) => {

    await fetch( `http://localhost:8000/login.php?username=${username}&password=${password}` ,{
        method: 'GET'
    })
    .then( res => {

        if ( res.status === 200) {

            setUsername( username )
            return
        }
        
        alert( 'check Fields')
    })
}

//Sends logOff request to server and removes current user
const logOffRequest = async( setUsername ) => {

    await fetch( `http://localhost:8000/logoff.php`, {
        method: 'GET'
    }).then( res => {
        setUsername( null )
    })
}

export{ 
    logOffRequest,
    logOnRequest,
    signUpRequest
}


