import React, { Component } from 'react'

export default class SafePerson extends Component {

    render() {
        return(
            <span id={this.props.id} style={{ cursor: 'not-allowed' }}>😷</span>
        )
    }

}
