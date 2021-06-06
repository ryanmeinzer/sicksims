import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchStats } from './redux/actions'
import Navigation from './Navigation.js'

const FakeGameContainer = (interval) => {

    const mappedStats = useSelector(state => state.stats)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStats())
        return () => {
            clearInterval(interval)
        }
    }, [dispatch, interval])

    return (
        <>
        < Navigation />
        <div className="HomePSAContainer">
            <div className="FakeGameContainer">
                <div className='FakeInPublicContainer'>
                    <h4>In Public</h4>
                    <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                    <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                    <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                    <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                    <span className='FakeSafePersonEmoji' role='img' aria-label='safe person emoji'>😷</span>
                    <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                    <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                    <span className='FakeSafePersonEmoji' role='img' aria-label='safe person emoji'>😷</span>
                    <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                </div>

                <div className='FakeQuarantinedContainer'>
                    <h4>Quarantined</h4>
                    <span className='FakeQuarantinedPersonEmoji' role='img' aria-label='quarantined person emoji'>🤒</span><span className='FakeQuarantinedPersonCountdown' role='img' aria-label='quarantined person countdown'> ▽ 8 </span>
                </div>
            </div>
            <div className="HomePSAOverlay">
                <div className="HomePSAOverlayText">
                    <p>
                        <span className='PointUpEmoji' role='img' aria-label='point up emoji'>☝️</span> Start Game Above <span className='PointUpEmoji' role='img' aria-label='point up emoji'>☝️</span>
                    </p>
                    <p>
                        Unfortunately, this is just a game to create awareness and public safety. COVID-19 is real.
                    </p>
                    <p>
                        In fact, in the last 24 hours there have been <b>{parseInt(mappedStats.NewConfirmed).toLocaleString()}</b> new cases and <b>{parseInt(mappedStats.NewDeaths).toLocaleString()}</b> new deaths of COVID-19.
                    </p>
                    <p align='center'>
                        <i>Please wear masks and stay home in the hopes to get better if you are not feeling well!</i>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default FakeGameContainer