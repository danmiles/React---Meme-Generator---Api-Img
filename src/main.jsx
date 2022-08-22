import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Global.css";
import header from "./components/header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CardElements from "./components/CardElements";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header />
    <MainContent />
    <CardElements />
    <Footer />
  </React.StrictMode>
);

