import React, { Component } from 'react'

class Stats extends Component {
    // allStats = () => {

    //     return this.props.mappedStats.map(stats => <p>{stats.NewConfirmed}</p>)

    // }

    render() {
        return (
            <div>
                {/* <p>{this.allStats()}</p> */}
                <p>{parseInt(this.props.mappedStats.NewConfirmed).toLocaleString()} new cases in the last 24 hours</p>
                <p>{parseInt(this.props.mappedStats.NewDeaths).toLocaleString()} new deaths in the last 24 hours</p>
            </div>
        )
    }
}

export default Stats