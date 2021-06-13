import React from 'react'

const Stats = (props) => {

    return (
        <div>
            <p>{parseInt(props.mappedStats.NewConfirmed).toLocaleString()} new cases in the last 24 hours</p>
            <p>{parseInt(props.mappedStats.NewDeaths).toLocaleString()} new deaths in the last 24 hours</p>
        </div>
    )

}

export default Stats