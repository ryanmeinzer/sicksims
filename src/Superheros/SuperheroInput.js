import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSuperhero } from '../redux/actions'
import RePlayButton from '../RePlayButton.js'
import Filter from 'bad-words-plus'

const filter = new Filter({ firstLetter: true, lastLetter: true })

const SuperheroInput = (props) => {

    const [name, setName] = useState('')
    const [score, setScore] = useState(props.score)

    const dispatch = useDispatch()

    const handleOnChange = event => {
        setName(event.target.value !== '' ? filter.clean(event.target.value) : event.target.value)
        setScore(props.score)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        dispatch(addSuperhero({name: name, score: score}))
        alert(`Your Superhero score of ${score} has been saved, ${name}!`)
        showSuperheros()
    }

    const showSuperheros = () => {
        window.location.replace('/superheros')
    }

    return (
        <div className='SuperheroForm'>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <input
                    type="text"
                    value={name}
                    placeholder="Your Superhero Name"
                    onChange={(event) => handleOnChange(event)} required />
                <span>with a score of {score}</span>
                <button type= "submit" className='scoreButton'><i>Save Your Superhero Score </i><span className='superheroGameEmoji' role='img' aria-label='superhero person emoji'> 🦸 </span></button>
            </form>
            or < RePlayButton />
        </div>
    )
}

export default SuperheroInput