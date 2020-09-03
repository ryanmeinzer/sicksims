import React, { Component } from 'react'
import logo from './SickSims-Logo.png'
import { connect } from 'react-redux'
import { fetchStats } from './redux/actions'

class Logo extends Component {

    // fetch stats upon stats page load
    componentDidMount() {
        this.props.dispatchedFetchStats()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div class="LogoContainer">
                <img src={logo} alt="SickSims Logo" className="LogoImage" background-color="transparent"></img>
                <div class="LogoOverlay">
                    <div class="LogoOverlayText">
                        <p>
                            Unfortunately, this is just a game to create awareness and public safety. COVID-19 has devastated our world.
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
        )
    }
}

const mapStateToProps = state => {
    return {
        mappedStats: state.stats
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedFetchStats: () => dispatch(fetchStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Logo)