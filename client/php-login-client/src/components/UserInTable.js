

export default function UserInTable( { userDetails } ) {

    const username   = userDetails[ 0 ]
    const loginTime  = userDetails[ 5 ]
    const lastUpdate = userDetails[ 4 ]
    const ip         = userDetails[ 2 ]
    return (
        <tr key={ username }>
            <td> { username } </td>
            <td> { loginTime } </td>
            <td> { lastUpdate } </td>
            <td> { ip } </td>
        </tr>
    );
}
