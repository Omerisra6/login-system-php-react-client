import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const sizesMap ={ 
    fit: '90%',
    sm: '8vw',
    md: '28vw',
    lg: '40vw',
}

const colorsMap = {
    light:{
        color: "#546EFE",
        border: "#546EFE",
        text: "#fff",
    },
    dark:{
        color: "#202342",
        border: "#1f2242",
        text: "#fff",
    }
}


const StyledButton = styled.button`    
    width: ${ ( { size } ) => sizesMap[ size ]};
    background-color: ${ ( { color } ) => colorsMap[ color ].color};
    border: 2px solid ${ ( { color } ) => colorsMap[ color ].border};
    color: ${ ( { color } ) => colorsMap[ color ].text};
    overflow: hidden;
    padding: 2vh 1vw;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

StyledButton.propTypes = {
    size: PropTypes.oneOf([
        'fit',
        'xs',
        'sm',
        'md',
        'lg',
    ]),

    color: PropTypes.oneOf([
        'dark',
        'light'
    ]),


}

StyledButton.defaultProps = {
    size: 'sm',
    color: 'light'
};

export default function Button( { className, type, onClick, size, color, children } ) {
    return(
        <StyledButton className={className} type={type} onClick={onClick} size={size} color={color}>
            { children }
        </StyledButton>
    );
}
