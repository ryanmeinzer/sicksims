import React, { Component } from 'react'

export default class NaivePerson extends Component {

    // Doesn't work...Is state not needed unless you want a timer on the objects?
    // componentDidMount = () => {
    //     setTimeout(() => { this.props.riskyToSickChanger(this.props.id) }, 2500)
    // }

    state = {
        time: 2.5
    }

    componentDidMount = () => {
        this.startInterval()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    startInterval = () => {
        this.interval = setInterval(this.updateCounter, 1000);
    };

    checkTime = () => {
        // console.log("checking time", this.state.time, this.props.id)
    if (this.state.time <= 0) {
        // console.log("woo!")
        this.props.naiveToSickChanger(this.props.id)
        // console.log("risky to sick changed", this.props.id)
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    render() {
        return(
            <span id={this.props.id} onClick={this.props.makeSafe} style={{ cursor: 'pointer' }}>🥴</span>
        )
    }

}
