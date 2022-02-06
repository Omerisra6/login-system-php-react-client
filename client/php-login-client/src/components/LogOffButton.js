import React from 'react';
import Button from '../ui/Button';
import { logOffRequest } from '../userRequests';

export default function LogOffButton( { setUsername } ) {

    const onLogOff = () => {
        logOffRequest( setUsername )
    }

    return(
        <Button onClick={onLogOff}/> 
    );
}
