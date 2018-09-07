import React, { Component } from 'react';
import FriendCard from './FriendCard';

export default class FriendDisplay extends Component {


    displayFriends = () => {
        let userId = this.props.activeUser
        return fetch(`http://localhost:8088/friends?friendUserId=${userId}`)
            .then(r => r.json())
            .then(friends => {
                this.setState({
                    friends: friends,

                })
            })

    }



    displayer = () => {
        let friends = this.props.friends
        
            if (this.props.dataLoaded) {
                return <div><h2>Followed Friends</h2>
                    {friends.map(friend =>
                        <FriendCard key={friend.id} friend={friend} markDelete={this.props.markDelete} handleDelete={this.props.handleDelete} />
                    )}</div>
            }
            else {
                return <div>Loading</div>
            }
        
    }


    render() {

        return (<div>
            {this.displayer()}
        </div>
        )
    }
}