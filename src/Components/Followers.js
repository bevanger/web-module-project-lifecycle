import React from 'react';

class Followers extends React.Component {
    render() {
        return(
            <div className="followersCardDiv">
                <img className="followerImg" src={this.props.followersInfo.avatar_url} alt=""/>
                <div className="followData">
                    <h2 className="followerName">User Name: {this.props.followersInfo.name}</h2>
                    <h2 className="followerUrl">URL: {this.props.followersInfo.html_url}</h2>
                    <h2 className="followerFollowers">Followers: 1</h2>
                    <h2 className="followerFollowing">Following: 1</h2>
                </div>
            </div>
        )
    }
}

export default Followers;