import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display : ${ ( { display } ) => display  ? 'flex' : 'block' };
    flex-direction: ${ ( { display } ) => display === 'flex-column' ? 'column' : 'row' };
    gap: ${ ( { gap } ) => gap };
    align-items: ${ ( { align} ) => align };
    justify-content: ${ ( { justify} ) => justify };
`



export default function Container( props  ) {
    return (
        <StyledContainer display={props.display} key={props.className} className={props.className} width="max" gap={props.gap} align={props.align} justify={props.justify}>
            {props.children}
        </StyledContainer>
    )
}
