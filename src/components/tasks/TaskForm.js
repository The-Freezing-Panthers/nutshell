import React, { Component } from "react"
// import DataManager from '../../DataManager'

export default class TaskForm extends Component {
   // Set initial state
   state = {
       // put task info here
      taskName: "",
      date: ""
   }

   // Update state whenever an input field is edited
   handleFieldChange = evt => {
      console.log("evt handleFieldChange", evt);
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
   }

   constructNewTask = evt => {
      // stop page refresh
      evt.preventDefault()
      
      const task = {
        taskName: this.state.taskName,
        date: this.state.date
      }

      this.props.addTask(task)
   }

   addNewDate = evt => {
         const d = new Date();
         let n = d.toDateString();
         return n;
   }

   componentDidMount() {
         this.setState({
            date: this.addNewDate()
         });
   }

   render() {
      return (
         <React.Fragment>
            <form className="taskForm">
               <div className="form-group">
                  <label htmlFor="taskName">Task name</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="taskName"
                     placeholder="enter task" />
               </div>

               <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="date" value={this.state.date} />
               </div>

               <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Submit</button>
            </form>
         </React.Fragment>
      )
   }
}