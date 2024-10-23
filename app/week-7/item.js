import React from 'react';

export default function Item({ name, quantity, category }) {
    return (
        <section className="m-2 bg-neutral-100">
          <h2 className="text-xl font-bold text-violet-900 ">{name}</h2>
          <p>
            <span className="font-bold">Quantity:</span> {quantity}
          </p>
          <p>Buy {quantity} in {category}</p>
        </section>
    );
}