import React from 'react';
import Button from '../ui/Button';
import { logOffRequest } from '../userRequests';

export default function LogOffButton( { session, setSession } ) {

    const onLogOff = () => {
        logOffRequest( session, setSession )
    }

    return(
        <Button onClick={onLogOff} size="sm"> Log off</Button>
    );
}
