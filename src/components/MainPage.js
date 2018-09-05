//Purpose: Determines the view (login page or dashboard) 
import React, { Component } from 'react';
import EventList from './events/EventList';
import DataManager from '../DataManager';
import ArticleForm from './articles/ArticleForm';
import Friends from './friends/Friends';

export default class MainPage extends Component {
    state = {
        tasks: [],
        friends: [],
        messages: [],
        articles: [],
        events: []
    }

    // componentDidMount() {
    //     //const userID = JSON.parse(sessionStorage.getItem("credentials"))[0].id
    //     const newState = {}

    //     DataManager.getData.getEvents()
    //         .then(events => newState.events = events)
    //         .then(() => DataManager.getData.getTasks())
    //         .then(tasks => newState.tasks = tasks)
    //         .then(() => DataManager.getData.getArticles())
    //         .then(articles => newState.articles = articles)
    //         .then(() => DataManager.getData.getFriends())
    //         .then(friends => newState.friends = friends)
    //         .then(() => DataManager.getData.getMessages())
    //         .then(messages => newState.messages = messages)
    //         .then(() => this.setState(newState))
    // }

    render() {
        return (
            <div>
              
                <EventList
                    events={this.state.events}
                    addEvent={this.addEvent} />
                    <ArticleForm />
                    <Friends activeUser={this.props.activeUser}/>
            </div>
        )
    }
}