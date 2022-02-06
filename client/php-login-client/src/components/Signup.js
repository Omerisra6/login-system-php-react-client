import StyledFormWrapper from '../ui/StyledFormWrapper';
import StyledFormContainer from '../ui/SytledFormContainer';
import SignupForm from './SignupForm';

export default function Signup( { setSigned, setUsername } ) {

    const hideSignup = ( e ) => {
        e.preventDefault()
        setSigned( true )
    }

    return(

        <StyledFormWrapper>
            <StyledFormContainer>
                <h1> Signup for new account </h1>
                <h3> Don't have an account?  <span onClick={hideSignup}> Signup </span></h3>
                <SignupForm setUsername={setUsername}/>
            </StyledFormContainer>
        </StyledFormWrapper>
    );
}
