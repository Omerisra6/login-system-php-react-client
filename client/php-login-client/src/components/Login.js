
import StyledFormWrapper from '../ui/Styled/StyledFormWrapper';
import StyledLink from '../ui/Styled/StyledLink';
import StyledFormContainer from '../ui/Styled/SytledFormContainer';
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
                <h3> Don't have an account?  <StyledLink onClick={showSignup}> Signup </StyledLink></h3>
                <LoginForm  setSession={setSession}/>
              
            </StyledFormContainer>
        </StyledFormWrapper>
    )
}
