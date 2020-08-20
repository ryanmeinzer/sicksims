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
            <SafePerson key={`safe-${sp.id}`} id={sp.id} status={sp.status} safeToSavedChanger={this.safeToSavedChanger} allPeople={this.state.people} />
        )).sort((a, b) => (a.id - b.id))
}

generateSickPeople = () => {
    return this.state.people
        .filter((p) => p.status === "sick")
        .map((sp) => (
            <SickPerson key={`sick-${sp.id}`} id={sp.id} status={sp.status} sendHome={this.sendHome} />
        )).sort((a, b) => (a.id - b.id))
}

{/* naive people */ }
{this.generateNaivePeople()}

{/* safe people */ }
{this.generateSafePeople()}

{/* sick people */ }
{this.generateSickPeople()}

{/* saved people */ }
{this.state.people
          .filter((p) => p.status === "saved")
          .map((sp) => (
            <span key={`saved-${sp.id}`} id={sp.id} style={{ cursor: 'not-allowed' }}>🥰</span>
          )).sort((a, b) => (a.id - b.id))}

        <h3>At Home</h3>

{/* home people */ }
{this.generateHomePeople()}

<h2>Naive</h2>
        {this.state.people
          .filter((p) => p.status === "naive")
          .map((np) => (
            <div id={np.id} onClick={this.makeSafe}>{`${np.name} - 😎`}</div>
          ))}

{let NaivePerson = this.props.people.filter(p => p.status === 'naive')
            .map(np => (
              < NaivePerson people={this.state.people} makeSafe={this.makeSafe} naiveToSickChanger={this.naiveToSickChanger} />
            ))}

{this.state.people
          .filter((p) => p.status === "home")
          .map((np) => (
            <span id={np.id} style={{ cursor: 'not-allowed' }}>🤢</span>
          )).sort((a, b) => (a.id - b.id))}

{this.state.people
          .filter((p) => p.status === "sick")
          .map((sp) => (
            <span key={`sick-${sp.id}`} id={sp.id} onClick={this.sendHome} style={{ cursor: 'pointer' }}>🤢</span>
          )).sort((a, b) => (a.id - b.id))}