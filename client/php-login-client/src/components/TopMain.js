import StyledTopMain from '../ui/Styled/StyledTopMain';
import LogOffButton from './LogOffButton';
import UsersNumber from './UsersNumber';
import Welcome from './Welcome';

export default function TopMain( { session,  setSession, usersNumber } ) {

    return(
        <StyledTopMain>
            <UsersNumber usersNumber={ usersNumber }/>
            <Welcome session={session} setSession={setSession} />
            <LogOffButton session={session} setSession={setSession}/>
        </StyledTopMain>
    );

}
