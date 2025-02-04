import React, { useState, useEffect } from "react";

export default function Cards() {
  const cards = [1, 2, 3, 4]; // Dummy data to create 4 cards

  const cardColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-yellow-500",
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${cardColors[index]} shadow-lg rounded-lg h-[450px] p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105`}
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-white">
              Card Title {index + 1}
            </h2>
            <h3 className="text-lg text-gray-200 mb-4">Subtitle</h3>
            <ul className="text-gray-100 space-y-2">
              <li className="text-md">Point 1</li>
              <li className="text-md">Point 2</li>
              <li className="text-md">Point 3</li>
              <li className="text-md">Point 4</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <span className="text-white text-xl font-semibold">→</span>
          </div>
        </div>
      ))}
    </div>
  );
}
