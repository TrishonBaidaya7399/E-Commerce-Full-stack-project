"use client";
import { useWixClient } from "@/hooks/useWixClient";
import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const wixClient = useWixClient();
  const handleQuantity = (type: string) => {
    if (type === "increase" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleCart = async () => {
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    });
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex flex-row items-center justify-between">
        <div className="left quantity flex flex-row items-center gap-6">
          <div className="button_part text-lg bg-bgColor-dark rounded-full px-4 py-2 w-[150px] flex flex-row items-center justify-between text-black">
            <button
              disabled={quantity === 1 || stockNumber === 0}
              className="disabled:cursor-not-allowed"
              onClick={() => handleQuantity("decrease")}
            >
              -
            </button>
            <p className="quantity">{stockNumber === 0 ? 0 : quantity}</p>
            <button
              disabled={quantity === stockNumber || stockNumber === 0}
              className="disabled:cursor-not-allowed"
              onClick={() => handleQuantity("increase")}
            >
              +
            </button>
          </div>
          <div
            className={`quantity text-xs ${
              stockNumber <= 0 ? "text-red-dark" : "text-gray-dark"
            }`}
          >
            {stockNumber > 0 ? (
              <p>
                Only{" "}
                <span className="text-orange-500 font-semibold ">
                  {quantity < stockNumber ? stockNumber - quantity : 0} items
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
            disabled={stockNumber === 0}
            onClick={handleCart}
            className="border-2 border-red-dark text-red-dark rounded-full py-2 px-5 text-md font-semibold hover:text-whiteColor hover:bg-red-dark bg-whiteColor duration-500 ease-in-out w-fit disabled:cursor-not-allowed disabled:bg-red-light disabled:border-red-light disabled:text-red-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Add;
