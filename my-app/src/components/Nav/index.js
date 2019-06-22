import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Score: {props.gameScore}
      </a>
    </nav>
  );
}

export default Nav;
