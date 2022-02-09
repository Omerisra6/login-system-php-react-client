import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function LoginOrSignup( { setSession } ) {

    const [ signed, setSigned ] = useState( true )
    return(
        <>
            { signed ? <Login setSigned={ setSigned } setSession={ setSession }/> : <Signup setSigned={ setSigned } setSession={setSession}/>}
        </>
    );
}
