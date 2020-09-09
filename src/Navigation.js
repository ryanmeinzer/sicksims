import React, { Component } from 'react'

class Navigation extends Component {

    // hard refresh to reset state for game restart
    startGame = () => {
        window.location.replace('/play#InPublicContainer')
    }

    render() {
        return (
            <div className='gameIncompleteNavigation'>
                <button className='playButton' onClick={this.startGame}><i>Start Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
            </div>
        )
    }
}

export default Navigation