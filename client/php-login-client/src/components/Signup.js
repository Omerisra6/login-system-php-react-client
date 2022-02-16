import StyledFormWrapper from '../ui/Styled/StyledFormWrapper';
import StyledLink from '../ui/Styled/StyledLink';
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
                <h3> Allready have an account  <StyledLink onClick={hideSignup}> Login </StyledLink></h3>
                <SignupForm setSession={setSession}/>
            </StyledFormContainer>
        </StyledFormWrapper>
    );
}
