import React, { Component } from 'react';
import DataManager from '../../DataManager';

export default class FriendCard extends Component {
state={
    change:false
}

    handleDelete = (e) => {
        let friendListId = e.target.parentNode.id
        DataManager.deleteData.deleteFriend(friendListId)

    }

    render() {
        return (
            <div key={this.props.friend.id} id={this.props.friend.id} className="friendCard">
                <p>{this.props.friend.otherFriendName}</p>
                <button onClick={this.handleDelete} >Delete</button>


            </div>
        )
    }
}