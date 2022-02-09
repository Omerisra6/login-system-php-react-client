import React, { useEffect, useState } from 'react';
import { getLoggedUsersRequest } from '../userRequests';
import TopMain from './TopMain';

export default function Main( { setSession, session } ) {

    const [ loggedUsers, setLoggedUsers ] = useState( [] )

    useEffect( () => { 

        let interval = setInterval( () => { getLoggedUsersRequest( setLoggedUsers, session ) }, 6000)

        return () => clearInterval( interval )

    }, [ session ])

    return(
        <>
            <TopMain session={session} setSession={setSession} usersNumber={ loggedUsers.length }/>
        </>
    );
}
