//Purpose: Determines the view (login page or dashboard) 
import React, { Component } from 'react';
import Login from "./login/Login";
import EventList from './events/EventList'
import DataManager from '../DataManager'

export default class MainPage extends Component {
    state = {
        tasks: [],
        friends: [],
        messages: [],
        articles: [],
        events: []
    }

    componentDidMount() {
        const userID = JSON.parse(sessionStorage.getItem("userInfo"))[0].id
        const newState = {}

        DataManager.getData.getEvents(userID)
            .then(events => newState.events = events)
            .then(() => DataManager.getData.getTasks(userID))
            .then(tasks => newState.tasks = tasks)
            .then(() => DataManager.getData.getArticles(userID))
            .then(articles => newState.articles = articles)
            .then(() => DataManager.getData.getFriends(userID))
            .then(friends => newState.friends = friends)
            .then(() => DataManager.getData.getMessages(userID))
            .then(messages => newState.messages = messages)
            .then(() => this.setState(newState))
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