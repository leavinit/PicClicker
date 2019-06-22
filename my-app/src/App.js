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
  state = {
    gameScore : 0 ,
    imagesList: pics,
  }

  shuffle = () => {
    let imgArr = shuffleArray(this.state.imagesList);
    this.setState({imagesList: imgArr});
  }

  incrementScore = () => {
    this.setState({ gameScore: this.state.gameScore + 1 });
  };

  resetScore = () => {
      this.setState({gameScore: 0})
  }
  clickHandler = () => {
    console.log(this.clicked)
    if(this.clicked)
      {
        
        this.resetScore(); 
        let imgArray = this.state.imagesList;
        imgArray.forEach = img => img.clicked = false;
        this.setState({imagesList : imgArray});
        this.shuffle();
      }
      else
      {
        console.log(this.state.gameScore)
        // let imgArray = this.state.imagesList;
        this.incrementScore();
        this.shuffle();
        this.clicked = true;
        let imgArray = this.state.imagesList;
        
        imgArray.forEach = img => console.log(img.clicked);
      }

  }

  render() {
    return (
    <div>
        <Jumbotron />
        <Nav gameScore={this.state.gameScore}/>
        <Container>
        <Wrapper>
            { this.state.imagesList.map((image) => (
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
