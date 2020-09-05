import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeSafe } from './redux/actions'
import { naiveToSickChanger } from './redux/actions'
import UIfx from 'uifx'
import sickSound from './sounds/sick.wav'
import safeSound from './sounds/safe.wav'

const playSickSound = new UIfx(sickSound)
const playSafeSound = new UIfx(safeSound)

class NaivePerson extends Component {

    state = {
        time: 4
    }

    // with react routes change this to componentDidMount
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
        this.props.dispatchedNaiveToSickChanger(this.props.id)
        // console.log("risky to sick changed", this.props.id)
        playSickSound.play()
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    makeSafeThenPlaySound = (e) => {
        this.props.dispatchedMakeSafe(e)
        playSafeSound.play()
    }

    render() {
        return (
            <span className='naivePersonEmoji' role='img' aria-label='naive person emoji' id={this.props.id} onClick={this.makeSafeThenPlaySound} style={{ cursor: 'default' }}>🥴</span>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    // don't pass in e, use e.target.id
    // dispatchedMakeSafe: (e) => dispatch(makeSafe(e.target.id)),
    dispatchedMakeSafe: (e) => dispatch(makeSafe(parseInt(e.target.id))),
    dispatchedNaiveToSickChanger: (naivePersonId) => dispatch(naiveToSickChanger(naivePersonId))
})

export default connect(null, mapDispatchToProps)(NaivePerson)