import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import Logo from './Logo.js'

const Header = () => {

    const people = useSelector(state => state.people)

    let gameComplete = people.find(person => person.status === 'saved')

    if (gameComplete || window.location.pathname === '/score' || window.location.pathname === '/superheros' || window.location.pathname === '/stats') {
        return (
            < Logo />
        )
    } else {
        return (
            <>
                < Logo />
                <div className='Header'>
                    <div className='gameDirections'>
                        <h6 className='desktop-only'><span className='emphasizedText'>Click</span> naive people <span role="img" aria-label="naive person emoji">🥴</span> to make them safe <span role="img" aria-label="safe person emoji">😷</span> before they become sick <span role="img" aria-label="sick person emoji">🤢</span> <br></br> <span className='emphasizedText'>Drag & Drop</span> sick people <span role="img" aria-label="sick person emoji">🤢</span> into quarantine for recovery <span role="img" aria-label="quarantined person emoji">🤒</span> before they become terminal <span role="img" aria-label="terminal person emoji">😵</span></h6>

                        <h6 className='mobile-only'><span className='emphasizedText'>Tap</span> naive people <span role="img" aria-label="naive person emoji">🥴</span> to make them safe <span role="img" aria-label="safe person emoji">😷</span> before they become sick <span role="img" aria-label="sick person emoji">🤢</span>. <br></br> <span className='emphasizedText'>Tap</span> sick people <span role="img" aria-label="sick person emoji">🤢</span> to quarantine them for recovery <span role="img" aria-label="quarantined person emoji">🤒</span> before they become terminal <span role="img" aria-label="terminal person emoji">😵</span>.</h6>
                    </div>
                </div>
            </>
        )
    }
}

export default Header