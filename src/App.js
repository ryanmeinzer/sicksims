import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import NaivePerson from './NaivePerson.js'
import QuarantinedPerson from './QuarantinedPerson.js'
import SafePerson from './SafePerson.js'
import SickPerson from './SickPerson.js'

export default class App extends Component {

  state = {
    people: [
      { id: 1, status: "naive" },
      { id: 2, status: "naive" },
      { id: 3, status: "naive" },
      { id: 4, status: "naive" },
      { id: 5, status: "naive" },
      { id: 6, status: "naive" },
      { id: 7, status: "sick" },
      { id: 8, status: "sick" },
      { id: 9, status: "sick" },
      { id: 10, status: "sick" }
    ]
  }

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
  naiveToSickChanger = sickPersonId => {
    // console.log("In naive to sick¸")
    let p = this.state.people.find((p) => p.id === sickPersonId)
      // .map((np) => np.status       ))
    let updatedP = { ...p, status: 'sick' }

    function changeNaivePersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === sickPersonId ? updatedP : person
        )
      }
    }
    this.setState(changeNaivePersonAndReturnAllPeople)
  }

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

  // Check to see if everyone is safe
  isEveryoneSafe = () => {
    if (!this.state.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'quarantined')) {
      this.safeToSavedChanger()
    }
  }

  // If everyone is safe, change everyone from safe to saved
  safeToSavedChanger = () => {
    function changeSafePersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) => {
          // debugger
          if (person.status === 'safe') {
            return { ...person, status: 'saved' }
          }
        })
      }
    }
    this.setState(changeSafePersonAndReturnAllPeople, alert('Congrats - you saved the world!'))
  }

  render() {
    return (
      <div className="App">
        < Header />

        <h4>In Public</h4>

        {this.state.people.map(person => {
          if (person.status === "naive") {
            return <NaivePerson key={`naive-${person.id}`} id={person.id} status={person.status} makeSafe={this.makeSafe} naiveToSickChanger={this.naiveToSickChanger} />
          } else if (person.status === "safe") {
            return <SafePerson key={`safe-${person.id}`} id={person.id} status={person.status} safeToSavedChanger={this.safeToSavedChanger} allPeople={this.state.people} />
          } else if (person.status === "sick") {
            return <SickPerson key={`sick-${person.id}`} id={person.id} status={person.status} makeQuarantined={this.makeQuarantined} />
          } else if (person.status === "saved") {
            return <span key={`saved-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>🥰</span>
          }
          })
        }

        <h4>Quarantined</h4>

        {this.state.people.map(person => {
          if (person.status === "quarantined") {
            return <QuarantinedPerson key={`quarantined-${person.id}`} id={person.id} status={person.status} quarantinedToNaiveChanger={this.quarantinedToNaiveChanger} />
          }
        })
        }

      </div>
    )
  }
}