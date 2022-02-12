import styled from 'styled-components';

const StyledLoggedUsersTable = styled.table`
    width: 100%;

    & > tbody{
        text-align: center;
    }

    & > thead > tr > th:hover {
        cursor: pointer;
        background-color: #F2F3F7;
    }
`

export default StyledLoggedUsersTable