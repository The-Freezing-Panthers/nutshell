//Purpose: Build the event container, loop over each event in the database, and build a list of all events

import React, { Component } from 'react'
import EventCard from './EventCard'
import EventForm from './EventForm'
import './Event.css'


export default class EventList extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="">
                <div className="">
                    <h3>New Event</h3>
                    <EventForm {...this.props}
                    addEvent={this.props.addEvent}
                    activeUser={this.props.activeUser}/>
                </div>
                <section className="">
                <h3>Your Events</h3>
                    {
                        this.props.events.map(event =>
                            <EventCard {...this.props}
                            key={event.id} 
                            event={event}
                            editEvent={this.props.editEvent}
                            deleteEvent={this.props.deleteEvent} 
                            activeUser={this.props.activeUser}/>
                        )
                    }
                </section>
            </div>
        )
    }
}