//Purpose: HTML representation of each individual event

import React, { Component } from 'react'

export default class EventCard extends Component {
    render() {
        return (
            <div key={this.props.event.id} id={this.props.event.id} className="eventCard">
                <h3>{this.props.event.date} - {this.props.event.title}</h3>
                <h4>Location: {this.props.event.location}</h4>
                <button onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
            </div>
        )
    }
}