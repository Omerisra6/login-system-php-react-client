import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const sizesMap ={ 
    sm: '0.6vw',
    md: '1vw',
    lg: '1.2vw',
}

const colorsMap = {
    grey: {
        color: '#5e6591',
        hover: '#4b78ff'
    },
    blue:{
        color: '#4b78ff',
        hover: '#5e6591'
    },
    white:{
        color:'#fff',
        hover:'#5e6591'
    }

}


const StyledIcon = styled.i`
    font-size: ${ ( { size } ) => sizesMap[ size ]};
    color: ${( { color } ) => colorsMap[ color ].color};

    &:hover {
        color: ${( { color } ) => colorsMap[ color ].hover};
    }

    cursor: pointer;
`

StyledIcon.defaultProps = {
    size: 'md',
    color: 'grey'
}

StyledIcon.propTypes = {
    size: PropTypes.oneOf([
        'sm',
        'md',
        'lg',
    ]),
    color: PropTypes.oneOf([
        'grey',
        'blue',
        'white'
    ]),
}



export default function Icon(props) {

    return (
        <StyledIcon color={props.color} size={ props.size} className={`fa fa-${props.iconClass} ${props.className}`} onClick={props.onClick}></StyledIcon>
    )
}
