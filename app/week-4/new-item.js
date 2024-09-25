"use client";

import { useState } from "react";

export default function Quantity() {
  const [count, setQuantity] = useState(1);

  const increment = () => {
    if (count < 20){
        setQuantity(count + 1);
        console.log(count);
    }
  };

  const decrement = () => {
    if (count > 1){
        setQuantity(count - 1);
        console.log(count);
    }
  };



  return (
    <div>
        
      <p>Count: {count}</p>
      <button
        onClick={increment}
        disabled={count === 20}
        className="bg-blue-500 hover:bg-blue-700 active:bg-red-300 rounded
        w-10 disabled:bg-yellow-900"
      >
        +
      </button>
      <button
        onClick={decrement}
        disabled={count === 1}
        className="bg-blue-500 hover:bg-blue-700 active:bg-red-300 rounded
        w-10 disabled:bg-yellow-900"
      >
        -
      </button>
    </div>
  );
}