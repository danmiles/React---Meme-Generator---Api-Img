import React from "react";
import "../styles/header.css";

function header() {
  return (
    <header className="header">
      <img src="/images/troll__face.png" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default header;
