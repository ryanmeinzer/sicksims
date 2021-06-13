import React from 'react'

const Navigation = () => {

    // hard refresh to reset state for game restart
    const startGame = () => {
        window.location.replace('/play#InPublicContainer')
    }

    return (
        <div className='gameIncompleteNavigation'>
            <button className='playButton' onClick={startGame}><i>Start Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
        </div>
    )
    
}

export default Navigation