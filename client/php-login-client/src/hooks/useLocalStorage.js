import React, { useEffect, useState } from 'react'

const PERFIX = 'react-login-system-client'

export default function useLocalStorage( key, intialValue) {

    const perfixKey = PERFIX + '-' + key
    const [ value, setValue] = useState( () => setValueFromLocalStorage( perfixKey, intialValue ) )
    
    //Sets the new value in local storage
    useEffect(() => {
        localStorage.setItem( perfixKey, JSON.stringify( value ))
        
    }, [perfixKey, value])

    //Returns the new value and his set function (as a use state)
    return [value, setValue]
}

function setValueFromLocalStorage( key, initialValue ) {

    const jsonValue = localStorage.getItem( key )

    if(  jsonValue ){
        return JSON.parse( jsonValue )
    }

    if ( typeof initialValue === 'function' ) {
        return initialValue()
    }

    return initialValue

}
