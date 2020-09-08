import React, { Component } from 'react'
import NaivePerson from './NaivePerson.js'
import QuarantinedPerson from './QuarantinedPerson.js'
import SafePerson from './SafePerson.js'
import SickPerson from './SickPerson.js'
import { connect } from 'react-redux'
import { makeQuarantined } from './redux/actions'

class GameContainer extends Component {

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
    dispatchedMakeQuarantined: (id) => dispatch(makeQuarantined(parseInt(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)