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
            <div>
                <label>Please create an Email and Username</label>
                <input onChange={this.handleFields} id="registerEmail" placeholder="Email"></input>
                <input onChange={this.handleFields} id="registerUsername" placeholder="Username"></input>
                <button onClick={this.handleRegister}>Register</button>

            </div>
        )
    }
}