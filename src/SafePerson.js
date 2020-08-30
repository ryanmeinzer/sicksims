import React, { Component } from 'react'

export default class SafePerson extends Component {

    render() {
        return(
            <span className='safePersonEmoji' id={this.props.id} style={{ cursor: 'not-allowed' }}>😷</span>
        )
    }

}
