"use client";
import React, { useState } from "react";
type Color = {
  name: string;
  bgColor: string;
  quantity: number;
};

type Size = {
  name: string;
  quantity: number;
};
export default function CustomizeProduct() {
  const colors = [
    { name: "Red", bgColor: "bg-red-500", quantity: 5 },
    { name: "Blue", bgColor: "bg-blue-500", quantity: 0 },
    { name: "Green", bgColor: "bg-green-500", quantity: 3 },
    { name: "Yellow", bgColor: "bg-yellow-500", quantity: 0 },
  ];

  const sizes = [
    { name: "Small", quantity: 10 },
    { name: "Medium", quantity: 0 },
    { name: "Large", quantity: 2 },
  ];

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        {colors.map((color, index) => (
          <li
            key={index}
            className={`w-8 h-8 rounded-full ring-2 ring-gray-300 cursor-pointer relative ${
              color.bgColor
            } ${
              color.quantity === 0
                ? "cursor-not-allowed opacity-50"
                : selectedColor === color.name
                ? "ring-2 ring-blue-500"
                : ""
            }`}
            onClick={() => {
              if (color.quantity > 0) setSelectedColor(color.name);
            }}
          >
            {color.quantity === 0 && (
              <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            )}
          </li>
        ))}
      </ul>

      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        {sizes.map((size, index) => (
          <li
            key={index}
            className={`border-2 rounded-md py-1 px-3 text-md font-semibold w-fit ${
              size.quantity === 0
                ? "cursor-not-allowed opacity-50 border-red-light text-red-400 bg-red-light"
                : selectedSize === size.name
                ? "border-red-dark text-whiteColor bg-red-dark"
                : "cursor-pointer border-red-dark text-red-dark"
            }`}
            onClick={() => {
              if (size.quantity > 0) setSelectedSize(size.name);
            }}
          >
            {size.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
