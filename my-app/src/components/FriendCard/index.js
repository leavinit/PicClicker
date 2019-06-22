import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    // <div className="card">
      <div>  
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span className="remove" onClick={()=>props.removeFriend(props.id)}>𝘅</span>
    </div>
  );
}

export default FriendCard;
