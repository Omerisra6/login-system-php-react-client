import React, { useEffect, useState } from 'react';
import StyledMain from '../ui/Styled/StyledMain';
import { getLoggedUsersRequest } from '../userRequests';
import LoggedUsersTable from './LoggedUsersTable';
import TopMain from './TopMain';

export default function Main( { setSession, session } ) {

    const [ loggedUsers, setLoggedUsers ] = useState( [] )

    useEffect( () => { 

        let interval = setInterval( () => { getLoggedUsersRequest( setLoggedUsers, session ) }, 3000)

        return () => clearInterval( interval )

    }, [ session ])

    return(
        <StyledMain>
            <TopMain session={session} setSession={setSession} usersNumber={ loggedUsers.length }/>
            <LoggedUsersTable session={session} loggedUsers={loggedUsers}/> 
        </StyledMain>
    );
}
