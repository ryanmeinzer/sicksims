import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import NaivePerson from './NaivePerson.js'
import QuarantinedPerson from './QuarantinedPerson.js'
import SafePerson from './SafePerson.js'
import SickPerson from './SickPerson.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {

  // Click to make naive person safe
  makeSafe = (e) => {
    let id = parseInt(e.target.id);
    let p = this.state.people.find((p) => p.id === id);
    let updatedP = { ...p, status: "safe" }

    function changeOnePersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === id ? updatedP : person
        )
      }
    }
    this.setState(changeOnePersonAndReturnAllPeople, this.isEveryoneSafe)
  }

  // Click to make a sick person quarantined
  makeQuarantined = (e) => {
    let id = parseInt(e.target.id);
    let p = this.state.people.find((p) => p.id === id);
    let updatedP = { ...p, status: "quarantined" }

    function changeOnPersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === id ? updatedP : person
        )
      }
    }
    this.setState(changeOnPersonAndReturnAllPeople)
  }

  // Automatically make a naive person sick after set interval
  // naiveToSickChanger = naivePersonId => {
  //   // console.log("In naive to sick¸")
  //   let p = this.state.people.find((p) => p.id === naivePersonId)
  //     // .map((np) => np.status       ))
  //   let updatedP = { ...p, status: 'sick' }

  //   function changeNaivePersonAndReturnAllPeople(prevState) {
  //     return {
  //       people: prevState.people.map((person) =>
  //         person.id === naivePersonId ? updatedP : person
  //       )
  //     }
  //   }
  //   this.setState(changeNaivePersonAndReturnAllPeople)
  // }

  // Automatically return a quarantined person back to naive in public after set interval
  quarantinedToNaiveChanger = quarantinedPersonId => {
    // console.log("In naive to sick¸")
    let p = this.state.people.find((p) => p.id === quarantinedPersonId)
    // .map((np) => np.status       ))
    let updatedP = { ...p, status: 'naive' }

    function changeQuarantinedPersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === quarantinedPersonId ? updatedP : person
        )
      }
    }
    this.setState(changeQuarantinedPersonAndReturnAllPeople)
  }

  // Automatically make a sick person dead after set interval
  sickToDeadChanger = sickPersonId => {
    // console.log("In naive to sick¸")
    let p = this.state.people.find((p) => p.id === sickPersonId)
    // .map((np) => np.status       ))
    let updatedP = { ...p, status: 'dead' }

    function changeSickPersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === sickPersonId ? updatedP : person
        )
      }
    }
    this.setState(changeSickPersonAndReturnAllPeople, this.isEveryoneSafe)
  }

  // Check to see if all living people are safe
  isEveryoneSafe = () => {
    if (!this.state.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'quarantined')) {
      this.safeToSavedChanger()
    }
  }

  // If everyone is safe, change everyone from safe to saved
  safeToSavedChanger = () => {
    // console.log("In naive to sick¸")
    let p = this.state.people.find((p) => p.status === 'safe')
    // .map((np) => np.status       ))
    let updatedP = { ...p, status: 'saved' }

    function changeSafePersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.status === 'safe' ? updatedP : person
        )
      }
    }
    this.setState(changeSafePersonAndReturnAllPeople, alert('Congrats - you saved (some of) the world!'))
  }

  startGame = () => {
    // this.quarantinedToNaiveChanger()
    // with react routes change this to the below
    window.location.replace('/play')
  }

  render() {
    return (
      <div className="App">
        <Router>
          {/* with react routes change this to / */}
          <Route exact path='/' render={() => 
          
          <>
          < Header startGameButton={this.startGame}/>
            <div className="FakeGameContainer">
              <h4>In Public</h4>
              🥴🤢🥴🥴😷🤢🥴😷🤢
              <h4>Quarantined</h4>
              🤒 ▽ 5
            </div>
          </>
          } />

          {/* with react routes change this to /play */}
          <Route exact path='/play' render={routerProps => 

            <>
            < Header {...routerProps} startGameButton={this.startGame} />
              <div {...routerProps} className="GameContainer">

                <h4>In Public</h4>

                {this.props.people.map(person => {
                  if (person.status === "naive") {
                    return <NaivePerson key={`naive-${person.id}`} id={person.id} status={person.status} makeSafe={this.makeSafe} naiveToSickChanger={this.naiveToSickChanger} />
                  } else if (person.status === "safe") {
                    return <SafePerson key={`safe-${person.id}`} id={person.id} status={person.status} safeToSavedChanger={this.safeToSavedChanger} allPeople={this.props.people} />
                  } else if (person.status === "sick") {
                    return <SickPerson key={`sick-${person.id}`} id={person.id} status={person.status} makeQuarantined={this.makeQuarantined} sickToDeadChanger={this.sickToDeadChanger}/>
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
                    return <QuarantinedPerson key={`quarantined-${person.id}`} id={person.id} status={person.status} quarantinedToNaiveChanger={this.quarantinedToNaiveChanger} />
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

const mapStateToProps = ({ people }) => ({ people })

export default connect(mapStateToProps)(App)