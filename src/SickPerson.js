import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { makeQuarantined } from './redux/actions'
import { sickToTerminalChanger } from './redux/actions'
import UIfx from 'uifx'
import terminalSound from './sounds/terminal.mp3'
import quarantinedSound from './sounds/quarantined.mp3'

const playTerminalSound = new UIfx(terminalSound)
const playQuarantinedSound = new UIfx(quarantinedSound)

const SickPerson = (props) => {

    const [time, setTime] = useState(4)
    const dispatch = useDispatch()

    let interval

    // start timer for score only upon mount
    useEffect(() => {
        interval = setInterval(updateCounter, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    // whenever time updates, if at or below zero make sick people terminal
    useEffect(() => {
        if (time <= 0) {
            dispatch(sickToTerminalChanger(props.id))
            playTerminalSound.play(0.05)
        }
    }, [time])

    // decrement counter
    const updateCounter = () => {
        setTime(prevState => prevState - 1)
    }

    const drag = (e) => {
        let id = e.target.id
        e.dataTransfer.setData("text", id)
        // console.log('in SickPerson.js drag', id)
        playQuarantinedSound.play(0.05)
    }

    const makeQuarantinedThenPlaySound = (e) => {
        dispatch(makeQuarantined(parseInt(e.target.id)))
        playQuarantinedSound.play(0.05)
    }

    return(
        <>
            <span className='sickPersonEmoji desktop-only' draggable='true' onDragStart={drag} role='img' aria-label='sick person emoji' id={props.id} style={{ cursor: 'grab' }}>🤢</span>

            <span className='sickPersonEmoji mobile-only' role='img' aria-label='sick person emoji' id={props.id} onClick={makeQuarantinedThenPlaySound} style={{ cursor: 'default' }}>🤢</span>
        </>
    )

}

export default SickPerson