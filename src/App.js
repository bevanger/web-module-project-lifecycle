import React from 'react';
import axios from 'axios';
import Users from './Components/Users';
import Followers from './Components/Followers';
import './App.css';

class App extends React.Component {
  state = {
    usersInfo: {},
    followersInfo: [],
    showFollowers: false,
  }

  componentDidMount(){ 
    axios.get("https://api.github.com/users/bevanger")
    .then(res => {
      // console.log(res.data);
      this.setState ({
        usersInfo: res.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

handleClick = () => {
  this.setState ({
    showFollowers: ! this.state.showFollowers
  });
}

  setFollowers = (array) => {
    this.setState ({
      followersInfo: array.data
    });
  }

  render() {
    return(
      <div>
        <h1>GitHub Users</h1>
        <div className="userInfo">
          <Users usersInfo={this.state.usersInfo} setFollowers={this.setFollowers}/>
          <button onClick={this.handleClick}>See Followers</button>
          {
            this.state.showFollowers ? this.state.followersInfo.map((follower) => {
            return(<Followers followersInfo={follower}/>)
            }) : null
          } 
           
        </div>
      </div>
    )
  }
}
export default App;
