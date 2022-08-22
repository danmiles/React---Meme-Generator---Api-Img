import React from "react";
import Card from "./Card";
import CardData from "../data/CardData";
import "../styles/CardElements.css";

function CardElements() {
  const CardElements = CardData.map((cardElement) => {
    return (
      <Card
        key = {cardElement.id}
        cardElement = {cardElement}

        // Old Version
        // title={cardElement.title}
        // desciptiop={cardElement.description}
        // price={cardElement.price}
        // coverImg={cardElement.coverImg}
        // location={cardElement.location}
        // reting={cardElement.stats.rating}
        // reviewCount={cardElement.stats.reviewCount}
        // openSpots= {cardElement.openSpots}
      />
    );
  });
  return (
    <div className="container">
      <div className="cards__list">{CardElements}</div>
    </div>
  );
}

export default CardElements;
