import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friendsList: friends
  }
  removeFriend = id => {
    const newFriendsList = this.state.friendsList.filter(friend => friend.id !== id);
    this.setState({friendsList: newFriendsList});

  }
  render() {

    return (
      <Wrapper>
        {/* <h1 className="title" onClick={()=>this.removeFriend(1)}>Friends List</h1> */}
        <h1 className="title">Friends List</h1>

        {this.state.friendsList.map( friend => (

          <FriendCard
            key = {friend.id}
            id = {friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            removeFriend = {this.removeFriend}
          />
        
        ))}

      </Wrapper>
    );
}
}
export default App;
