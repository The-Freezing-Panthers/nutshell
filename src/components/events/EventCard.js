//Purpose: HTML representation of each individual event
import DataManager from '../../DataManager'

import React, { Component } from 'react'

export default class EventCard extends Component {
    state = {
        event: {
            date: this.props.event.date,
            title: this.props.event.title,
            location: this.props.event.location,
            id: this.props.event.id
        },
        edit: false
    }

    handleEditClicked = () => {
        this.setState({
            edit: true
        })
    }

    handleFieldChange = (whichOne, evt) => {
        const updateEvent = this.state.event;
        const stateToChange = whichOne
        updateEvent[stateToChange] = evt.target.value
        this.setState({ updateEvent })
    }

    constructNewEvent = evt => {
        evt.preventDefault()
        const event = {
            date: this.state.event.date,
            title: this.state.event.title,
            location: this.state.event.location,
            id: this.state.event.id,
            userId: this.props.activeUser
        }

        // Add new event to database and turn edit to false
        this.props.editEvent(this.state.event.id, event);
        this.setState({ edit: false });
    }


    render() {
        return (
            <div key={this.props.event.id} id={this.props.event.id} className="box">

                {(this.state.edit) ?
                    <div>
                        <label for="editDate">Date: </label>
                        <input type="date" required="true"
                            className="form-control"
                            onChange={(evt) => { this.handleFieldChange("date", evt) }}
                            id="editDate"
                            value={this.state.event.date} /><br />
                        <label for="editTitle">Title: </label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={(evt) => { this.handleFieldChange("title", evt) }}
                            id="editTitle"
                            value={this.state.event.title} /><br />
                        <label for="editLocation">Location: </label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={(evt) => { this.handleFieldChange("location", evt) }}
                            id="editLocation"
                            value={this.state.event.location} /><br />
                    </div>
                    :
                    <div>
                        <h3>{this.props.event.date} - {this.props.event.title}</h3>
                        <h4>Location: {this.props.event.location}</h4>
                        <button className="button is-small is-danger is-outlined" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete Event</button>
                    </div>
                }

                {(this.state.edit) ?
                    <button onClick={this.constructNewEvent}
                        className="button">Save Event</button>
                    : <button onClick={() => this.handleEditClicked()}
                        className="button is-small is-warning is-outlined is-inverted">Edit Event</button>
                }


            </div>
        )
    }
}