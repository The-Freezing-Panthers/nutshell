//Purpose: HTML representation of each individual task

import React, { Component } from "react"

export default class TaskCard extends Component {

    render() {
        return (
            <div className="box">
                {this.props.task.taskName}<br />
                {this.props.task.date}<br />

                 <div className="form-group">
                  <label htmlFor="complete">Mark complete: </label>
                  <select defaultValue="" onChange={this.handleFieldChange}>
                    <option value="incomplete">incomplete</option>
                    <option value="complete">complete</option>
                  </select>
               </div>

                <button className="button is-small is-danger is-outlined" onClick={() => this.props.deleteTask(this.props.task.id)}>Remove Task
                </button>

            </div>
        )
    }
}