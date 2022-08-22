import React from "react";
import "../styles/MainContent.css";
function MainContent() {
  return (
    <div className="container">
      <section className="hero">
        <img src="/images/airbnb/photo__gallery.png" className="hero--photo" />
        <h1 className="hero--header">
          React.js --- MAP Data into component + Props --- Finish module 2 -
          Scrimba.com
        </h1>
        <a className="hero__link" href="https://scrimba.com/learn/learnreact/">
          Scrimba.com --- Learn React with Bob Ziroll
        </a>

        <div className="hero__info">
          <p className="hero--text">
            I made this project on a local server and used Vite as project
            builder. I also improved the tutorial a lot by organizing all the
            files in the right folders and dividing the entire project into
            React components.
          </p>
          <p className="hero--text">
            The main thing I learned is to reproduce repeating elements using
            the props + map function, also extract data from the array and pass
            them to the components.
          </p>
          <p className="hero--text">
            The three cards below are a good example of the Data I get from
            data/CardData.jsx
          </p>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
