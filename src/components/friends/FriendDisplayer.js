import React, { Component } from 'react';
import FriendCard from './FriendCard';
import AcceptedFriendCard from './AcceptedFriendCard'
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
    acceptedFriends = (accepted) => {
        return <div>
            {accepted.map(accept =>
                <AcceptedFriendCard key={accept.id} accept={accept} changeMutual={this.props.changeMutual} />
            )}</div>
    }

addedFriends = (friends) => {
    return <div>
        {friends.map(friend =>
            <FriendCard key={friend.id} friend={friend} markDelete={this.props.markDelete} handleDelete={this.props.handleDelete} />
        )}</div>
}


displayer = () => {
    let friends = this.props.friends
    let accepted = this.props.acceptedFriend
    
        if (this.props.dataLoaded) {
            return <div><h2>Friends List</h2>
                {this.addedFriends(friends)}
                {this.acceptedFriends(accepted)}
                </div>
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