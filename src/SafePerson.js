import React from 'react'

const SafePerson = (props) => {

    return(
        <span className='safePersonEmoji' role='img' aria-label='safe person emoji' id={props.id} style={{ cursor: 'not-allowed' }}>😷</span>
    )

}

export default SafePerson
