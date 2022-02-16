import styled from "styled-components";
import React from "react";

const StyledForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${ ( { gap } ) => gap };
`
export default function Form( { action, method, onSumbit, gap, children } ) {


    return(
        <StyledForm action={action} method={method} onSubmit={onSumbit} gap={gap} >
            { children }
        </StyledForm>
    ); 
}
