
import React from "react";
import "../styles/Counter.css";

function Counter({ count, incrementCount, decrementCount, maxCount }) {
  return (
    <div className="counter-container">
      {/* Minus button to decrement count */}
      <button
        onClick={decrementCount}
        disabled={count === 0}
        className="counter-btn"
      >
        −
      </button>
      <span className="counter-display">{count}</span>{" "}
      {/* Display the current count */}
      {/* Plus button to increment count */}
      <button
        onClick={incrementCount}
        disabled={count === maxCount}
        className="counter-btn"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
