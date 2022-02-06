import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function LoginOrSignup( { setUsername } ) {

    const [ signed, setSigned ] = useState( true )
    return(
        <>
            { signed ? <Login setSigned={ setSigned } setUsername={ setUsername }/> : <Signup setSigned={ setSigned } setUsername={setUsername}/>}
        </>
    );
}
