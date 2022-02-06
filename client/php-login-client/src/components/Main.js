import React from 'react';
import LogOffButton from './LogOffButton';

export default function Main( { username, setUsername } ) {
    return(
        <LogOffButton setUsername={setUsername}/>
    );
}
