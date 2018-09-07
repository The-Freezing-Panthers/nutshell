import React, { Component } from 'react';

export default class PendingCard extends Component {


    render() {
        return (
            <div key={this.props.pendingFriend.id} id={this.props.pendingFriend.id} className="pendingFriendCard box">
                <p>{this.props.pendingFriend.friendUsername} wants to be your friend!</p>
                <button className="button is-small is-primary" onClick={this.props.acceptFriend}>Accept</button>



            </div>
        )
    }
}
