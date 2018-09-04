import React, { Component } from 'react';

export default class Login extends Component {
    state = {
        loginEmail: "",
        loginUsername: ""
    }
    handleFields = (event) => {
        let values = {}
        values[event.target.id] = event.target.value
        this.setState(values)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8088/users?email=${this.state.loginEmail}&password=${this.state.loginUsername}`)
            .then(r => r.json())
            .then(user => {
                if (user.length) {

                    let userinfo = {
                        userId: user[0].id
                    }
                    sessionStorage.setItem("userInfo", JSON.stringify(userinfo))
                    alert("You have successfully logged in!")
                }
                else {
                    alert("Email or Password do not match our records!")
                }
            })
    }

    render() {
        return (
            <div>
                <label>Email</label>
                <input onChange={this.handleFields} id="loginEmail"></input>
                <label>Username</label>
                <input onChange={this.handleFields} id="loginUsername"></input>
                <button onClick={this.handleSubmit}>Log In</button>
            </div>
        )
    }


}