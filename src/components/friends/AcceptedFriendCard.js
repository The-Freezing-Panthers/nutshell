import React, { Component } from 'react';

export default class AcceptedFriendCard extends Component {
    acceptFriend = () => {
        if(this.props.accept.mutual) {
            return <div>
                <article key={this.props.accept.id} id={this.props.accept.id}>
                    <p>{this.props.accept.friendUsername}</p>
                    <button onClick={this.props.changeMutual} >Remove</button>
                </article>
            </div>
        }
    }

    render() {
        return (
            <div>
                {this.acceptFriend()}
            </div>
        )
    }
}


