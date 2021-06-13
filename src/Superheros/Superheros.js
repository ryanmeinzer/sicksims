import React from 'react'

const Superheros = (props) => {
    const allSuperheros = () => {

        let sortedSuperheros = props.mappedSuperheros.sort((a, b) => b.score - a.score)

        return sortedSuperheros.map(superhero => <li key={superhero.id}>{superhero.name} with a score of {superhero.score}</li>)

    }

    return (
        <div>
            <ol>{allSuperheros()}</ol>
        </div>
    )
}

export default Superheros