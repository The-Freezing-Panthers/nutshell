//Purpose: HTML representation of each individual message

import React, { Component } from 'react'


export default class MessageCard extends Component {
    render() {
        return (
            <p>{this.props.message.sender}: {this.props.message.content}</p>
        )
    }
}