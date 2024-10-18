import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoApp from "./components/TodoApp";
import { cardsData } from "./components/data";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleCards, setVisibleCards] = useState(cardsData.length);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const incrementCount = () => {
    if (visibleCards < cardsData.length) {
      setVisibleCards(visibleCards + 1);
    }
  };

  const decrementCount = () => {
    if (visibleCards > 0) {
      setVisibleCards(visibleCards - 1);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      <Header
        count={visibleCards}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        maxCount={cardsData.length}
      />
      <TodoApp visibleCards={visibleCards} />
      
    </div>
  );
}

export default App;