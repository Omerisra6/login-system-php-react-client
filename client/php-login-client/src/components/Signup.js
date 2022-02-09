import StyledFormWrapper from '../ui/Styled/StyledFormWrapper';
import StyledFormContainer from '../ui/Styled/SytledFormContainer';
import SignupForm from './SignupForm';

export default function Signup( { setSigned, setSession } ) {

    const hideSignup = ( e ) => {
        e.preventDefault()
        setSigned( true )
    }

    return(

        <StyledFormWrapper>
            <StyledFormContainer>
                <h1> Signup for new account </h1>
                <h3> Don't have an account?  <span onClick={hideSignup}> Signup </span></h3>
                <SignupForm setSession={setSession}/>
            </StyledFormContainer>
        </StyledFormWrapper>
    );
}
