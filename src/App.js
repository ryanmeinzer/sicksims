import React, { Component } from 'react'
import Header from './Header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import SuperherosContainer from './Superheros/SuperherosContainer.js'
import SuperheroInput from './Superheros/SuperheroInput.js'
import Navigation from './Navigation.js'
import StatsContainer from './Stats/StatsContainer.js'
import FakeGameContainer from './FakeGameContainer.js'
import GameContainer from './GameContainer.js'

class App extends Component {

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
            < GameContainer />
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

export default connect(mapStateToProps)(App)