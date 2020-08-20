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

  // safeToSavedChanger = safePersonId => {
  //   // console.log("In naive to sick¸")
  //   let p = this.state.people.find((p) => p.id === safePersonId)
  //   // .map((np) => np.status       ))
  //   let updatedP = { ...p, status: 'saved' }

  //   function changeSafePersonAndReturnAllPeople(prevState) {
  //     return {
  //       people: prevState.people.map((person) =>
  //         person.id === safePersonId ? updatedP : person
  //       )
  //     }
  //   }
  //   this.setState(changeSafePersonAndReturnAllPeople)
  // }

  isEveryoneSafe = () => {
    if (!this.state.people.find(({ status }) => status === 'naive' || status === 'sick' || status === 'home')) {
        this.safeToSavedChanger()
      }
  }

  safeToSavedChanger = () => {
    function changeSafePersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>  {
          // debugger
          if (person.status === 'safe') {
            return { ...person, status: 'saved' } 
          }
        })
      }
    }
    this.setState(changeSafePersonAndReturnAllPeople)
  }

  generateNaivePeople = () => {
    return this.state.people
      .filter((p) => p.status === "naive")
      .map((np) => (
        <NaivePerson key={`naive-${np.id}`} id={np.id} status={np.status} makeSafe={this.makeSafe} naiveToSickChanger={this.naiveToSickChanger} />
      )).sort((a, b) => (a.id - b.id))
  }

  generateHomePeople = () => {
    return this.state.people
      .filter((p) => p.status === "home")
      .map((hp) => (
        <HomePerson key={`home-${hp.id}`} id={hp.id} status={hp.status} homeToNaiveChanger={this.homeToNaiveChanger} />
      )).sort((a, b) => (a.id - b.id))
  }

  generateSafePeople = () => {
    return this.state.people
      .filter((p) => p.status === "safe")
      .map((sp) => (
        <SafePerson key={`safe-${sp.id}`} id={sp.id} status={sp.status} safeToSavedChanger={this.safeToSavedChanger} allPeople={this.state.people}/>
      )).sort((a, b) => (a.id - b.id))
  }

  generateSickPeople = () => {
    return this.state.people
      .filter((p) => p.status === "sick")
      .map((sp) => (
        <SickPerson key={`sick-${sp.id}`} id={sp.id} status={sp.status} sendHome={this.sendHome}/>
      )).sort((a, b) => (a.id - b.id))
  }

  render() {
    return (
      <div className="App">
        < Header />

        <h3>In Public</h3>

        {/* render all people individually to preserve order
        {this.state.people.map(person =? {
          if (person.status == "sick"){
            <SickPeople />
          } else if 
        })} */}

        {/* naive people */}
        {this.generateNaivePeople()}

        {/* safe people */}
        {this.generateSafePeople()}

        {/* sick people */}
        {this.generateSickPeople()}

        {/* {this.state.people
          .filter((p) => p.status === "sick")
          .map((sp) => (
            <span key={`sick-${sp.id}`} id={sp.id} onClick={this.sendHome} style={{ cursor: 'pointer' }}>🤢</span>
          )).sort((a, b) => (a.id - b.id))} */}

        {/* saved people */}
        {this.state.people
          .filter((p) => p.status === "saved")
          .map((sp) => (
            <span key={`saved-${sp.id}`} id={sp.id} style={{ cursor: 'not-allowed' }}>🥰</span>
          )).sort((a, b) => (a.id - b.id))}

        <h3>At Home</h3>

        {/* home people */}
        {this.generateHomePeople()}

      </div>
    )
  }

}

// - - -

{/* <h2>Naive</h2>
        {this.state.people
          .filter((p) => p.status === "naive")
          .map((np) => (
            <div id={np.id} onClick={this.makeSafe}>{`${np.name} - 😎`}</div>
          ))} */}

{/* {let NaivePerson = this.props.people.filter(p => p.status === 'naive')
            .map(np => (
              < NaivePerson people={this.state.people} makeSafe={this.makeSafe} naiveToSickChanger={this.naiveToSickChanger} />
        } */}

{/* {this.state.people
          .filter((p) => p.status === "home")
          .map((np) => (
            <span id={np.id} style={{ cursor: 'not-allowed' }}>🤢</span>
          )).sort((a, b) => (a.id - b.id))} */}

