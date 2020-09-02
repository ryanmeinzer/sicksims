import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class HomeNav extends Component {

    render() {
        let gameComplete = this.props.people.find(person => person.status === 'saved')

        if (gameComplete) {
            return (
                <div className='gameCompleteNavigation'>
                    <Link to="/superheros"><button className='superherosButton'><i>See Top Superheros</i></button></Link><button className='playButton' onClick={this.props.startGameButton}><i>Start Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button><Link to="/score"><button className='scoreButton'><i>Save Your Score</i></button></Link>
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

export default connect(mapStateToProps)(HomeNav)