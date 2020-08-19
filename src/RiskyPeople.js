import React, { Component } from 'react'

export default class RiskyPeople extends Component {

  // make a new person component that has a timer on it/each (vs. on the App-level)
  // pass in the state to the person component
  // pass in the riskyToSickTick to the person component
  // once the timer gets to 0, call the riskyToSickTick on the person to update the state
  // if risky people aren't masked in 3 seconds after being added, they'll be sick, if they are, they'll be safe

    state = {
        time: 3
    }

    componentDidMount() {
        this.startInterval()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    startInterval = () => {
        this.interval = setInterval(this.updateCounter, 1000);
    };

    checkTime = () => {
    console.log("checking time", this.state.time)
    if (this.state.time === 0) {
        console.log("woo!")
        this.props.riskyToSickChanger(this.props.id)
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({time: prevState.time - 1 }), this.checkTime)

    
        // console.log(this.props.id)
    }

    // changeRiskytoSick = () => {
    //     this.state.time === 0
    // }

    render() {
        return(
            // <div>Hi There</div>
            <div id={this.props.id} onClick={this.props.makeSafe}>{`${this.props.name} - 😎 : ${this.state.time}`}</div>
        )
    }

}
