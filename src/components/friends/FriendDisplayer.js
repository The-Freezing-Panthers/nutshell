import React, { Component } from 'react';
import FriendCard from './FriendCard';

export default class FriendDisplay extends Component {
    state = {
        friends: []
    }
    displayFriends = () => {
        let userId = this.props.activeUser
        return fetch(`http://localhost:8088/friends?friendUserId=${userId}`)
            .then(r => r.json())
            .then(friends => {
                this.setState({
                    friends: friends.map(friend => {
                       return <FriendCard 
                            key={friend.id}
                            friend={friend}
                            markDelete={this.props.markDelete}
                        />
                    })
                })
            })

    }
    componentDidMount() {
        this.displayFriends()
    }

    render() {
 
        return (
            <div>
                <h2>Friends List</h2>
                {this.friends}
            </div>
        )
    }
}