//Purpose: Build the message container, loop over each message in the database, and build a list of all messages

import React, { Component } from 'react'
import MessagesCard from './messagesCard'

export default class MessagesList extends Component {
    state = {
        content: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = () => {
        const message = {
            content: this.state.content,
        }
        this.props.addMessage(message)
        .then(() => {
            document.querySelector("#content").value = ""
        })
    }
    
    render() {
        return (
            <div>
                <h3>Messages</h3>
                <section>
                    {
                        this.props.messages.map(message =>
                            <MessagesCard
                                key={message.id}
                                message={message}
                            />
                        )
                    }
                </section>
                <fieldset>
                    <label for="content">New Message: </label>
                    <input type="text" id="content" onChange={this.handleFieldChange}/>
                    <button onClick={this.constructNewMessage}>Send Message</button>
                </fieldset>
            </div>
        )
    }
}