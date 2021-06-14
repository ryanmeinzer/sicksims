import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeSafe } from './redux/actions'
import { naiveToSickChanger } from './redux/actions'
import UIfx from 'uifx'
import sickSound from './sounds/sick.mp3'
import safeSound from './sounds/safe.mp3'

const playSickSound = new UIfx(sickSound)
const playSafeSound = new UIfx(safeSound)

const NaivePerson = (props) => {

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

    // whenever time updates, if at or below zero make naive people sick
    useEffect(() => {
        if (time <= 0) {
            dispatch(naiveToSickChanger(props.id))
            playSickSound.play(0.05)
        }
    }, [time])

    // decrement counter
    const updateCounter = () => {
        setTime(prevState => prevState - 1)
    }

    const makeSafeThenPlaySound = (e) => {
        dispatch(makeSafe(parseInt(e.target.id)))
        playSafeSound.play(0.05)
    }

    return (
        <span className='naivePersonEmoji' role='img' aria-label='naive person emoji' id={props.id} onClick={makeSafeThenPlaySound} style={{ cursor: 'default' }}>🥴</span>
    )
}

export default NaivePerson