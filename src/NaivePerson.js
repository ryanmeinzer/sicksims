import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeSafe } from './redux/actions'
import { naiveToSickChanger } from './redux/actions'

class NaivePerson extends Component {

    // Doesn't work...Is state not needed unless you want a timer on the objects?
    // componentDidMount = () => {
    //     setTimeout(() => { this.props.riskyToSickChanger(this.props.id) }, 2500)
    // }

    state = {
        time: 3
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
        }
    }

    updateCounter = () => {
        this.setState((prevState) => ({time: prevState.time - 1 }), this.checkTime)
        // console.log(this.props.id)
    }

    makeSafeThenCheckAll = (e) => {
        this.props.dispatchedMakeSafe(e)
        this.props.isEveryoneSafe()
    }

    render() {
        return(
            <span id={this.props.id} onClick={this.makeSafeThenCheckAll} style={{ cursor: 'pointer' }}>🥴</span>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    dispatchedMakeSafe: (e) => dispatch(makeSafe(e)),
    dispatchedNaiveToSickChanger: (naivePersonId) => dispatch(naiveToSickChanger(naivePersonId))
})

export default connect(null, mapDispatchToProps)(NaivePerson)