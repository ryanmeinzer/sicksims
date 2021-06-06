import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSuperheros} from '../redux/actions'
import Superheros from './Superheros.js'
import { fetchStats } from '../redux/actions'
import RePlayButton from '../RePlayButton.js'

const SuperherosContainer = (interval) => {

    const mappedSuperheros = useSelector(state => state.superheros)
    const loading = useSelector(state => state.loading)
    const mappedStats = useSelector(state => state.stats)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSuperheros())
        dispatch(fetchStats())
        return () => {
            clearInterval(interval)
        }
    }, [dispatch, interval])

    // handle fetch of superheros upon app load with loading message if still loading
    const handleLoading = () => {
        if (loading) {
            return <div>Loading...</div>
        } else {
            return <Superheros mappedSuperheros={mappedSuperheros} />
        }
    }

    return (
        <>
        < RePlayButton />
        <div className="SuperherosPSAContainer">
            <div className="SuperherosContainer">
                <h4>Top Superheros:</h4>
                {handleLoading()}
            </div>
            <div className="SuperherosPSAOverlay">
                <div className="SuperherosPSAOverlayText">
                    <p>
                        <span className='PointUpEmoji' role='img' aria-label='point up emoji'>☝️</span> Restart Game Above <span className='PointUpEmoji' role='img' aria-label='point up emoji'>☝️</span>
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

export default SuperherosContainer