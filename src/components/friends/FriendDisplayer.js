import React, { Component } from 'react';
import FriendCard from './FriendCard';
import DataManager from '../../DataManager'
import AcceptedFriendCard from './AcceptedFriendCard';

export default class FriendDisplay extends Component {






    displayer = () => {
        let friends = this.props.friends
        let acceptedFriends = this.props.acceptedFriend
        {
            if (this.props.dataLoaded) {
                return <div><h2>Followed Friends</h2>
                    {friends.map(friend =>
                        <FriendCard key={friend.id} friend={friend} markDelete={this.props.markDelete} handleDelete={this.props.handleDelete} />
                    )}
                    {acceptedFriends.map(acceptedFriend =>
                        <AcceptedFriendCard key />)
                        < div >

                    </div>

                </div>
            }
        }
            else {
            return <div>Loading</div>
        }
    }
}


render() {

    return (<div>
        {this.displayer()}
    </div>
    )
}
}