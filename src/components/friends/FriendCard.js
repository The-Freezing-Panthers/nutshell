import React, { Component } from 'react';


export default class FriendCard extends Component {


    cardBuilder = () => {
        return <div key={this.props.friend.id} id={this.props.friend.id} className="friendCard">
            <p>{this.props.friend.otherFriendName}</p>
            <button className="button is-small is-danger is-outlined" onClick={this.props.handleDelete} >Delete</button>
        </div>
    }


    render() {

        return (<div className="box">
            {this.cardBuilder()}
        </div>
        )
    }
}
