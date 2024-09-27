"use client";
import React, { useState } from "react";

export default function Add() {
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(10);

  const handleQuantity = (type: string) => {
    if (type === "increase" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleCart = (quantity: number) => {
    setStock((prev) => prev - quantity);
    alert("Item added to the cart successfylly");
    if (quantity > 1) {
      setQuantity(1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex flex-row items-center justify-between">
        <div className="left quantity flex flex-row items-center gap-6">
          <div className="button_part text-lg bg-bgColor-dark rounded-full px-4 py-2 w-[150px] flex flex-row items-center justify-between text-black">
            <button
              disabled={quantity === 1 || stock === 0}
              className="disabled:cursor-not-allowed"
              onClick={() => handleQuantity("decrease")}
            >
              -
            </button>
            <p className="quantity">{stock === 0 ? 0 : quantity}</p>
            <button
              disabled={quantity === stock || stock === 0}
              className="disabled:cursor-not-allowed"
              onClick={() => handleQuantity("increase")}
            >
              +
            </button>
          </div>
          <div
            className={`quantity text-xs ${
              stock <= 0 ? "text-red-dark" : "text-gray-dark"
            }`}
          >
            {stock > 0 ? (
              <p>
                Only{" "}
                <span className="text-orange-500 font-semibold ">
                  {quantity < stock ? stock - quantity : 0} items
                </span>{" "}
                left!
                <br />
                Don't miss it{" "}
              </p>
            ) : (
              <p>
                <span className="text-orange-500 font-semibold text-2xl">
                  Stock out!
                </span>{" "}
                <br />
                Please keep shopping with another items
              </p>
            )}
          </div>
        </div>
        <div className="add_to_cart">
          {" "}
          <button
            disabled={stock === 0}
            onClick={() => handleCart(quantity)}
            className="border-2 border-red-dark text-red-dark rounded-full py-2 px-5 text-md font-semibold hover:text-whiteColor hover:bg-red-dark bg-whiteColor duration-500 ease-in-out w-fit disabled:cursor-not-allowed disabled:bg-red-light disabled:border-red-light disabled:text-red-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
