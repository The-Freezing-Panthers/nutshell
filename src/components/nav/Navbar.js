//Purpose: Building the navbar to display the logout button

import React, { Component } from 'react'
import './Navbar.css'


export default class Navbar extends Component {
    login = () => {
        this.props.showView("login")
    }
    logout = () => {
        this.props.showView("logout")
    }




    LoginLogout = () => {
        if (this.props.activeUser !== "" || null) {
            return (
                <div>
                    <a href="logout" onClick={this.logout}>Logout</a>
                </div>
            )
        }
        else {
            return (
                <div>
                    <a href="login" onClick={this.login}>Login</a>
                </div>
            )
        }
    }
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>Nutshell</li>
                    <div> {this.LoginLogout()} </div>
                </ul>
            </nav>
        )
    }
}