import React, { useEffect, useState } from 'react';
import { getUsername } from '../userRequests';

export default function Welcome( { session, setSession } ) {

    const [ username, setUsername ] = useState( '' )

    useEffect( () => {

        getUsername( session, setSession, setUsername )

    }, [ session ])

    return (
        <h1> Welcome {username} </h1>
    );
}
