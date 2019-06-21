import React from "react";
import Square from "./components/Square";

class Board extends React.Component {
  renderSquare(i) {
    return <Square img={i} />;
  }

  render() {
    return (
      <div>
          <div className="board-row">
          {this.renderSquare(this.props.images[0])}
          {this.renderSquare(this.props.images[1])}
          {this.renderSquare(this.props.images[2])}
          
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.images[3])}
          {this.renderSquare(this.props.images[4])}
          {this.renderSquare(this.props.images[5])}
                  
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.images[6])}
          {this.renderSquare(this.props.images[7])}
          {this.renderSquare(this.props.images[8])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.images[8])}
          {this.renderSquare(this.props.images[9])}
          {this.renderSquare(this.props.images[10])}
        </div>
      </div>
    );
  }
}

export default Board;