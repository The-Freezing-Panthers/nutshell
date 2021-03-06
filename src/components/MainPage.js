//Purpose: Determines the view (login page or dashboard) 
import React, { Component } from 'react';
import EventList from './events/EventList';
import DataManager from '../DataManager';
import ArticleForm from './articles/ArticleForm';
import ArticleList from './articles/ArticleList';
import Friends from './friends/Friends';
import MessageList from './messages/messagesList'
import TaskList from './tasks/TaskList';
import TaskForm from './tasks/TaskForm';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    state = {
        tasks: [],
        friends: [],
        messages: [],
        articles: [],
        events: []
    }

    addEvent = event => DataManager.saveData.saveEvent(event)
        .then(() => DataManager.getData.getEvents(this.props.activeUser))
        .then(events => this.setState({
            events: events
        }))

    deleteEvent = event => DataManager.deleteData.deleteEvent(event)
        .then(() => DataManager.getData.getEvents(this.props.activeUser))
        .then(events => this.setState({
            events: events
        }))

    editEvent = (eventID, editedEvent) => {
        DataManager.editData.editEvent(eventID, editedEvent)
            .then(() => DataManager.getData.getEvents(this.props.activeUser))
            .then(events => this.setState({
                events: events
            }))
    }

    addMessage = message => DataManager.saveData.saveMessages(message)
        .then(() => DataManager.getData.getMessages())
        .then(messages => this.setState({
            messages: messages
        }))

    // I needed this here so I could change state and update page when article deleted
    deleteArticle = article => DataManager.deleteData.deleteArticle(article)
        .then(() => DataManager.getData.getArticles())
        .then(article => this.setState({
            articles: article
        }))

    addArticle = article => DataManager.saveData.saveArticle(article)
        .then(() => DataManager.getData.getArticles())
        .then(articles => this.setState({
            articles: articles
        }))

    deleteTask = task => DataManager.deleteData.deleteTask(task)
        .then(() => DataManager.getData.getTasks())
        .then(task => this.setState({
            tasks: task
        }))

    addTask = task => DataManager.saveData.saveTask(task)
        .then(() => DataManager.getData.getTasks())
        .then(tasks => this.setState({
            tasks: tasks
        }))

    editMessage = (messageID, editedMessage) => {
        DataManager.editData.editMessage(messageID, editedMessage)
            .then(() => DataManager.getData.getMessages())
            .then(messages => this.setState({
                messages: messages
            }))
    }

    deleteMessage = messageID => DataManager.deleteData.deleteMessage(messageID)
        .then(() => DataManager.getData.getMessages())
        .then(messages => this.setState({
            messages: messages
        }))

    componentDidMount() {
        const newState = {}

        DataManager.getData.getEvents(this.props.activeUser)
            .then(events => newState.events = events)
            .then(() => DataManager.getData.getTasks())
            .then(tasks => newState.tasks = tasks)
            .then(() => DataManager.getData.getArticles())
            .then(articles => newState.articles = articles)
            //.then(() => DataManager.getData.getFriends())
            // .then(friends => newState.friends = friends)
            .then(() => DataManager.getData.getMessages())
            .then(messages => newState.messages = messages)
            .then(() => this.setState(newState))
        // .then(() => console.log(this.state))
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-5 is-offset-1">
                        <EventList
                            className=""
                            events={this.state.events}
                            addEvent={this.addEvent}
                            deleteEvent={this.deleteEvent}
                            editEvent={this.editEvent}
                            activeUser={this.props.activeUser}
                        />
                    </div>
                    <div className="column is-5">
                        <MessageList
                            messages={this.state.messages}
                            addMessage={this.addMessage}
                            editMessage={this.editMessage}
                            deleteMessage={this.deleteMessage}
                            activeUsername={this.props.activeUsername}
                        />
                    </div>
                </div>
                {/* does there need to be a condition to check if articles is empty? */}
                <div className="columns">
                    <div className="column is-5 is-offset-1 box has-background-grey-lighter	">
                        <ArticleList
                            articles={this.state.articles}
                            deleteArticle={this.deleteArticle}
                        />
                        <ArticleForm
                            articles={this.state.articles}
                            addArticle={this.addArticle}
                        // constructNewArticle={this.constructNewArticle}
                        />
                    </div>
                    <div className="column is-5 box has-background-grey-lighter">
                        <Friends activeUser={this.props.activeUser} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-half is-offset-3 box has-background-grey-lighter">
                        <TaskList
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                        />

                        <TaskForm
                            tasks={this.setState.tasks}
                            addTask={this.addTask}
                        />
                    </div>
                </div>

            </div>
        )
    }
}