import React, { Component } from "react"
import DataManager from '../../DataManager'
// import "./form.css"

export default class ArticleForm extends Component {
   // Set initial state
   state = {
      // articleName: ""
      title: "",
      synopsis: "",
      url: "",
      date: ""
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
      title: this.state.title,
      synopsis: this.state.synopsis,
      url: this.state.url,
      date: this.state.date
      
      // breed: this.state.breed,
      // employeeId: this.props.employees.find(e => e.name === this.state.employee).id
      }

         // Create the animal and redirect user to animal list
      //    this.props.DataManager.saveArticle(article).then(() => this.props.history.push("/articles"))
         DataManager.saveData.saveArticle(article);
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
            <form className="articleForm">
               <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="title"
                     placeholder="Title" />
               </div>
               <div className="form-group">
                  <label htmlFor="synopsis">Synopsis</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="synopsis" placeholder="Synopsis" />
               </div>
               <div className="form-group">
                  <label htmlFor="url">URL</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="url" placeholder="URL" />
               </div>
               <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="text" required="true"
                     className="form-control"
                     onChange={this.handleFieldChange}
                     id="date" value={this.state.date} />
               </div>
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