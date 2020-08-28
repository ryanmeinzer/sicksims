import React, { Component } from 'react'

class Superheros extends Component {
    allSuperheros = () => {

        let sortedSuperheros = this.props.mappedSuperheros.sort((a, b) => b.score - a.score)

        return sortedSuperheros.map(superhero => <li key={superhero.id}>{superhero.name} with a score of {superhero.score}</li>)

    }

    render() {
        return (
            <div>
                <ol>{this.allSuperheros()}</ol>
            </div>
        )
    }
}

export default Superheros