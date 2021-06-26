import React from 'react'
import Header from './Header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SuperherosContainer from './Superheros/SuperherosContainer.js'
import StatsContainer from './Stats/StatsContainer.js'
import FakeGameContainer from './FakeGameContainer.js'
import GameContainer from './GameContainer.js'

const App = () => {
    return (
      <div className="App">
        < Header />
        <Router>
          <Route exact path='/' component={ FakeGameContainer } />
          <Route exact path='/play' component={ GameContainer } />
          <Route exact path='/superheros' component={ SuperherosContainer } />
          <Route exact path='/stats' component={ StatsContainer }/>
        </Router>
      </div>
    )
}

export default App