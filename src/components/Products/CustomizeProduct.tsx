"use client";
import { products } from "@wix/stores";
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
type TCustomizeProductProps = {
  productId: string;
  variants: products.Variant[] | undefined;
  productOptions: products.ProductOption[] | undefined;
};
const CustomizeProduct: React.FC<TCustomizeProductProps> = ({
  productId,
  variants,
  productOptions,
}) => {
  console.log(productOptions);
  console.log(variants);
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

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  } | null>({});
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };
  return (
    <div className="flex flex-col gap-6">
      {productOptions?.map((option: any, i: number) => (
        <div className="flex flex-col gap-4" key={i}>
          {option?.name === "Size" && (
            <>
              <h4 className="font-medium">Choose a {option?.name}</h4>
              <ul className="flex items-center gap-3">
                {option.choices?.map((choice: any, i: number) => (
                  <li
                    key={i}
                    className={`border-2 rounded-md py-1 px-3 text-md font-semibold w-fit 
              ${
                choice.quantity === 0
                  ? "cursor-not-allowed opacity-50 border-red-light text-red-400 bg-red-light"
                  : selectedSize === choice.name
                  ? "border-red-dark text-white bg-red-dark"
                  : "cursor-pointer border-red-dark text-red-dark"
              }`}
                    onClick={() => {
                      if (choice.quantity > 0) setSelectedSize(choice.name);
                    }}
                  >
                    {choice?.value}
                  </li>
                ))}
              </ul>
            </>
          )}
          {option?.name === "Size" && (
            <>
              <h4 className="font-medium">Choose a {option?.name}</h4>
              <ul className="flex items-center gap-3">
                {option.choices.map((color: any, i: number) => (
                  <li
                    key={i}
                    className={`w-10 h-10 p-1 rounded-full cursor-pointer relative 
          ${color.value} 
          ${color.quantity === 0 ? "cursor-not-allowed opacity-30" : ""}
          ${
            selectedColor === color.description
              ? "ring-4 ring-blue-500"
              : "ring-2 ring-gray-300"
          }`}
                    onClick={() => {
                      if (color.quantity > 0)
                        setSelectedColor(color.description);
                    }}
                  >
                    {color.quantity === 0 && (
                      <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </li>
                ))}
              </ul>{" "}
            </>
          )}
        </div>
      ))}
      {/* <ul className="flex items-center gap-3">
        {colors.map((color, index) => (
          <li
            key={index}
            className={`w-10 h-10 p-1 rounded-full cursor-pointer relative 
          ${color.bgColor} 
          ${color.quantity === 0 ? "cursor-not-allowed opacity-30" : ""}
          ${
            selectedColor === color.name
              ? "ring-4 ring-blue-500"
              : "ring-2 ring-gray-300"
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
      </ul> */}
    </div>
  );
};
export default CustomizeProduct;
