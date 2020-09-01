import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSuperhero } from '../redux/actions'
import { Link } from 'react-router-dom'

class SuperheroInput extends Component {

    state = {
        name: ''
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value,
            score: this.props.score
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.dispatchedAddSuperhero(this.state)
        this.setState({
            name: ''
        });
        alert(`Your Superhero score of ${this.state.score} has been saved, ${this.state.name}!`)
        window.location.replace('/superheros')
    }

    render() {
        return (
            <div className='SuperheroForm'>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Your Superhero Name"
                        onChange={(event) => this.handleOnChange(event)} required />
                    <span>with a score of {this.props.score}</span>
                    <input type="submit" />
                </form>
                <div className='RestartGame'>
                    or <Link to="/"><button className='playButton'><i>Restart Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button></Link>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedAddSuperhero: (superhero) => dispatch(addSuperhero(superhero))
})

export default connect(null, mapDispatchToProps)(SuperheroInput)