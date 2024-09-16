import React from 'react';
import axios from 'axios';


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://api.github.com/users/bevanger/followers")
        .then(res => {
            this.props.setFollowers (res);
            })
        .catch(err => {
            console.log(err);
          })
    }
 render() {
     //console.log(this.props.usersInfo)
     return(
        <div className="cardDiv">
            <img className="userImg" src={this.props.usersInfo.avatar_url} alt=""/>
            <div className="userData">
                <h2 className="userName">User Name: {this.props.usersInfo.name}</h2>
                <h2 className="userUrl">URL: {this.props.usersInfo.html_url}</h2>
                <h2 className="userFollowers">Followers: {this.props.usersInfo.followers}</h2>
                <h2 className="userFollowing">Following: {this.props.usersInfo.following}</h2>
           </div>
        </div> 
     )
 }
}

export default Users;