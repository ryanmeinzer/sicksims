import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStats } from '../redux/actions'
import Stats from './Stats.js'

class StatsContainer extends Component {

    // fetch stats upon stats page load
    componentDidMount() {
        this.props.dispatchedFetchStats()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    // handle fetch of stats upon app load with loading message if still loading
    handleLoading = () => {
        // console.log(this.props.loading)
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <Stats mappedStats={this.props.mappedStats} />
        }
    }

    render() {
        return (
            <div className="StatsContainer">
                <h4>COVID-19 Stats:</h4>
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mappedStats: state.stats,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedFetchStats: () => dispatch(fetchStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer)