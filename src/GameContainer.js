import React, { Component } from 'react'
import NaivePerson from './NaivePerson.js'
import QuarantinedPerson from './QuarantinedPerson.js'
import SafePerson from './SafePerson.js'
import SickPerson from './SickPerson.js'
import { connect } from 'react-redux'
import { makeQuarantined } from './redux/actions'
import UIfx from 'uifx'
import superheroSound from './sounds/superhero.mp3'
import startSound from './sounds/start.mp3'
import { safeToSavedChanger } from './redux/actions'
import Confetti from 'react-confetti'
import SuperheroInput from './Superheros/SuperheroInput.js'

const playSuperheroSound = new UIfx(superheroSound)
const playStartSound = new UIfx(startSound)

class GameContainer extends Component {

    state = {
        time: 0
    }

    // start interval to check if game is finished upon app load
    componentDidMount() {
        this.startInterval()
        // console.log('component did mount')
        window.location.pathname === '/play' && playStartSound.play(0.05)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    startInterval = () => {
        this.interval = setInterval(this.gameStatusAndUpdateCounter, 1000)
    }

    // updateCounter = () => {
    //   this.setState((prevState) => ({ time: prevState.time + 1 }), this.isEveryoneSafe)
    //   console.log(this.state.time)
    // }

    gameStatusAndUpdateCounter = () => {
        this.isEveryoneSafe()
        window.location.pathname === '/play' && this.setState((prevState) => ({ time: prevState.time + 1 }))
        // console.log(this.state.time)
    }

    // Check to see if all living people are safe
    isEveryoneSafe = () => {
        if (!this.props.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'quarantined')) {
            this.props.dispatchedSafeToSavedChanger()
            // let score = parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10)
            // setTimeout(() => alert(`Congrats - you saved (some of) the world! Your score is ${score}`), 5000)
            playSuperheroSound.play(0.05)
            this.componentWillUnmount()
        }
    }

    allowDrop = (e) => {
        e.preventDefault()
    }

    drop = (e) => {
        e.preventDefault()
        let id = e.dataTransfer.getData("text")
        this.props.dispatchedMakeQuarantined(id)
    }

    // hold position for all people to keep all in-place
    personRenderer = (person) => {
        if (person.status === "naive") {
            return <NaivePerson key={`naive-${person.id}`} id={person.id} status={person.status} isEveryoneSafe={this.isEveryoneSafe} />
        } else if (person.status === "safe") {
            return <SafePerson key={`safe-${person.id}`} id={person.id} status={person.status} />
        } else if (person.status === "sick") {
            return <SickPerson key={`sick-${person.id}`} id={person.id} status={person.status} isEveryoneSafe={this.isEveryoneSafe} />
        } else if (person.status === "terminal") {
            return <span className='terminalPersonEmoji' role='img' aria-label='terminal person emoji' key={`terminal-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>😵</span>
        } else if (person.status === "saved") {
            return <span className='savedPersonEmoji' role='img' aria-label='saved person emoji' key={`saved-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>🥰</span>
        }
        else {
            return <span className='quarantinedPersonPlaceholderEmoji' role='img' aria-label='quarantined person placeholder emoji' key={`placeholder-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>👻</span>
        }
    }

    render() {
        let gameComplete = this.props.people.find(person => person.status === 'saved')
        
        if (!gameComplete) {
            return (
                <>
                <div className='gameInProgressNavigation'>
                    <button className='inProgressButton' disabled> ☟ <i>Game in Progress</i> ☟ </button>
                </div>
                <div className="GameContainer">
                    <div className='InPublicContainer' id='InPublicContainer'>
                        <h4>In Public</h4>
                        {this.props.people.map(person => {
                            return <span key={person.id}>{this.personRenderer(person)}</span>
                        })
                        }
                    </div>

                    <div className='QuarantinedContainer' onDrop={this.drop} onDragOver={this.allowDrop}>
                        <h4>Quarantined</h4>
                        {this.props.people.map(person => {
                            if (person.status === "quarantined") {
                                return <QuarantinedPerson key={`quarantined-${person.id}`} id={person.id} status={person.status} />
                            }
                            else {
                                return ''
                            }
                        })
                        }
                    </div>

                </div> 
                </>
            )
        } else {
            return (
                <>
                <div className='gameCompleteNavigation'>
                    < SuperheroInput score={Math.round(parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10) - (parseInt(this.state.time) / 2))} />
                    < Confetti
                        tweenDuration={1000}
                    />
                </div>
                <div className="GameContainer">
                    <div className='InPublicContainer' id='InPublicContainer'>
                        <h4>In Public</h4>
                        {this.props.people.map(person => {
                            return <span key={person.id}>{this.personRenderer(person)}</span>
                        })
                        }
                    </div>
                    <div className='QuarantinedContainer'>
                        <h4>Quarantined</h4>
                    </div>
                </div>
                </>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        people: state.people,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchedSafeToSavedChanger: () => dispatch(safeToSavedChanger()),
    dispatchedMakeQuarantined: (id) => dispatch(makeQuarantined(parseInt(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)