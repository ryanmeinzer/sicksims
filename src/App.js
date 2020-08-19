import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import RiskyPeople from './RiskyPeople.js'

export default class App extends Component {

  state = {
    people: [
      { id: 1, name: "Chris", status: "risky" },
      { id: 2, name: "Ryan", status: "risky" },
      { id: 3, name: "Jaeson", status: "sick" },
      { id: 4, name: "Matt", status: "safe" }
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
        <RiskyPeople key={`risky-${index}`} id={rp.id} name={rp.name} status={rp.status} makeSafe={this.makeSafe} riskyToSickChanger={this.riskyToSickChanger} />
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
            <div id={np.id}>{`${np.name} - 😷`}</div>
          ))}
        <h2>Sick</h2>
        {this.state.people
          .filter((p) => p.status === "sick")
          .map((np) => (
            <div id={np.id}>{`${np.name} - 🤢`}</div>
          ))}
      </div>
    )
  }

}

  //when we add people they get a name, and their status is automatically risky