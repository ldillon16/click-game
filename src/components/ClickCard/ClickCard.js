import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
  <div className="card">
    <span onClick={() => props.cardClicked(props.id)} className="card card-clicked">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </span>
  </div>
);

export default ClickCard;
