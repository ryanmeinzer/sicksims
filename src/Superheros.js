import React, { Component } from 'react'

class Superheros extends Component {
    allSuperheros = () => {
        return this.props.mappedSuperheros.map(superhero => <p key={superhero.id}>{superhero.name} with a score of {superhero.score}</p>)
    }

    render() {
        return (
            <div>
                {this.allSuperheros()}
            </div>
        )
    }
}

export default Superheros