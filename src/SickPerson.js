import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sickToDeadChanger } from './redux/actions'

class SickPerson extends Component {

    state = {
        time: 3
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
            this.props.dispatchedSickToDeadChanger(this.props.id)
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

const mapDispatchToProps = dispatch => ({
    // dispatchedMakeSafe: (e) => dispatch(makeSafe(e)),
    dispatchedSickToDeadChanger: (sickPersonId) => dispatch(sickToDeadChanger(sickPersonId))
})

export default connect(null, mapDispatchToProps)(SickPerson)