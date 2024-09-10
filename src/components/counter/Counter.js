import React, { useState } from "react";
import "../../styles/counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="counter-container">
      <div className="counter">
        <h1 className="counter-title">Licznik: {count}</h1>
        <div>
          <button className="counter-button" onClick={increment}>
            Zwiększ
          </button>
          <button className="counter-button" onClick={decrement}>
            Zmniejsz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
