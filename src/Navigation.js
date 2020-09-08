import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Confetti from 'react-confetti'

class Navigation extends Component {

    render() {
        let gameComplete = this.props.people.find(person => person.status === 'saved')

        if (gameComplete) {
            return (
                <div className='gameCompleteNavigation'>
                    <Link to="/score"><button className='scoreButton'><i>Save Your Superhero Score </i><span className='superheroGameEmoji' role='img' aria-label='superhero person emoji'> 🦸 </span></button></Link>
                    < Confetti 
                        tweenDuration={1000}
                    />
                </div>
            )
        } else if (window.location.pathname === '/play') {
            return (
                <div className='gameInProgressNavigation'>
                    <button className='inProgressButton' disabled> ☟ <i>Game in Progress</i> ☟ </button>
                </div>
                
            )
        } else {
            return (
                <div className='gameIncompleteNavigation'>
                    <button className='playButton' onClick={this.props.startGameButton}><i>Start Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps)(Navigation)