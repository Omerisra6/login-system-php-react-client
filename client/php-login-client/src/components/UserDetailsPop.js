import React from 'react'
import Container from '../ui/Container';
import StyledUserDetailsPop from '../ui/Styled/StyledUserDetailsPop';
import StyledUserDetailsPopWrapper from '../ui/Styled/StyledUserDetailsPopWrapper';

export default function UserDetailsPop( { user, setUser } ) {

    const username     = user[ 0 ]
    const loginCount   = user[ 1 ]
    const userAgent    = user[ 3 ]
    const registerTime = user[ 6 ]

    const closePop = () =>{
        setUser( null )
    }

    return(
        <StyledUserDetailsPopWrapper>
            <StyledUserDetailsPop>
                <i className='fa fa-close' onClick={ closePop }></i>
                
                <h1> { username } details</h1>

                <Container display="flex-column" gap="1vh">
                    <h3> UserAgent: </h3>
                    <h4> { userAgent } </h4>
                </Container>
                
                <Container display="flex-column" gap="1vh">
                    <h3> Register time:</h3>
                    <h4> { registerTime } </h4>
                </Container>

                <Container display="flex-column" gap="1vh">
                    <h3> Login count: </h3>
                    <h4> { loginCount } </h4>
                </Container>
             
            </StyledUserDetailsPop>
        </StyledUserDetailsPopWrapper>

       
    );
}

