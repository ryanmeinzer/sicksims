import React, { Component } from 'react'

export default class HomePeople extends Component {

    // Doesn't work...Is state not needed unless you want a timer on the objects?
    // componentDidMount = () => {
    //     setTimeout(() => { this.props.homeToRiskyChanger(this.props.id) }, 5000)
    // }

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
        this.interval = setInterval(this.updateCounter, 1000);
    }

    checkTime = () => {
        // console.log("checking time", this.state.time, this.props.id)
    if (this.state.time <= 0) {
        // console.log("woo!")
        // this clearInterval has an interesting effect...
        // clearInterval(this.interval)
        this.props.homeToRiskyChanger(this.props.id)
        // console.log("home to risky changed", this.props.id)
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    render() {
        return(
            <span id={this.props.id} style={{ cursor: 'not-allowed' }}>🤢</span>
        )
    }

}
