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
import GameContainer from './GameContainer.js'

class App extends Component {

  state = {
    time: 0
  }

  // start interval to check if game is finished upon app load
  componentDidMount() {
    this.startInterval()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval = () => {
    this.interval = setInterval(this.gameStatusAndUpdateCounter, 1000)
  }

  gameStatusAndUpdateCounter = () => {
    window.location.pathname === '/play' && this.setState((prevState) => ({ time: prevState.time + 1 }))
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
              < Navigation />
            </div>
            <FakeGameContainer />
            </>
          } />

          <Route exact path='/play' render={() => 
            <>
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