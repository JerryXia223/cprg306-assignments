"use client";

import { useState } from "react";
  

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [count, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const increment = () => {
        setQuantity(count + 1);
        console.log(count);
  };

  const decrement = () => {
    if (count > 1){
        setQuantity(count - 1);
        console.log(count);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const createNewID = () => {
    return Math.random().toString(36).substring(2, 9);
};

  const handleSubmit = (event) => {
    event.preventDefault();

  const item = { id: createNewID(), name, count, category };
  console.log(item);

    alert(`Item added successfully!\nName: ${name}\nQuantity: ${count}\nCategory: ${category}`);
    
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };





  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">

      <form className="m-2" onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => handleNameChange(event)}
        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="item name"
      />  
      <label htmlFor="quantity">Quantity:</label>
      <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-700 active:bg-red-300 rounded
        w-10 disabled:bg-yellow-900"
      >
        +
      </button>
      <input
        type="number"
        id="quantity"
        value={count}
        onChange={(event) => setQuantity(event)}
        className="w-16 text-center p-2 border rounded-md"
      />
      <button
        type="button"
        onClick={decrement}
        disabled={count === 1}
        className="bg-blue-500 hover:bg-blue-700 active:bg-red-300 rounded
        w-10 disabled:bg-yellow-900"
      >
        -
      </button>
      </div>
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(event) => handleCategoryChange(event)}
        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="category" disabled>Category</option>
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        +
      </button>
      </form>

    </div>
  );
}