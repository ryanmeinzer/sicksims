import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchStats} from '../redux/actions'
import Stats from './Stats.js'

const StatsContainer = (interval) => {

    const mappedStats = useSelector(state => state.stats)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStats())
        return () => {
            clearInterval(interval)
        }
    }, [dispatch, interval])

    // handle fetch of stats upon app load with loading message if still loading
    const handleLoading = () => {
        console.log(loading)
        if (loading) {
            return <div>Loading...</div>
        } else {
            return <Stats mappedStats={mappedStats} />
        }
    }

    return (
        <div className="StatsContainer">
            <h4>COVID-19 Stats:</h4>
            {handleLoading()}
        </div>
    )

}

export default StatsContainer