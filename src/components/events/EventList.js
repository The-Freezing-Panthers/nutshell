//Purpose: Build the event container, loop over each event in the database, and build a list of all events

import React, { Component } from 'react'
import EventCard from './EventCard'
import DataManager from '../../DataManager'
import EventForm from './EventForm'

export default class EventList extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3>Events</h3>
                    <EventForm addEvent={this.props.addEvent}/>
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