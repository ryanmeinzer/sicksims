import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import RiskyPeople from './RiskyPeople.js'

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
      { id: 8, status: "safe" },
      { id: 9, status: "sick" },
      { id: 10, status: "sick" }
    ]
  }

  riskyToSickChanger = sickPersonId => {
    console.log("In risky to sick¸")
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

  generateRiskyPeople = () => {
    return this.state.people
      .filter((p) => p.status === "risky")
      .map((rp, index) => (
        <RiskyPeople key={`risky-${index}`} id={rp.id} status={rp.status} makeSafe={this.makeSafe} riskyToSickChanger={this.riskyToSickChanger} />
      ))
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

        <h2>Risky</h2>
        {this.generateRiskyPeople()}

        {/* {let riskyPeople = this.props.people.filter(p => p.status === 'risky')
            .map(rp => (
              < RiskyPeople people={this.state.people} makeSafe={this.makeSafe} riskyToSickChanger={this.riskyToSickChanger} />
        } */}

        <h2>Safe</h2>
        {this.state.people
          .filter((p) => p.status === "safe")
          .map((np) => (
            <div id={np.id}>😷</div>
          ))}
        <h2>Sick</h2>
        {this.state.people
          .filter((p) => p.status === "sick")
          .map((np) => (
            <div id={np.id}>🤢</div>
          ))}
      </div>
    )
  }

}

  //when we add people they get a name, and their status is automatically risky