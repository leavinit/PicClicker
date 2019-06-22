import React from "react";
// import FriendCard from "./components/FriendCard";
import Square from "./components/Square";
// import Wrapper from "./components/Wrapper";
import { Container, Row, Col } from "./components/Grid";

import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friendsList: friends
  }
  renderSquare(i) {
    console.log (i)
    return <Square img={i} />;
  }
  removeFriend = id => {
    const newFriendsList = this.state.friendsList.filter(friend => friend.id !== id);
    this.setState({friendsList: newFriendsList});

  }
  render() {

    return (
      // <Container>
      //   <Row>            
      //   <Col size="md-3"></Col>  
      //   <Col size="md-4">
      //         {/* <h1 className="title" onClick={()=>this.removeFriend(1)}>Friends List</h1> */}
      //         <h1 className="title">Friends List</h1>

      //         {this.state.friendsList.map( friend => (
      //           <FriendCard
      //             key = {friend.id}
      //             id = {friend.id}
      //             image={friend.image}
      //             removeFriend = {this.removeFriend}
      //           />
      //         ))}
      //   </Col>
      //   <Col size="md-3"></Col>    
      //   </Row>
      // </Container>
        <div>
  
          <h1 className="title">PicClicker!</h1>
            <Row>
              <Col size ="md1"></Col>
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[0].image)}
              </Col>  
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[1].image)}
              </Col>
              <Col size="md2">  
                {this.renderSquare(this.state.friendsList[2].image)}
              </Col>
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[3].image)}
              </Col>
              <Col size ="md1"></Col>
            </Row>
         
            <Row>
            <Col size ="md1"></Col>
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[0].image)}
              </Col>  
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[1].image)}
              </Col>
              <Col size="md2">  
                {this.renderSquare(this.state.friendsList[2].image)}
              </Col>
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[3].image)}
              </Col>
              <Col size ="md1"></Col>
            </Row>
            <Row>
            <Col size ="md1"></Col>
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[0].image)}
              </Col>  
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[1].image)}
              </Col>
              <Col size="md2">  
                {this.renderSquare(this.state.friendsList[2].image)}
              </Col>
              <Col size="md2">
                {this.renderSquare(this.state.friendsList[3].image)}
              </Col>
              <Col size ="md1"></Col>
            </Row>
        {/* </Container> */}
      </div>
      );
    }
  }
  
export default App;
