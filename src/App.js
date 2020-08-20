import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import RiskyPerson from './RiskyPerson.js'
import HomePerson from './HomePerson.js'

export default class App extends Component {

  state = {
    people: [
      { id: 1, status: "risky" },
      { id: 2, status: "risky" },
      { id: 3, status: "risky" },
      { id: 4, status: "safe" },
      { id: 5, status: "safe" },
      { id: 6, status: "safe" },
      { id: 7, status: "safe" },
      { id: 8, status: "sick" },
      { id: 9, status: "sick" },
      { id: 10, status: "home" }
    ]
  }

  riskyToSickChanger = sickPersonId => {
    // console.log("In risky to sick¸")
    let p = this.state.people.find((p) => p.id === sickPersonId)
      // .map((np) => np.status       ))
    let updatedP = { ...p, status: 'sick' }

    function changeRiskyPersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === sickPersonId ? updatedP : person
        )
      }
    }
    this.setState(changeRiskyPersonAndReturnAllPeople)
  }

  makeSafe = (e) => {
    let id = parseInt(e.target.id);
    let p = this.state.people.find((p) => p.id === id);
    let updatedP = { ...p, status: "safe" }

    function changeOnPersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === id ? updatedP : person
        )
      }
    }
    this.setState(changeOnPersonAndReturnAllPeople)
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

  homeToRiskyChanger = homePersonId => {
    // console.log("In risky to sick¸")
    let p = this.state.people.find((p) => p.id === homePersonId)
    // .map((np) => np.status       ))
    let updatedP = { ...p, status: 'risky' }

    function changeHomePersonAndReturnAllPeople(prevState) {
      return {
        people: prevState.people.map((person) =>
          person.id === homePersonId ? updatedP : person
        )
      }
    }
    this.setState(changeHomePersonAndReturnAllPeople)
  }

  generateRiskyPeople = () => {
    return this.state.people
      .filter((p) => p.status === "risky")
      .map((rp) => (
        <RiskyPerson key={`risky-${rp.id}`} id={rp.id} status={rp.status} makeSafe={this.makeSafe} riskyToSickChanger={this.riskyToSickChanger} />
      )).sort((a, b) => (a.id - b.id))
  }

  generateHomePeople = () => {
    return this.state.people
      .filter((p) => p.status === "home")
      .map((hp) => (
        <HomePerson key={`home-${hp.id}`} id={hp.id} status={hp.status} homeToRiskyChanger={this.homeToRiskyChanger} />
      )).sort((a, b) => (a.id - b.id))
  }

  render() {
    return (
      <div className="App">
        < Header />
        {/* <h2>Form to add people</h2>
        // add Risky People component here */}
        
        {/* <h2>Risky</h2>
        {this.state.people
          .filter((p) => p.status === "risky")
          .map((np) => (
            <div id={np.id} onClick={this.makeSafe}>{`${np.name} - 😎`}</div>
          ))} */}

        {/* <h2>Risky</h2> */}
        <h3>In Public</h3>
        {this.generateRiskyPeople()}

        {/* {let RiskyPerson = this.props.people.filter(p => p.status === 'risky')
            .map(rp => (
              < RiskyPerson people={this.state.people} makeSafe={this.makeSafe} riskyToSickChanger={this.riskyToSickChanger} />
        } */}

        {/* <h2>Safe</h2> */}
        {this.state.people
          .filter((p) => p.status === "safe")
          .map((sp) => (
            <span key={`safe-${sp.id}`} id={sp.id} style={{ cursor: 'not-allowed' }}>😷</span>
          )).sort((a, b) => (a.id - b.id))}

        {/* <h2>Sick</h2> */}
        {this.state.people
          .filter((p) => p.status === "sick")
          .map((sp) => (
            <span key={`sick-${sp.id}`} id={sp.id} onClick={this.sendHome} style={{ cursor: 'pointer' }}>🤢</span>
          )).sort((a, b) => (a.id - b.id))}

        <h3>At Home</h3>
        {this.generateHomePeople()}
        {/* {this.state.people
          .filter((p) => p.status === "home")
          .map((np) => (
            <span id={np.id} style={{ cursor: 'not-allowed' }}>🤢</span>
          )).sort((a, b) => (a.id - b.id))} */}
      </div>
    )
  }

}

  //when we add people they get a name, and their status is automatically risky