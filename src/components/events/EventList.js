//Purpose: Build the event container, loop over each event in the database, and build a list of all events

import React, { Component } from 'react'
import EventCard from './EventCard'
import EventForm from './EventForm'
import './Event.css'


export default class EventList extends Component {

    render() {
        return (
            <div className="events">
                <div>
                    <h3>Events</h3>
                    <EventForm addEvent={this.props.addEvent}/>
                </div>
                <section>
                    {
                        this.props.events.map(event =>
                            <EventCard {...this.props}
                            key={event.id} 
                            event={event}
                            deleteEvent={this.props.deleteEvent} />
                        )
                    }
                </section>
            </div>
        )
    }
}