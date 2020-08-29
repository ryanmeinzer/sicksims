import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSuperhero } from '../redux/actions'

class SuperheroInput extends Component {

    state = {
        name: '',
        score: this.props.score
        // score: parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10)
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value, 
            score: parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10)
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.dispatchedAddSuperhero(this.state)
        this.setState({
            name: ''
        });
        alert(`Your Superhero score of ${this.state.score} has been saved, ${this.state.name}!`)
        window.location.replace('/')
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
            </div>
        )
    }
}

// const mapStateToProps = ({ people }) => ({ people })
const mapStateToProps = state => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedAddSuperhero: (superhero) => dispatch(addSuperhero(superhero))
})
// const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroInput)