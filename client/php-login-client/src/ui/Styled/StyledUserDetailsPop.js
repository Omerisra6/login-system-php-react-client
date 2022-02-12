import styled from "styled-components";

const StyledUserDetailsPop = styled.div`
    background: #ffff;
    height: fit-content;
    width: 40vw;
    position: absolute;
    top: 50%;   
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    padding: 2vh 1vw;

    & > i{
        width: 2vw;
        color: #546EFE;
        margin-left: auto;
        cursor: pointer;
    }

    & > div {
       width: 100%;
    }

    & > div > h4  {
        color: #B1B5C4;
    }
`

export default StyledUserDetailsPop