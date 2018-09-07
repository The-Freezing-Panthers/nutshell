import React, { Component } from 'react';
import DataManager from '../../DataManager'
import FriendDisplay from './FriendDisplayer';
import MutualFriend from './MutualFriend';


export default class Friends extends Component {
    state = {
        searchQuery: "",
        searching: false,
        addFriend: false,
        friends: [],
        acceptedFriend: [],
        addedFriend: false,
        deleted: false,
        dataLoaded: false
    }
    markDelete = () => {
        this.setState({ deleted: true })
        this.changeDelete()
    }
    changeDelete = () => {
        if (this.state.deleted) {
            this.forceUpdate()
        }
    }
    displayFriends = () => {
        let userId = this.props.activeUser
        fetch(`http://localhost:8088/friends?friendUserId=${userId}`)
            .then(r => r.json())
            .then(result => {
                fetch(`http://localhost:8088/friends?otherFriendId=${userId}&mutual=true`)
                    .then(r => r.json())
                    .then(accepted => {

                        this.setState({
                            friends: result,
                            acceptedFriend: accepted,
                            dataLoaded: true
                        })
                    })

            })
    }
    searching = () => {
        if (this.state.searching) {
            this.setState({
                searching: false
            })
        }
        else {
            this.setState({
                searching: true
            })
        }
        this.friendFinder()
    }
    addFriend = () => {
        let friend = this.state.searchQuery
        DataManager.getData.searchUsername(friend)
            .then(result => {

                let currentUser = JSON.parse(sessionStorage.getItem("userInfo"))
                let friendId = result[0]
                let friendship = {
                    otherFriendId: friendId.id,
                    friendUserId: currentUser.userId,
                    otherFriendName: friendId.username,
                    friendUsername: currentUser.username,
                    mutual: false
                }
                fetch(`http://localhost:8088/friends?frienduserId=${currentUser.userId}&otherFriendId=${friendId.id}`)
                    .then(r => r.json())
                    .then(result => {
                        if (result.length) {
                            alert("Friend Already Added.")
                        }
                        else {
                            DataManager.saveData.saveFriend(friendship)
                                .then(
                                    alert("Friend Added"),
                                    this.setState({
                                        searching: false,
                                        searchQuery: "",
                                        addedFriend: true,
                                        addFriend: false,
                                    })
                                ).then(() => {
                                    this.displayFriends()
                                }
                                )
                        }
                    })

            }
            )
    }
    componentDidMount() {
        this.displayFriends()
    }
    handleFields = (event) => {
        let values = {}
        values[event.target.id] = event.target.value
        this.setState(values)
    }
    findButton = () => {

        let friend = this.state.searchQuery
        DataManager.getData.searchUsername(friend)
            .then(result => {
                if (result.length) {

                    this.setState({
                        addFriend: true
                    })

                }
                else {
                    alert("User not found.")
                }
            })
    }
    friendFinder = () => {
        if (this.state.searching) {
            return <div>
                <label>Search for Username</label>
                <input id="searchQuery" onChange={this.handleFields}></input>
                <button onClick={this.findButton}>Find</button>
                {this.addFriendButton()}
            </div>
        }
    }
    addFriendButton = () => {
        if (this.state.addFriend) {
            return <button onClick={this.addFriend}>Add Friend</button>
        }
    }
    handleDelete = (e) => {
        let friendListId = e.target.parentNode.id
        DataManager.deleteData.deleteFriend(friendListId)
            .then(() => {
                let userId = this.props.activeUser
                return fetch(`http://localhost:8088/friends?friendUserId=${userId}`)
                    .then(r => r.json())
                    .then(friends => {
                        this.setState({
                            friends: friends
                        })
                    }).then(() => { this.displayFriends() })
            }
            )

    }



    render() {
        return (
            <div>
                <button onClick={this.searching}>Search for Friends</button>
                {this.friendFinder()}
                <FriendDisplay acceptedFriend={this.state.acceptedFriend} handleDelete={this.handleDelete} activeUser={this.props.activeUser} dataLoaded={this.state.dataLoaded} friends={this.state.friends} markDelete={this.markDelete} />
                <MutualFriend />
            </div>
        )
    }
}