import React, { Component } from "react"
// import DataManager from '../../DataManager'
// import "./animal.css"

export default class EventForm extends Component {
    // Set initial state
    state = {
        newTitle: "",
        newDate: "",
        newLocation: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating event object, and
        invoking the function reference passed from parent component
     */
    constructNewEvent = () => {
        const event = {
            title: this.state.newTitle,
            date: this.state.newDate,
            location: this.state.newLocation,
            userId: this.props.activeUser
        }
        this.props.addEvent(event)
            .then(() => {
                document.querySelector("#newDate").value = ""
                document.querySelector("#newTitle").value = ""
                document.querySelector("#newLocation").value = ""
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="box has-background-grey has-text-white">
                    <h5 className="is-size5">Add New Event</h5>
                    <hr />
                    <label htmlFor="new-event-date">Date:</label>
                    <input type="date" id="newDate" onChange={this.handleFieldChange} /><br />
                    <label htmlFor="new-event-title">Event Name:</label>
                    <input type="text" id="newTitle" onChange={this.handleFieldChange} /><br />
                    <label htmlFor="new-event-location">Event Location:</label>
                    <input type="text" id="newLocation" onChange={this.handleFieldChange} /><br />
                    <button className="button is-small is-primary" onClick={this.constructNewEvent}>Add New Event</button>
                </div>
            </React.Fragment>
        )
    }
}