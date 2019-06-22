import React from "react";
import "./style.css";

function PicDiv(props) {
    console.log(props.clicked);
    return (
        
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => {props.clickHandler()}} />
                
            </div>
        </div>
    )
}

export default PicDiv;
