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
import { fetchSuperheros } from './redux/actions'
import Superheros from './Superheros.js'

class App extends Component {

  // fetch superheros upon app load
  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props)
    this.props.dispatchedFetchSuperheros()
    // debugger
  }

  // handle fetch of superheros upon app load with loading message if still loading
  handleLoading = () => {
    // console.log(this.props.loading)
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <Superheros mappedSuperheros={this.props.mappedSuperheros} />
    }
  }

  // Check to see if all living people are safe
  isEveryoneSafe = () => {
    if (!this.props.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'quarantined')) {
      this.props.dispatchedSafeToSavedChanger()
      alert('Congrats - you saved (some of) the world!')
    }
  }

  startGame = () => {
    window.location.replace('/play')
  }

  render() {
    // console.log(this.props.mappedSuperheros)
    return (
      <div className="App">
        <Router>
          <Route exact path='/' render={() => 
          
          <>
          < Header startGameButton={this.startGame}/>
            <div className="FakeGameContainer">
              <h4>In Public</h4>
              🥴🤢🥴🥴😷🤢🥴😷🤢
              <h4>Quarantined</h4>
              🤒 ▽ 5
              <h2>Superheros:</h2>
                {this.handleLoading()}
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

        </Router>

      </div>
    )
  }
}

// can't just use destructured people anymore with superheros fetch
// const mapStateToProps = ({ people }) => ({ people })
const mapStateToProps = state => {
  return {
    people: state.people,
    mappedSuperheros: state.superheros,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchedSafeToSavedChanger: () => dispatch(safeToSavedChanger()), 
  dispatchedFetchSuperheros: () => dispatch(fetchSuperheros()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)