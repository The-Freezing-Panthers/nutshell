//Purpose: Determines the view (login page or dashboard) 
import React, { Component } from 'react';
import Login from "./login/Login";
import EventList from './events/EventList';
import DataManager from '../DataManager';

export default class MainPage extends Component {
    state = {
        tasks: [],
        friends: [],
        messages: [],
        articles: [],
        events: [
            {
                "id": 1,
                "userid": 1,
                "title": "Birthday Party",
                "date": "08/23/1992",
                "location": "NSS"
            },
            {
                "id": 2,
                "userid": 1,
                "title": "Meetup",
                "date": "1/4/2982",
                "location": "The Future"
            }
        ]
    }

    componentDidMount() {
        //const userID = JSON.parse(sessionStorage.getItem("credentials"))[0].id
        const newState = {}

        // DataManager.getData.getEvents()
        //     .then(events => newState.events = events)
        //     .then(() => DataManager.getData.getTasks())
        //     .then(tasks => newState.tasks = tasks)
        //     .then(() => DataManager.getData.getArticles())
        //     .then(articles => newState.articles = articles)
        //     .then(() => DataManager.getData.getFriends())
        //     .then(friends => newState.friends = friends)
        //     .then(() => DataManager.getData.getMessages())
        //     .then(messages => newState.messages = messages)
        //     .then(() => this.setState(newState))
    }


    render() {
        return (
            <div>
                <Login />
                <EventList
                    events={this.state.events}
                    addEvent={this.addEvent} />
            </div>
        )
    }
}