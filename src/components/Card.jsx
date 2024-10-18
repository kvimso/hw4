
import React from "react";
import "../styles/Card.css";

function Card({ name, desc, src, bg }) {
  return (
    <div className="card" style={{ backgroundColor: bg }}>
      <img className="photo" src={src} alt={name} />
      <h3 className="text">{name}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
