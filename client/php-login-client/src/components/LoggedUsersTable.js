import React from 'react';
import UserInTable from './UserInTable';

export default function LoggedUsersTable( { loggedUsers } ) {
    return(
        <table>
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
                    return <UserInTable  userDetails={user}/>
                })}
            </tbody>
        </table>
    );
}
