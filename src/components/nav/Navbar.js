//Purpose: Building the navbar to display the logout button

import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>Nutshell</li>
                    <li><button>Logout</button></li>
                </ul>
            </nav>
        )
    }
}