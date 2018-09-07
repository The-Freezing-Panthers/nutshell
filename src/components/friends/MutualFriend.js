import React, { Component } from 'react';
import PendingCard from './PendingCard';

export default class MutualFriend extends Component {
    state = {
        pendingFriends: [],
        dataLoaded: false,
    }
    pendingFrienshipFinder = () => {
        let userId = JSON.parse(sessionStorage.getItem("userInfo"))
        fetch(`http://localhost:8088/friends?otherFriendId=${userId.userId}&mutual=false`)
            .then(r => r.json())
            .then(result => {
                this.setState({
                    pendingFriends: result,
                    dataLoaded: true
                })
            })
    }

    acceptFriend = (e) => {
        let nowTrue = {
            mutual: true
        }

        let lookupFrienship = e.target.parentNode.id
        fetch(`http://localhost:8088/friends/${lookupFrienship}?mutual=false`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nowTrue)
        })
            .then(r => r.json())
            .then(() => {
                this.pendingFrienshipFinder()
                this.props.displayFriends()
            })
    }





    pendingDisplayer = () => {
        let pendingFriends = this.state.pendingFriends

        if (this.state.dataLoaded && this.state.pendingFriends.length) {
            return <div><h3>Pending Friend Requests</h3>
                {pendingFriends.map(pendingFriend =>
                    <PendingCard key={pendingFriend.id} pendingFriend={pendingFriend} acceptFriend={this.acceptFriend} />
                )}</div>
        }
        else {
            return <div></div>
        }

    }
    componentDidMount() {
        this.pendingFrienshipFinder()
    }

    render() {
        return (
            <div>
                {this.pendingDisplayer()}</div>
        )
    }
}