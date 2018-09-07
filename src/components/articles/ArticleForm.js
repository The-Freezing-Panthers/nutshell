import React, { Component } from "react"

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

   constructNewArticle = evt => {
      // stop page refresh
      evt.preventDefault()
      
      const article = {
      title: this.state.title,
      synopsis: this.state.synopsis,
      url: this.state.url,
      date: this.state.date
      }

      this.props.addArticle(article)
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
               <button type="submit" onClick={this.constructNewArticle} className="btn btn-primary">Submit</button>
            </form>
         </React.Fragment>
      )
   }
}