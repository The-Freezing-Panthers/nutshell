//Purpose: HTML representation of each individual task

import React, { Component } from "react"

export default class TaskCard extends Component {

    render() {
        return (
            <div>
                {this.props.task.taskName}<br />
                {this.props.task.date}<br />

                <button onClick={() => this.props.deleteTask(this.props.task.id)}>Remove Task
                </button>
            </div>
        )
    }
}