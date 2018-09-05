//Purpose: Build the event container, loop over each event in the database, and build a list of all events

import React, { Component } from 'react'
import EventCard from './EventCard'
import DataManager from '../../DataManager'

export default class EventList extends Component {

    addEvent = event => {
        DataManager.addEvent(event)
        .then(() => DataManager.getAllEvents())
        .then(events => this.setState({
            events: events
        }))
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3>Events</h3>
                    <button onClick={this.addEvent}>Add New Event</button>
                </div>
                <section>
                    {
                        this.props.events.map(event =>
                            <EventCard key={event.id} event={event} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}