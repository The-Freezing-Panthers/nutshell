import React, { Component } from "react"
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
                <fieldset>
                    <label for="new-event-date">Date:</label>
                    <input  type="date" id="newDate" onChange={this.handleFieldChange}/><br />
                    <label for="new-event-title">Event Name:</label>
                    <input  type="text" id="newTitle"onChange={this.handleFieldChange}/><br />
                    <label for="new-event-location">Event Location:</label>
                    <input type="text" id="newLocation"onChange={this.handleFieldChange}/><br />
                    <button onClick={this.constructNewEvent}>Add New Event</button>
                </fieldset>
            </React.Fragment>
        )
    }
}