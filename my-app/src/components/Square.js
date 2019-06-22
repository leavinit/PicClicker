import React from "react"
import "./Square.css";


function Square(props) {
      return (
        <div className="square">
            {/* <img src={this.props.src} alt="gameSquare" className="square"/> */}
            <img className="img-thumbnail rounded img-fluid" src={process.env.PUBLIC_URL +props.img} alt="game square"></img>
            {/* <span className="remove" onClick={()=>this.props.removeFriend(this.props.id)}>𝘅</span> */}
        </div>
      );
    }

export default Square;
