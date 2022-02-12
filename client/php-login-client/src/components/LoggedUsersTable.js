import React, { useState } from 'react';
import StyledLoggedUsersTable from '../ui/Styled/StyledLoggedUsersTable';
import UserDetailsPop from './UserDetailsPop';
import UserInTable from './UserInTable';

export default function LoggedUsersTable( { session, setSession, loggedUsers } ) {

    const [ user, setUser ] = useState( '' )

    return(
        <div display="flex-column">

            <StyledLoggedUsersTable>
                <thead>
                    <tr>
                        <th> Username </th>
                        <th> Login Time </th>
                        <th> Last Update </th>
                        <th> User's IP </th>
                    </tr>
                </thead>
                <tbody>
                    { loggedUsers.map( user => {
                        return <UserInTable session={session} setSession={setSession} setUser={setUser}  userDetails={user}/>
                    })}
                </tbody>
            </StyledLoggedUsersTable>

           { user && <UserDetailsPop user={user} setUser={setUser}/> }
        </div>


    
    );
}
