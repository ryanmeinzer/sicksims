import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import NaivePerson from './NaivePerson.js'
import HomePerson from './HomePerson.js'
import SafePerson from './SafePerson.js'
import SickPerson from './SickPerson.js'

export default class App extends Component {

  state = {
    people: [
      { id: 1, status: "naive" },
      { id: 2, status: "naive" },
      { id: 3, status: "naive" },
      { id: 4, status: "safe" },
      { id: 5, status: "safe" },
      { id: 6, status: "safe" },
      { id: 7, status: "safe" },
      { id: 8, status: "sick" },
      { id: 9, status: "sick" },
      { id: 10, status: "home" }
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

  // Click to send a sick person home
  sendHome = (e) => {
    let id = parseInt(e.target.id);
    let p = this.state.people.find((p) => p.id === id);
    let updatedP = { ...p, status: "home" }

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

  // Automatically return a home person back to naive in public after set interval
  homeToNaiveChanger = homePersonId => {
    // console.log("In naive to sick¸")
    let p = this.state.people.find((p) => p.id === homePersonId)
    // .map((np) => np.status       ))
    let updatedP = { ...p, status: 'naive' }

    function changeHomePersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === homePersonId ? updatedP : person
        )
      }
    }
    this.setState(changeHomePersonAndReturnAllPeople)
  }

  // Check to see if everyone is safe
  isEveryoneSafe = () => {
    if (!this.state.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'home')) {
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
    this.setState(changeSafePersonAndReturnAllPeople)
  }

  render() {
    return (
      <div className="App">
        < Header />

        <h3>In Public</h3>

        {this.state.people.map(person => {
          if (person.status === "naive") {
            return <NaivePerson key={`naive-${person.id}`} id={person.id} status={person.status} makeSafe={this.makeSafe} naiveToSickChanger={this.naiveToSickChanger} />
          } else if (person.status === "safe") {
            return <SafePerson key={`safe-${person.id}`} id={person.id} status={person.status} safeToSavedChanger={this.safeToSavedChanger} allPeople={this.state.people} />
          } else if (person.status === "sick") {
            return <SickPerson key={`sick-${person.id}`} id={person.id} status={person.status} sendHome={this.sendHome} />
          } else if (person.status === "saved") {
            return <span key={`saved-${person.id}`} id={person.id} style={{ cursor: 'not-allowed' }}>🥰</span>
            }
          })
        }

        <h3>At Home</h3>

        {this.state.people.map(person => {
            if (person.status === "home") {
              return <HomePerson key={`home-${person.id}`} id={person.id} status={person.status} homeToNaiveChanger={this.homeToNaiveChanger} />
            }
          })
        }

      </div>
    )
  }
}