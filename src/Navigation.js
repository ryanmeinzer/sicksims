import React, { Component } from 'react'

class Navigation extends Component {

    render() {
        return (
            <div className='gameIncompleteNavigation'>
                <button className='playButton' onClick={this.props.startGameButton}><i>Start Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
            </div>
        )
    }
}

export default Navigation