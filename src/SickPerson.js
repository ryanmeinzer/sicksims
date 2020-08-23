import React, { Component } from 'react'

export default class SickPerson extends Component {

    state = {
        time: 5
    }

    componentDidMount = () => {
        this.startInterval()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    startInterval = () => {
        this.interval = setInterval(this.updateCounter, 1000)
    }

    checkTime = () => {
        // console.log("checking time", this.state.time, this.props.id)
        if (this.state.time <= 0) {
            // console.log("woo!")
            this.props.sickToDeadChanger(this.props.id)
            // console.log("quarantined to risky changed", this.props.id)
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({ time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    render() {
        return(
            <span id={this.props.id} onClick={this.props.makeQuarantined} style={{ cursor: 'pointer' }}>🤢</span>
        )
    }

}
