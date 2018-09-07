//Purpose: Build the task container, loop over each task in the database, and build a list of all tasks

import React, { Component } from "react";
import TaskCard from "./TaskCard";

export default class TaskList extends Component {

    render () {
        return (
            <div>
                <h3>Tasks</h3>
                <section>
                    {
                        this.props.tasks.map(task => (
                            <TaskCard 
                            key={task.id}
                            task={task} 
                            deleteTask={this.props.deleteTask}
                            />

                        ))
                    }    
                    <br /> 
                </section>
            </div>
        );
    }
}