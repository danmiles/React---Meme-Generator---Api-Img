import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Global.css";
import Header from "./components/Header";
import Test from "./components/Test";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="container">
            <Header />
            <Meme />
            <Test />
            <Footer />
        </div>
    </React.StrictMode>
);
