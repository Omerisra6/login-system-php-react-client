import { getUser } from "../userRequests";


export default function UserInTable( { session, setSession, setUser, userDetails } ) {

  

    const username   = userDetails[ 0 ]
    const loginTime  = userDetails[ 5 ]
    const lastUpdate = userDetails[ 4 ]
    const ip         = userDetails[ 2 ]

    const handleOnClick = async () =>{
        getUser( session, username, setSession, setUser)
    }

    return (
        <tr key={ username } onClick={ handleOnClick }>
            <td> { username } </td>
            <td> { loginTime } </td>
            <td> { lastUpdate } </td>
            <td> { ip } </td>
        </tr>
    );
}
