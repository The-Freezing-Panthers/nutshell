import React, { Component } from "react"
import DataManager from '../../DataManager'
// import "./animal.css"

export default class ArticleForm extends Component {
   // Set initial state
   state = {
      articleName: ""
   }

   // Update state whenever an input field is edited
   handleFieldChange = evt => {
      console.log("evt handleFieldChange", evt);
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
   }

   /*
       Local method for validation, creating animal object, and
       invoking the function reference passed from parent component
    */
   constructNewArticle = evt => {
      evt.preventDefault()
      
      const article = {
      name: this.state.articleName,
      // breed: this.state.breed,
      // employeeId: this.props.employees.find(e => e.name === this.state.employee).id
      }

         // Create the animal and redirect user to animal list
      //    this.props.DataManager.saveArticle(article).then(() => this.props.history.push("/articles"))
         DataManager.saveData.saveArticle(article).then(() => this.props.history.push("/articles"))
   }

   render() {
      return (
         <React.Fragment>
            <form className="articleForm">
               <div className="form-group">
                  <label htmlFor="articleName">Article name</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="articleName"
                     placeholder="Article name" />
               </div>
               {/* <div className="form-group">
                  <label htmlFor="breed">Breed</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="breed" placeholder="Breed" />
               </div> */}
               {/* <div className="form-group">
                  <label htmlFor="employee">Assign to caretaker</label>
                  <select defaultValue="" name="employee" id="employee"
                     onChange={this.handleFieldChange}>
                     <option value="">Select an employee</option>
                     {
                        this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                     }
                  </select>
               </div> */}
               <button type="submit" onClick={this.constructNewArticle} className="btn btn-primary">Submit</button>
            </form>
         </React.Fragment>
      )
   }
}