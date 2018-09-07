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
                    <button className="button is-primary is-inverted is-outlined" href="logout" onClick={this.logout}>Logout</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button className="button is-primary is-inverted is-outlined" href="login" onClick={this.login}>Login</button>
                </div>
            )
        }
    }
    render() {
        return (
            <nav className="navbar is-primary">
                <ul>
                    <div class="navbar-brand">
                    <div class="navbar-item">Nutshell</div>
                    </div>
                    <div className="navbar-end">
                    <div class="navbar-item"> {this.LoginLogout()} </div>
                    </div>
                </ul>
            </nav>
            
        )
    }
}