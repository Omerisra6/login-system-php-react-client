import styled from 'styled-components';

const StyledLoggedUsersTable = styled.table`
    width: 100%;

    & > tbody{
        text-align: center;
    }

    & > tbody > tr:hover {
        cursor: pointer;
        background-color: #F2F3F7;
    }
`

export default StyledLoggedUsersTable