"use client";

import MealIdeas from './meal-ideas.js';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import {getItem, addItem} from "../_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();

    useEffect(() => {
        const fetchItems = async () => {
            if (user) {
                try{
                    const items = await getItem(user.uid);
                    setItems(items || []);
                } catch (e) {
                    console.error("Error in fetchItems", e);
                }
            }
        };
        fetchItems();
    },[]);

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = async (newItem) => {
        try {
            const itemId = await addItem(user.uid, newItem);
            const itemWithId = { ...newItem, id: itemId };
            setItems((prevItems) => [...prevItems, itemWithId]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <main className="m-3">
            <h1 className="text-3xl font-bold m-3">Shopping List</h1>
            <div className="flex">
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                    <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}