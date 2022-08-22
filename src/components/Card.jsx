import React from "react";

import "../styles/Card.css";

function Card(props) {
  let badgeText 
  if (props.cardElement.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.cardElement.openSpots !== 0) {
      badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.cardElement.coverImg} className="card--image" />
      <div className="card--stats">
        <img src="/images/airbnb/star.svg" className="card--star" />
        <span>{props.cardElement.stats.reting}</span>
        <span className="gray">({props.cardElement.stats.reviewCount}) </span>
        <span className="gray">●{props.cardElement.location}</span>
      </div>
      <p>{props.cardElement.title}</p>
      <p>
        <span className="bold">From {props.cardElement.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
