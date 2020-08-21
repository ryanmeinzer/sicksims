import React, { Component } from 'react'

export default class SickPerson extends Component {

    render() {
        return(
            <span id={this.props.id} onClick={this.props.makeQuarantined} style={{ cursor: 'pointer' }}>🤢</span>
        )
    }

}
