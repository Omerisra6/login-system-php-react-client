import React, { useRef } from 'react';
import Button from '../ui/Button';
import Form from '../ui/Form';
import Input from '../ui/Input';
import { logOnRequest } from '../userRequests';

export default function LoginForm( { setUsername } ) {

    const usernameRef = useRef( null )
    const passwordRef = useRef( null )

    const onLogin = async ( e ) => {
        e.preventDefault()
        await logUser()
    }

    const logUser = async ( ) => {
        const username = usernameRef.current.value.trim()
        const password = passwordRef.current.value.trim()

        logOnRequest( username, password, setUsername )      
    }


    return(
        <Form  gap="2vh" onSumbit={onLogin}>
            <label htmlFor="username"/>
            <Input  type="text" placeholder="Username" size="fit" name="username" id="username" inputRef={usernameRef}/>
            <label htmlFor="password"/>
            <Input type="password" placeholder="Password" size="fit" name="password" id="password" inputRef={passwordRef}/>
            <Button type="sumbit" size="fit">Login</Button>
        </Form>
    );
}
