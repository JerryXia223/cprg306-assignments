'use client';
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from 'react';


export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

    return (
      <main>
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <div className="flex">
            <ItemList items={items} />
            <NewItem onAddItem={handleAddItem} />
        </div>
      </main>
    );
  }