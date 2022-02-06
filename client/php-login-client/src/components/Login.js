
import StyledLoginContainer from '../ui/StyledLoginContainer';
import StyledLogin from '../ui/SytledLogin';
import LoginForm from './LoginForm';

export default function Login( { setSigned, setUsername } ) {

   

    const showSignup = ( e ) => {
        e.preventDefault()
        setSigned( false )
    }


    return(
        <StyledLoginContainer>
            <StyledLogin>
                <h1> Login to your account </h1>
                <h3> Don't have an account?  <span onClick={showSignup}> Signup </span></h3>
                <LoginForm setUsername={setUsername}/>
              
            </StyledLogin>
        </StyledLoginContainer>
    )
}
