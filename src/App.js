import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import NaivePerson from './NaivePerson.js'
import QuarantinedPerson from './QuarantinedPerson.js'
import SafePerson from './SafePerson.js'
import SickPerson from './SickPerson.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { safeToSavedChanger } from './redux/actions'
import SuperherosContainer from './Superheros/SuperherosContainer.js'
import SuperheroInput from './Superheros/SuperheroInput.js'
import { Link } from 'react-router-dom'

class App extends Component {

  // start interval to check if game is finished upon app load
  componentDidMount() {
    this.startInterval()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval = () => {
    this.interval = setInterval(this.isEveryoneSafe, 1000)
  }

  // Check to see if all living people are safe
  isEveryoneSafe = () => {
    if (!this.props.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'quarantined')) {
      this.props.dispatchedSafeToSavedChanger()
      let score = parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10)
      alert(`Congrats - you saved (some of) the world! Your score is ${score}`)
      this.componentWillUnmount()
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' render={() => 
          
          <>
          < Header />
            <div className="FakeGameContainer">
              <h4>In Public</h4>
              🥴🤢🥴🥴😷🤢🥴😷🤢
              <h4>Quarantined</h4>
              🤒 ▽ 5
            </div>
          </>
          } />

          <Route exact path='/play' render={routerProps => 

            <>
            < Header {...routerProps} startGameButton={this.startGame} />
              <div {...routerProps} className="GameContainer">

                <h4>In Public</h4>

                {this.props.people.map(person => {
                  if (person.status === "naive") {
                    return <NaivePerson key={`naive-${person.id}`} id={person.id} status={person.status} makeSafe={this.makeSafe} isEveryoneSafe={this.isEveryoneSafe} />
                  } else if (person.status === "safe") {
                    return <SafePerson key={`safe-${person.id}`} id={person.id} status={person.status} />
                  } else if (person.status === "sick") {
                    return <SickPerson key={`sick-${person.id}`} id={person.id} status={person.status} makeQuarantined={this.makeQuarantined} isEveryoneSafe={this.isEveryoneSafe} />
                  } else if (person.status === "dead") {
                    return <span key={`dead-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>⚰️</span>
                  } else if (person.status === "saved") {
                    return <span key={`saved-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>🥰</span>
                  }
                  })
                }

                <h4>Quarantined</h4>

                {this.props.people.map(person => {
                  if (person.status === "quarantined") {
                    return <QuarantinedPerson key={`quarantined-${person.id}`} id={person.id} status={person.status} />
                  }
                })
                }

              </div> 
            </>
          } />

          <Route exact path='/score' render={() =>
            <>
              <div>
                <div className='logo' align='center'>
                  <img src="http://ryanmeinzer.com/s/SickSims-Logo.png" alt="SickSims Logo" class="logo" height="100" background-color="transparent"></img>
                </div>
                <div>
                  < SuperheroInput score={parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10)} />
                </div>
                <div>
                  < SuperherosContainer />
                </div>
              </div>

            </>
          } />

          <Route exact path='/superheros' render={() =>
            <>
              <div>
                <div className='logo' align='center'>
                  <img src="http://ryanmeinzer.com/s/SickSims-Logo.png" alt="SickSims Logo" class="logo" height="100" background-color="transparent"></img>
                </div>
                <div>
                  <Link to="/"><button className='playButton'><i>Restart Game - Save the world!</i> 🥰</button></Link>
                </div>
                <div>
                  < SuperherosContainer />
                </div>
              </div>

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
  dispatchedSafeToSavedChanger: () => dispatch(safeToSavedChanger()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App)