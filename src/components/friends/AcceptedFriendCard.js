import React, { Component } from 'react';

export default class AcceptedFriendCard extends Component {
    acceptFriend = () => {
        if(this.props.friend.mutual) {
            return <div>
                <article key={this.props.friend.id} id={this.props.friend.id} className="friendCard">
                    <p>{this.props.friend.otherFriendName}</p>
                    <button onClick={this.props.handleDelete} >Delete</button>
                </article>
                <article key={this.props.friend.id} id={this.props.friend.id}>
                    <p>{this.props.friend.friendUsername}</p>
                    <button onClick={this.props.changeMutual} >Delete</button>
                </article>
            </div>
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}


