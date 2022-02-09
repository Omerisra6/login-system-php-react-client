import React, { useRef } from 'react';
import { signUpRequest } from '../userRequests';
import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'



export default function SignupForm( { setSession } ) {

    const usernameRef        = useRef( null )
    const passwordRef        = useRef( null )
    const passwordConfirmRef = useRef( null )


    const onSignup = async ( e ) => {

        e.preventDefault()
        const username        = usernameRef.current.value.trim()
        const password        = passwordRef.current.value.trim()
        const passwordConfirm = passwordConfirmRef.current.value.trim()

        await signUpRequest( username, password, passwordConfirm, setSession)
    }

    return(
        <Form gap="2vh" onSumbit={onSignup}>
            <label htmlFor="username"/>
            <Input  type="text" placeholder="Username" size="fit" name="username" id="username" inputRef={usernameRef}/>

            <label htmlFor="password"/>
            <Input type="password" placeholder="Password" size="fit" name="password" id="password" inputRef={passwordRef}/>

            <label htmlFor="confirm-password"/>
            <Input type="password" placeholder="Confirm Password" size="fit" name="confirm_password" id="confirm_password" inputRef={passwordConfirmRef}/>
            
            <Button type="sumbit" size="fit">Signup</Button>
        </Form>
    );
}

