//Purpose: HTML representation of each individual message

import React, { Component } from 'react'


export default class MessageCard extends Component {
    state = {
        message: {
            sender: this.props.message.sender,
            content: this.props.message.content,
            id: this.props.message.id,
            activeUsername: this.props.activeUsername
        },
        edit: false
    }

    handleEditClicked = () => {
        this.setState({
            edit: true
        })
    }

    handleFieldChange = (whichOne, evt) => {
        const updateMessage = this.state.message;
        const stateToChange = whichOne
        updateMessage[stateToChange] = evt.target.value
        this.setState({ updateMessage })
    }

    constructNewMessage = evt => {
        evt.preventDefault()
        const message = {
            sender: this.state.message.sender,
            content: this.state.message.content,
            id: this.state.message.id,
            sender: this.props.activeUsername
        }

        // Add new message to database and turn edit to false
        this.props.editMessage(this.state.message.id, message);
        this.setState({ edit: false });
    }

    render() {
        return (
            <div className="box">
                {(this.state.edit) ?
                    <div>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={(evt) => { this.handleFieldChange("content", evt) }}
                            id="editContent"
                            value={this.state.message.content} />
                    </div>
                    :
                    <div>
                        <p>{this.props.message.sender}: {this.state.message.content}</p>
                        <button className="button is-small is-danger is-outlined" onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete message</button>

                    </div>
                }

                {(this.state.edit) ?
                    <button onClick={this.constructNewMessage}
                        className="button">Save Message</button>
                    : <button onClick={() => this.handleEditClicked()}
                        className="button is-small is-warning is-inverted is-outlined">Edit Message</button>
                }
            </div>
        )
    }
}