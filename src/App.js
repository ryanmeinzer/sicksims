import React, { Component } from 'react'
import Header from './Header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SuperherosContainer from './Superheros/SuperherosContainer.js'
import StatsContainer from './Stats/StatsContainer.js'
import FakeGameContainer from './FakeGameContainer.js'
import GameContainer from './GameContainer.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        < Header />
        <Router>
          <Route exact path='/' render={() => 
            <FakeGameContainer />
          } />
          <Route exact path='/play' render={() => 
            < GameContainer />
          } />
          <Route exact path='/superheros' render={() =>
            < SuperherosContainer />
          } />
          <Route exact path='/stats' render={() =>
            < StatsContainer />
          } />
        </Router>

      </div>
    )
  }
}

export default App