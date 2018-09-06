import React, { Component } from 'react';


export default class FriendCard extends Component {


   

    render() {
        
        return (
            <div key={this.props.friend.id} id={this.props.friend.id} className="friendCard">
                <p>{this.props.friend.otherFriendName}</p>
                <button onClick={this.props.handleDelete} >Delete</button>


            </div>
        )
    }
}
