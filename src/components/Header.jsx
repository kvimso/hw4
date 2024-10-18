import React from "react";
import Counter from "./Counter";
import "../styles/Header.css";

function Header({
  count,
  toggleTheme,
  darkMode,
  incrementCount,
  decrementCount,
  maxCount,
}) {
  return (
    <header className="header">
      <h1>Todo App</h1>
      {}
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        maxCount={maxCount}
      />
      {}
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
          transition: "0.3s",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}

export default Header;