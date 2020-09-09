import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeQuarantined } from './redux/actions'
import { sickToTerminalChanger } from './redux/actions'
import UIfx from 'uifx'
import terminalSound from './sounds/terminal.mp3'
import quarantinedSound from './sounds/quarantined.mp3'

const playTerminalSound = new UIfx(terminalSound)
const playQuarantinedSound = new UIfx(quarantinedSound)

class SickPerson extends Component {

    state = {
        time: 4
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
            this.props.dispatchedSickToTerminalChanger(this.props.id)
            // console.log("quarantined to risky changed", this.props.id)
            // this.props.isEveryoneSafe()
            playTerminalSound.play(0.05)
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({ time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    drag = (e) => {
        let id = e.target.id
        e.dataTransfer.setData("text", id)
        // console.log('in SickPerson.js drag', id)
        playQuarantinedSound.play(0.05)
    }

    makeQuarantinedThenPlaySound = (e) => {
        this.props.dispatchedMakeQuarantined(e)
        playQuarantinedSound.play(0.05)
    }

    render() {
        return(
            <>
                <span className='sickPersonEmoji desktop-only' draggable='true' onDragStart={this.drag} role='img' aria-label='sick person emoji' id={this.props.id} style={{ cursor: 'grab' }}>🤢</span>

                <span className='sickPersonEmoji mobile-only' role='img' aria-label='sick person emoji' id={this.props.id} onClick={this.makeQuarantinedThenPlaySound} style={{ cursor: 'default' }}>🤢</span>
            </>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    dispatchedMakeQuarantined: (e) => dispatch(makeQuarantined(parseInt(e.target.id))),
    dispatchedSickToTerminalChanger: (sickPersonId) => dispatch(sickToTerminalChanger(sickPersonId))
})

export default connect(null, mapDispatchToProps)(SickPerson)