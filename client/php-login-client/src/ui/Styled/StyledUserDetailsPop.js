import styled from "styled-components";

const StyledUserDetailsPop = styled.div`
    background: #546EFE;
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
    padding: 2vh 0.5vw;
    border-radius: 3px;

    & > i{
        width: 2vw;
        color: #ffff;
        margin-left: auto;
        cursor: pointer;
    }

    & > div {
       width: 100%;
    }

    & > div > h4  {
        color: #ffff;
    }
`

export default StyledUserDetailsPop