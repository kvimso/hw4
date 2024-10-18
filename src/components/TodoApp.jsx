import React, { useState } from "react";
import Card from "./Card"; 
import { cardsData } from "../components/data.js"; 
import "../styles/TodoApp.css";

function TodoApp({ visibleCards }) {
  const [cards, setCards] = useState(cardsData);

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="todo-app">
      <div className="cards-container">
        {}
        {cards.slice(0, visibleCards).map((card) => (
          <div key={card.id} className="card-item">
            <Card
              name={card.name}
              desc={card.desc}
              src={card.src}
              bg={card.bg}
            />
            {}
            <button className="delete-button" onClick={() => deleteCard(card.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
