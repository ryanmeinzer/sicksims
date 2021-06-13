import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { quarantinedToNaiveChanger } from './redux/actions'
import UIfx from 'uifx'
import sound from './sounds/naive.mp3'

const naiveSound = new UIfx(sound)

const QuarantinedPerson = (props) => {

    const [time, setTime] = useState(8)
    const dispatch = useDispatch()

    let interval

    useEffect(() => {
        interval = setInterval(updateCounter, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (time <= 0) {
            dispatch(quarantinedToNaiveChanger(props.id))
            naiveSound.play(0.05)
        }
    }, [time])

    const updateCounter = () => {
        setTime(prevState => prevState - 1)
    }

    return(
        <>
            <span className='quarantinedPersonEmoji' role='img' aria-label='quarantined person emoji' id={props.id} style={{ cursor: 'not-allowed' }}>🤒</span>
            <span className='quarantinedPersonCountdown'> ▽ {time}</span>
        </>
    )

}

export default QuarantinedPerson