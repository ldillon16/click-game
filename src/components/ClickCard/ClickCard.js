import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
  <div className="card">
    <div onClick={() => props.cardClicked(props.id)} className="card card-clicked img-container">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default ClickCard;
