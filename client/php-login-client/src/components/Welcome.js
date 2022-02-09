import React, { useEffect, useState } from 'react';
import { getUsername } from '../userRequests';

export default function Welcome( { session } ) {

    const [ username, setUsername ] = useState( '' )

    useEffect( () => {

        getUsername( setUsername, session )

    }, [ session ])

    return (
        <h1> Welcome {username} </h1>
    );
}
