import React, { Component } from 'react';
import DataManager from '../../DataManager'

export default class Register extends Component {
    state = {
        registerEmail: "",
        registerUsername: ""
    }
    handleFields = (event) => {
        let values = {}
        values[event.target.id] = event.target.value
        this.setState(values)
    }
    handleRegister = () => {
        let email = this.state.registerEmail
        let username = this.state.registerUsername
        DataManager.getData.checkUser(email, username)
            .then(response => {
                if (response.length) {
                    alert("User already exists!")
                }
                else {
                    DataManager.saveData.saveUser(email, username)
                        .then(
                            alert("User Created Please Log In"),
                            this.props.showView("login")
                        )
                }
            }
            )
    }


    render() {
        return (
            <div className="has-text-centered">
                <label>Please create an Email and Username</label><br />
                <input onChange={this.handleFields} id="registerEmail" placeholder="Email"></input><br />
                <input onChange={this.handleFields} id="registerUsername" placeholder="Username"></input><br />
                <button className="button is-primary is-outlined" onClick={this.handleRegister}>Register</button>

            </div>
        )
    }
}