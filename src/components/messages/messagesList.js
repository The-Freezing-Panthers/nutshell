//Purpose: Build the message container, loop over each message in the database, and build a list of all messages

import React, { Component } from 'react'
import MessagesCard from './messagesCard'
import './Messages.css'

export default class MessagesList extends Component {
    state = {
        content: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = () => {
        const message = {
            content: this.state.content,
            sender: this.props.activeUsername
        }
        this.props.addMessage(message)
        .then(() => {
            document.querySelector("#content").value = ""
        })
    }
    
    render() {
        return (
            <div className="messages box">
                <h4 className="is-size-4">Messages</h4>
                <section>
                    {
                        this.props.messages.map(message =>
                            <MessagesCard
                                key={message.id}
                                message={message}
                                editMessage={this.props.editMessage}
                                deleteMessage={this.props.deleteMessage}
                                activeUsername={this.props.activeUsername}
                            />
                        )
                    }
                </section>
                    <hr />
                    <label for="content">New Message: </label>
                    <input type="text" id="content" onChange={this.handleFieldChange}/><br />
                    <button className="button is-small is-primary is-outlined" onClick={this.constructNewMessage}>Send Message</button>
            </div>
        )
    }
}