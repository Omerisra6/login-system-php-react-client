
import StyledFormWrapper from '../ui/StyledFormWrapper';
import StyledFormContainer from '../ui/SytledFormContainer';
import LoginForm from './LoginForm';

export default function Login( { setSigned, setSession } ) {

    const showSignup = ( e ) => {
        e.preventDefault()
        setSigned( false )
    }


    return(
        <StyledFormWrapper>
            <StyledFormContainer>
                <h1> Login to your account </h1>
                <h3> Don't have an account?  <span onClick={showSignup}> Signup </span></h3>
                <LoginForm  setSession={setSession}/>
              
            </StyledFormContainer>
        </StyledFormWrapper>
    )
}
