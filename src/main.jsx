import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Global.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Meme />
      <Footer />
    </div>
  </React.StrictMode>
);
