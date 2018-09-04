//Purpose: Build the event container, loop over each event in the database, and build a list of all events

import React, { Component } from 'react'
import EventCard from './EventCard'
import DataManager from '../../DataManager'

export default class EventList extends Component {

    state = {}

    addEvent = event => {
        const NewEvent = {
            title: document.querySelector("#new-event-date").value,
            date: document.querySelector("#new-event-name").value,
            location: document.querySelector("#new-event-location").value
        }
        DataManager.saveData.saveEvent(NewEvent)
            .then(() => DataManager.getData.getEvents())
            .then(events => this.setState({
                events: events
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3>Events</h3>
                    <fieldset>
                        <label for="new-event-date">Date:</label>
                        <input id="new-event-date" type="text" /><br />
                        <label for="new-event-name">Event Name:</label>
                        <input id="new-event-name" type="text" /><br />
                        <label for="new-event-location">Event Location:</label>
                        <input id="new-event-location" type="text" /><br />
                        <button onClick={this.addEvent}>Add New Event</button>
                    </fieldset>
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