import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
  }

   getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log('in friends list', res.data)
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err.response));
  };

render() {
    const friends = this.state.friends
    console.log('from in render', friends);
    return (
        <div>{friends.map(friend => (
            <div><p>ID: 
            {friend.id}
            <br/>
            Name: {friend.name}
            <br/>
            Age: {friend.age}
            <br/>
            Email: {friend.email}</p></div>
        ))}
        </div>
    );
};
}

export default FriendsList;
