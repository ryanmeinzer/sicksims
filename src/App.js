import React, { Component } from 'react'
import Header from './Header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { safeToSavedChanger } from './redux/actions'
import SuperherosContainer from './Superheros/SuperherosContainer.js'
import SuperheroInput from './Superheros/SuperheroInput.js'
import { makeQuarantined } from './redux/actions'
import Navigation from './Navigation.js'
import StatsContainer from './Stats/StatsContainer.js'
import FakeGameContainer from './FakeGameContainer.js'
import UIfx from 'uifx'
import superheroSound from './sounds/superhero.mp3'
import startSound from './sounds/start.mp3'
import GameContainer from './GameContainer.js'

const playSuperheroSound = new UIfx(superheroSound)
const playStartSound = new UIfx(startSound)

class App extends Component {

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

  gameStatusAndUpdateCounter = () => {
    this.isEveryoneSafe()
    window.location.pathname === '/play' && this.setState((prevState) => ({ time: prevState.time + 1 }))
    // console.log(this.state.time)
  }

  // hard refresh to reset state for game restart
  startGame = () => {
    window.location.replace('/play#InPublicContainer')
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

  render() {
    return (
      <div className="App">

        <div className='Header'>
          < Header />
        </div>

        <Router>

          <Route exact path='/' render={() => 
            <>
            <div className='Navigation'>
              < Navigation startGameButton={this.startGame} />
            </div>
            <FakeGameContainer />
            </>
          } />

          <Route exact path='/play' render={() => 
            <>
              < Navigation className='Navigation' startGameButton={this.startGame} />
              < GameContainer />
            </>
          } />

          <Route exact path='/score' render={() =>
            <>
              < SuperheroInput score={Math.round(parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10) - (parseInt(this.state.time) / 2))} />
              < SuperherosContainer />
            </>
          } />

          <Route exact path='/superheros' render={() =>
            <>
              <button className='rePlayButton' onClick={() => window.location.replace('/')}><i>Restart Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
              < SuperherosContainer />
            </>
          } />

          <Route exact path='/stats' render={() =>
              <>
                <button className='rePlayButton' onClick={() => window.location.replace('/')}><i>Restart Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
                < StatsContainer />
              </>
          } />

        </Router>

      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(App)