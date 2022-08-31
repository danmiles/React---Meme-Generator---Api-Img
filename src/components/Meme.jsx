import React from "react";
import MemeData from "../data/MemeData";
import "../styles/Meme.css";
export default function Meme() {
    
  const [urlImage, setUrlImage] = React.useState("");

  function getMemeImage() {
    const memesArray = MemeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    setUrlImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={urlImage} alt="" className="img-fluid" />
    </main>
  );
}
