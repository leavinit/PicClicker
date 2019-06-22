import React from 'react';
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";
import PicDiv from "./components/PicDiv";
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Nav"
import shuffleArray from "./ShuffleArray"

import './App.css';
import { Container } from './components/Grid';

class App extends React.Component{
    //score and pics are the main state to be handled in this app
  state = {
    gameScore : 0 ,
    imagesObj: pics,
  }
  //shuffles pics
  shuffle = () => {
    let tempArray = shuffleArray(this.state.imagesObj);
    this.setState({imagesObj: tempArray});
  }
  //ups the game score when unclicked pic is clicked
  incrementScore = () => {
    this.setState({ gameScore: this.state.gameScore + 1 });
  };

  resetScore = () => {
      this.setState({gameScore: 0})
  }
  clickHandler = () => {
    // console.log(this.clicked)    
    if(this.clicked)
      {
        
        this.resetScore(); 
        let imgArray = this.state.imagesObj;
        imgArray.forEach = img => img.clicked = false;
        this.setState({imagesObj : imgArray});
        this.shuffle();
      }
      else
      {
        // console.log(this.state.gameScore)
        let imgArray = this.state.imagesObj;
        this.incrementScore();
        this.shuffle();
        this.clicked = true;
        
        imgArray.forEach = img => {
            if(img.clicked){
                console.log(img.clicked);
                console.log(img.id)
            }
        }
      }

  }

  render() {
    return (
    <div>
        <Jumbotron />
        <Nav gameScore={this.state.gameScore}/>
        <Container>
        <Wrapper>
            { this.state.imagesObj.map((image) => (
                <PicDiv
                key = {image.id}   
                id = {image.id}          
                image = {image.image}
                clicked = {image.clicked}
                clickHandler = {this.clickHandler}
                reset = {this.resetScore}
                />
                )
            )
            }
        </Wrapper>
        </Container>
      </div>
    );
  }
}
export default App;
