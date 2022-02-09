
//Sends a signup request to server and updates current user
const signUpRequest = async( username, password, password_confirm, setSession) => {

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
    }).then( async res => {

        const status = res.status

        //Sets current user
        if( status === 201){
            const sessionId = await res.json()
            setSession( sessionId  )
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
const logOnRequest = async( username, password, setSession ) => {

    await fetch( `http://localhost:8000/login.php?username=${username}&password=${password}` ,{
        method: 'GET'
    })
    .then( async res => {

        if ( res.status === 200) {

            //Handles the session problem between domains
            const sessionId = await res.json() 
            setSession( sessionId )
            return
        }
        
        alert( 'check Fields')
    })
}

//Sends logOff request to server and removes current user
const logOffRequest = async( setSession ) => {

    await fetch( `http://localhost:8000/logoff.php`, {
        method: 'GET'
    }).then( res => {
        setSession( null )
    })
}

//Sends get logged users request and sets the logged users list
const getLoggedUsersRequest = async( setLoggedUsers, session ) => {
    await fetch( `http://localhost:8000/get_users.php?PHPSESSID=${session}`, {
        method: 'GET'
    }).then( ( res ) => res.json())
    .then( data => {

        if (data.length === 0 ) {
            setLoggedUsers( [] )
        }

        setLoggedUsers(data )
       
    })
    .catch( ( ) => {
        
        //Handles wrong session passed
        alert( 'Error: Please try logoff and in again' )
        return
    
    })
}

//Sends get username request to server and sets the username state
const getUsername = async( setUsername, session ) => {
    await fetch( `http://localhost:8000/get_username.php?PHPSESSID=${session}`, {
        method: 'GET'
    })
    .then((res) => res.json())
    .then( data => {

        setUsername( data )
    })
}


export{ 
    logOffRequest,
    logOnRequest,
    signUpRequest,
    getLoggedUsersRequest,
    getUsername,
}


