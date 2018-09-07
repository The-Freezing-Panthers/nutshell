import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginEmail: "",
            loginUsername: ""
        }
    }
    handleFields = (event) => {
        let values = {}
        values[event.target.id] = event.target.value
        this.setState(values)
    }
    handleSubmit = (e) => {
        e.preventDefault();
       return fetch(`http://localhost:8088/users?email=${this.state.loginEmail}&password=${this.state.loginUsername}`)
            .then(r => r.json())
            .then(user => {
                if (user.length) {
                    this.props.setActiveUser(user[0].id, user[0].username)
                    let userinfo = {
                        userId: user[0].id,
                        currentView: "mainpage",
                        username: user[0].username
                    }
                    sessionStorage.setItem("userInfo", JSON.stringify(userinfo))
                    alert("You have successfully logged in!")
                    this.props.showView("mainpage")
                }
                else {
                    alert("Email or Username do not match our records!")
                }
            })
    }
    registerButton = () => {
        this.props.showView("register")
    }

    render() {
        return (
            <div className="has-text-centered">
                <label>Email</label><br />
                <input onChange={this.handleFields} id="loginEmail" placeholder="email@email.com"></input><br />
                <label>Username</label><br />
                <input onChange={this.handleFields} id="loginUsername" placeholder="Username"></input><br />
                <button className="button is-primary is-outlined" onClick={this.handleSubmit}>Log In</button>
                <button className="button is-primary is-outlined" onClick={this.registerButton} >Register</button>
            </div>
        )
    }


}