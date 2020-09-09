import React, { Component } from 'react'
import Header from './Header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import SuperherosContainer from './Superheros/SuperherosContainer.js'
import Navigation from './Navigation.js'
import StatsContainer from './Stats/StatsContainer.js'
import FakeGameContainer from './FakeGameContainer.js'
import GameContainer from './GameContainer.js'
import RePlayButton from './RePlayButton.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        < Header />
        <Router>
          <Route exact path='/' render={() => 
            <>
            < Navigation />
            <FakeGameContainer />
            </>
          } />
          <Route exact path='/play' render={() => 
            < GameContainer />
          } />
          <Route exact path='/superheros' render={() =>
            <>
            < RePlayButton />
            < SuperherosContainer />
            </>
          } />
          <Route exact path='/stats' render={() =>
            < StatsContainer />
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