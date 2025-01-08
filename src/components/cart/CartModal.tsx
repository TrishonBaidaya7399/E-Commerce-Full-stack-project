"use client";
import useCartStore from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import React, { useEffect } from "react";

export default function CartModal() {
  const wixClient = useWixClient();
  const { cart, getCart } = useCartStore();
  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);
  console.log({ CartData: cart.lineItems?.length });

  return (
    <div className="profile_dropdown absolute top-[50px] right-1 text-md font-semibold shadow-xl shadow-gray rounded-md z-20 p-6 w-[300px] md:w-[400px] flex flex-col gap-6 bg-whiteColor border-[1px] border-line_color">
      <div className="cart_title text-black text-xl font-semibold text-left">
        Shopping Cart
      </div>

      {/* Wrapping the items in a scrollable div */}
      {/* <div
        className={`product_list max-h-[300px] ${
          cartItems.length > 2
            ? "overflow-y-auto border-[1px] border-line_color p-2 pr-0 rounded-md custom-scrollbar"
            : "gap-4"
        } flex flex-col gap-2`}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            className={`product flex flex-row items-center justify-between ${
              cartItems.length > 2 && "bg-gray-100 p-2 rounded-md"
            }`}
          >
            <div className="items_part left flex flex-row gap-2">
              <div className="prod_image">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                  className="bg-bgColor border-line_color rounded-md border-[1px] shadow-lg"
                />
              </div>
              <div className="prod_details flex flex-col justify-between">
                <div className="flex-flex-col-gap-1">
                  <div className="prod_name text-black font-semibold text-md">
                    {item.name}
                  </div>
                  <div
                    className={`available text-sm ${
                      item.available ? "text-gray-400" : "text-red-500"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </div>
                </div>
                <div className="quantity text-gray-400 text-sm">
                  Qty: {item.qty}
                </div>
              </div>
            </div>
            <div className="right h-[90px] flex flex-col justify-between items-end">
              <div className="price text-gray-700 font-semibold">
                ${item.price}
              </div>
              <div className="remove text-red-dark font-semibold cursor-pointer">
                Remove
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="subtotal">
        <div className="flex items-center justify-between text-black font-bold">
          <p>Subtotal</p>
          <p>
            $
            {cartItems
              .reduce((total, item) => total + item.price * item.qty, 0)
              .toFixed(2)}
          </p>
        </div>
        <p className="text-gray-400">
          Shipping and taxes calculated at checkout
        </p>
      </div> */}

      <div className="buttons_part flex flex-row items-center justify-between">
        <button className="bg-transparent text-sm text-black font-semibold flex items-center justify-center border-2 border-gray-light rounded-md h-[50px] px-6 py-auto">
          View Cart
        </button>
        <button className="bg-black text-sm text-whiteColor font-semibold flex items-center justify-center border-2 border-black rounded-md h-[50px] px-6 py-auto">
          Checkout
        </button>
      </div>
    </div>
  );
}
