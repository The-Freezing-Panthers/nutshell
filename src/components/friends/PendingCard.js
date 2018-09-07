import React, { Component } from 'react';

export default class PendingCard extends Component {


    render() {
        return (
            <div key={this.props.pendingFriend.id} id={this.props.pendingFriend.id} className="pendingFriendCard">
                <p>{this.props.pendingFriend.friendUsername} wants to be your friend!</p>
                <button onClick={this.props.acceptFriend}>Accept</button>



            </div>
        )
    }
}
