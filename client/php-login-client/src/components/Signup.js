import StyledLoginContainer from '../ui/StyledLoginContainer';
import StyledLogin from '../ui/SytledLogin';
import SignupForm from './SignupForm';

export default function Signup( { setSigned, setUsername } ) {

    const hideSignup = ( e ) => {
        e.preventDefault()
        setSigned( true )
    }

    return(

        <StyledLoginContainer>
            <StyledLogin>
                <h1> Signup for new account </h1>
                <h3> Don't have an account?  <a onClick={hideSignup}> Signup </a></h3>
                <SignupForm setUsername={setUsername}/>
            </StyledLogin>
        </StyledLoginContainer>
    );
}
