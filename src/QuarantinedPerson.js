import React, { Component } from 'react'
import { connect } from 'react-redux'
import { quarantinedToNaiveChanger } from './redux/actions'
import UIfx from 'uifx'
import sound from './sounds/naive.mp3'

const naiveSound = new UIfx(sound)

class QuarantinedPerson extends Component {

    state = {
        time: 8
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
        naiveSound.play()
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    render() {
        return(
            <>
                <span className='quarantinedPersonEmoji' role='img' aria-label='quarantined person emoji' id={this.props.id} style={{ cursor: 'not-allowed' }}>🤒</span>
                <span className='quarantinedPersonCountdown'> ▽ {this.state.time}</span>
            </>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    // dispatchedMakeSafe: (e) => dispatch(makeSafe(e)),
    dispatchedQuarantinedToNaiveChanger: (quarantinedPersonId) => dispatch(quarantinedToNaiveChanger(quarantinedPersonId))
})

export default connect(null, mapDispatchToProps)(QuarantinedPerson)