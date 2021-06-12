import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import NaivePerson from './NaivePerson.js'
import QuarantinedPerson from './QuarantinedPerson.js'
import SafePerson from './SafePerson.js'
import SickPerson from './SickPerson.js'
import { makeQuarantined } from './redux/actions'
import UIfx from 'uifx'
import superheroSound from './sounds/superhero.mp3'
import startSound from './sounds/start.mp3'
import { safeToSavedChanger } from './redux/actions'
import Confetti from 'react-confetti'
import SuperheroInput from './Superheros/SuperheroInput.js'

const playSuperheroSound = new UIfx(superheroSound)
const playStartSound = new UIfx(startSound)

const GameContainer = () => {

    const [time, setTime] = useState(0)
    const people = useSelector(state => state.people)
    const dispatch = useDispatch()

    let interval

    useEffect(() => {
        interval = setInterval(updateCounter, 1000)
        playStartSound.play(0.05)
    }, [])

    const updateCounter = () => {
        setTime(prevState => prevState + 1)
    }

    useEffect(() => {
        isEveryoneSafe()
        console.log(time)
        return () => {
            clearInterval(interval)
        }
    }, [!people.find(({status}) => status === 'naive' || status === 'sick' || status === 'quarantined')])

    // Check to see if all living people are safe
    const isEveryoneSafe = () => {
        if (!people.find(({status}) => status === 'naive' || status === 'sick' || status === 'quarantined')) {
            dispatch(safeToSavedChanger())
            playSuperheroSound.play(0.05)
        }
    }

    const allowDrop = (e) => {
        e.preventDefault()
    }

    const drop = (e) => {
        e.preventDefault()
        let id = e.dataTransfer.getData("text")
        dispatch(makeQuarantined(parseInt(id)))
    }

    // hold position for all people to keep all in-place
    const personRenderer = (person) => {
        if (person.status === "naive") {
            return <NaivePerson key={`naive-${person.id}`} id={person.id} status={person.status} isEveryoneSafe={isEveryoneSafe} />
        } else if (person.status === "safe") {
            return <SafePerson key={`safe-${person.id}`} id={person.id} status={person.status} />
        } else if (person.status === "sick") {
            return <SickPerson key={`sick-${person.id}`} id={person.id} status={person.status} isEveryoneSafe={isEveryoneSafe} />
        } else if (person.status === "terminal") {
            return <span className='terminalPersonEmoji' role='img' aria-label='terminal person emoji' key={`terminal-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>😵</span>
        } else if (person.status === "saved") {
            return <span className='savedPersonEmoji' role='img' aria-label='saved person emoji' key={`saved-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>🥰</span>
        }
        else {
            return <span className='quarantinedPersonPlaceholderEmoji' role='img' aria-label='quarantined person placeholder emoji' key={`placeholder-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>👻</span>
        }
    }

    let gameComplete = people.find(person => person.status === 'saved')
    
    if (!gameComplete) {
        return (
            <>
            <div className='gameInProgressNavigation'>
                <button className='inProgressButton' disabled> ☟ <i>Game in Progress</i> ☟ </button>
            </div>
            <div className="GameContainer">
                <div className='InPublicContainer' id='InPublicContainer'>
                    <h4>In Public</h4>
                    {people.map(person => {
                        return <span key={person.id}>{personRenderer(person)}</span>
                    })
                    }
                </div>

                <div className='QuarantinedContainer' onDrop={drop} onDragOver={allowDrop}>
                    <h4>Quarantined</h4>
                    {people.map(person => {
                        if (person.status === "quarantined") {
                            return <QuarantinedPerson key={`quarantined-${person.id}`} id={person.id} status={person.status} />
                        }
                        else {
                            return ''
                        }
                    })
                    }
                </div>

            </div> 
            </>
        )
    } else {
        return (
            <>
            <div className='gameCompleteNavigation'>
                < SuperheroInput score={Math.round(parseInt(people.filter(({ status }) => status === 'saved').length * 10) - (parseInt(time) / 2))} />
                < Confetti
                    tweenDuration={1000}
                />
            </div>
            <div className="GameContainer">
                <div className='InPublicContainer' id='InPublicContainer'>
                    <h4>In Public</h4>
                    {people.map(person => {
                        return <span key={person.id}>{personRenderer(person)}</span>
                    })
                    }
                </div>
                <div className='QuarantinedContainer'>
                    <h4>Quarantined</h4>
                </div>
            </div>
            </>
        )
    }
}

export default GameContainer