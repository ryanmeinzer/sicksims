import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSuperhero } from '../redux/actions'
import RePlayButton from '../RePlayButton.js'
import Filter from 'bad-words-plus'

const filter = new Filter({ firstLetter: true, lastLetter: true })

class SuperheroInput extends Component {

    state = {
        name: ''
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value !== '' ? filter.clean(event.target.value) : event.target.value,
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
        // window.location.replace('/superheros')
        this.showSuperheros()
    }

    showSuperheros = () => {
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
                    <button type= "submit" className='scoreButton'><i>Save Your Superhero Score </i><span className='superheroGameEmoji' role='img' aria-label='superhero person emoji'> 🦸 </span></button>
                </form>
                or < RePlayButton />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedAddSuperhero: (superhero) => dispatch(addSuperhero(superhero))
})

export default connect(null, mapDispatchToProps)(SuperheroInput)