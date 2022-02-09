import React, { useEffect, useState } from 'react';
import { getLoggedUsersRequest } from '../userRequests';
import LogOffButton from './LogOffButton';

export default function Main( { setSession, session } ) {

    const [ loggedUsers, setLoggedUsers ] = useState( [] )

    useEffect( () => { 

        let interval = setInterval( () => { getLoggedUsersRequest( setLoggedUsers, session ) }, 6000)

        return () => clearInterval( interval )

    }, [])

    return(
        <LogOffButton setSession={setSession}/>

    );
}
