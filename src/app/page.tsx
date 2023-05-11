"use client";
import { useState } from "react";

const fruits = [
  { id: 1, fruit: "Apple" },
  { id: 2, fruit: "Banana" },
  { id: 3, fruit: "Cherry" },
  { id: 4, fruit: "Durian" },
  { id: 5, fruit: "Elderberry" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <div>
        <input
          placeholder="Enter to search..."
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(query);
          }}
        />
      </div>
      <div className="flex flex-col">
        {fruits
          .filter((fruit) => {
            if (query === "") {
              return fruit;
            } else if (
              fruit.fruit.toLowerCase().includes(query.toLowerCase())
            ) {
              return fruit;
            }
          })
          .map((fruit) => (
            <div key={fruit.id}>{fruit.fruit}</div>
          ))}
      </div>
    </div>
  );
}
