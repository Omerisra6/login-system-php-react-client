import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const sizesMap ={ 
    fit: '90%',
    sm: '12vw',
    md: '28vw',
    lg: '40vw',
}

const colorsMap = {
    light:{
        color: "#F8F8F8",
        border: "#F8F8F8",
        text: "#0000",
        focus: "#ffff"
    },
    dark:{
        color: "#202342",
        border: "#1f2242",
        text: "#fff",
        focus: "#202342"
    }
}


const StyledInput = styled.input`    
    width: ${ ( { size } ) => sizesMap[ size ] };
    background-color: ${ ( { color } ) => colorsMap[ color ].color };
    border: 2px solid ${ ( { color } ) => colorsMap[ color ].border };
    border-radius: 8px;
    overflow: hidden;
    padding: 1vh 0.5vw;
    justify-content: flex-start;
    align-items: center;

    &:placeholder{
        font-size: 1vw;
    }

    &:focus{
        background-color: ${ ( { color } ) => colorsMap[ color ].focus };
    }
`

StyledInput.propTypes = {
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

StyledInput.defaultProps = {
    size: 'sm',
    color: 'light'
};

export default function Input( { className, id, name, type, size, color, placeholder, inputRef } ) {

    return (
        <StyledInput name={name} type="text" className={className } id={id} type={type} size={size} color={color} placeholder={placeholder} ref={inputRef}/> 
    )
}

