import React from "react"

class Square extends React.Component {
    render() {
      return (
        <div className="square">
            {/* <img src={this.props.src} alt="gameSquare" className="square"/> */}
            <img src={this.props.img} alt="game square"></img>
        </div>
      );
    }
  }

export default Square;
