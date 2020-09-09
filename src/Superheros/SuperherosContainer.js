import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperheros } from '../redux/actions'
import Superheros from './Superheros.js'
import { fetchStats } from '../redux/actions'
import RePlayButton from '../RePlayButton.js'

class SuperherosContainer extends Component {

    // fetch superheros upon app load
    componentDidMount() {
        this.props.dispatchedFetchSuperheros()
        this.props.dispatchedFetchStats()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    // handle fetch of superheros upon app load with loading message if still loading
    handleLoading = () => {
        // console.log(this.props.loading)
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <Superheros mappedSuperheros={this.props.mappedSuperheros} />
        }
    }

    render() {
        return (
            <>
            < RePlayButton />
            <div className="SuperherosPSAContainer">
                <div className="SuperherosContainer">
                    <h4>Top Superheros:</h4>
                    {this.handleLoading()}
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
                            In fact, in the last 24 hours there have been <b>{parseInt(this.props.mappedStats.NewConfirmed).toLocaleString()}</b> new cases and <b>{parseInt(this.props.mappedStats.NewDeaths).toLocaleString()}</b> new deaths of COVID-19.
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
}

// can't just use destructured people anymore with superheros fetch
// const mapStateToProps = ({ people }) => ({ people })
const mapStateToProps = state => {
    return {
        mappedSuperheros: state.superheros,
        loading: state.loading, 
        mappedStats: state.stats
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedFetchSuperheros: () => dispatch(fetchSuperheros()), 
    dispatchedFetchStats: () => dispatch(fetchStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(SuperherosContainer)