import React, { Component } from 'react'
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
import logo from './SickSims-Logo.png'
import { makeQuarantined } from './redux/actions'
import Navigation from './Navigation.js'

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

  // hard refresh to reset state for game restart
  startGame = () => {
    window.location.replace('/play#InPublicContainer')
  }

  // Check to see if all living people are safe
  isEveryoneSafe = () => {
    if (!this.props.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'quarantined')) {
      this.props.dispatchedSafeToSavedChanger()
      let score = parseInt(this.props.people.filter(({ status }) => status === 'saved').length * 10)
      setTimeout(() => alert(`Congrats - you saved (some of) the world! Your score is ${score}`), 1000)
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

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' render={() => 
          
          <>
            <div className='Header'>
              < Header />
            </div>
            <div className='Navigation'>
              < Navigation startGameButton={this.startGame} />
            </div>
            <div className="FakeGameContainer">
              <div className='FakeInPublicContainer'>
                <h4>In Public</h4>
                  <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                  <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                  <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                  <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                  <span className='FakeSafePersonEmoji' role='img' aria-label='safe person emoji'>😷</span>
                  <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
                  <span className='fakeGameEmojis' role='img' aria-label='naive person emoji'>🥴</span>
                  <span className='FakeSafePersonEmoji' role='img' aria-label='safe person emoji'>😷</span>
                  <span className='fakeGameEmojis' role='img' aria-label='sick person emoji'>🤢</span>
              </div>
            {/* <div className="FakeDiv"></div> */}
              <div className='FakeQuarantinedContainer'>
                <h4>Quarantined</h4>
                  <span className='FakeQuarantinedPersonEmoji' role='img' aria-label='quarantined person emoji'>🤒</span><span className='FakeQuarantinedPersonCountdown' role='img' aria-label='quarantined person countdown'> ▽ 5 </span> 
              </div>
            </div>
          </>
          } />

          <Route exact path='/play' render={() => 

            <>
              <div className='Header'>
                < Header />
              </div>
              <div className='Navigation'>
                < Navigation startGameButton={this.startGame} />
              </div>

              <div className="GameContainer">

                <div className='InPublicContainer' id='InPublicContainer'>
                  <h4>In Public</h4>

                  {this.props.people.map(person => {
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
                      return ''
                    }
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
          } />

          <Route exact path='/score' render={() =>
            <>
              <div>
                <div className='logo' align='center'>
                  <img src={logo} alt="SickSims Logo" className="logo" height="100" background-color="transparent"></img>
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
                  <img src={logo} alt="SickSims Logo" className="logo" height="100" background-color="transparent"></img>
                </div>
                <div>
                  <button className='playButton' onClick={() => window.location.replace('/')}><i>Restart Game - Save the world!</i> <span role="img" aria-label="saved person emoji">🥰</span></button>
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
  dispatchedSafeToSavedChanger: () => dispatch(safeToSavedChanger()),
  dispatchedMakeQuarantined: (id) => dispatch(makeQuarantined(parseInt(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)