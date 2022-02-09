import React from 'react';
import StyledUsersNumber from '../ui/Styled/StyledUsersNumber';

export default function UsersNumber ( { usersNumber } ) {
    return(
        <StyledUsersNumber display="flex">
            <h3> All users </h3>
            <h5> { usersNumber }</h5>
        </StyledUsersNumber>
    ) 
}
