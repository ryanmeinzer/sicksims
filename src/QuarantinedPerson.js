import React, { Component } from 'react'
import { connect } from 'react-redux'
import { quarantinedToNaiveChanger } from './redux/actions'

class QuarantinedPerson extends Component {

    // Doesn't work...Is state not needed unless you want a timer on the objects?
    // componentDidMount = () => {
    //     setTimeout(() => { this.props.quarantinedToRiskyChanger(this.props.id) }, 5000)
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
        this.interval = setInterval(this.updateCounter, 1000)
    }

    checkTime = () => {
        // console.log("checking time", this.state.time, this.props.id)
    if (this.state.time <= 0) {
        // console.log("woo!")
        this.props.dispatchedQuarantinedToNaiveChanger(this.props.id)
        // console.log("quarantined to risky changed", this.props.id)
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    render() {
        return(
            <span id={this.props.id} style={{ cursor: 'not-allowed' }}>🤒 ▽ {this.state.time} </span>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    // dispatchedMakeSafe: (e) => dispatch(makeSafe(e)),
    dispatchedQuarantinedToNaiveChanger: (quarantinedPersonId) => dispatch(quarantinedToNaiveChanger(quarantinedPersonId))
})

export default connect(null, mapDispatchToProps)(QuarantinedPerson)