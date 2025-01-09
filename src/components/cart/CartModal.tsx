"use client";
import React from "react";
import useCartStore from "@/hooks/useCartStore";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";
export default function CartModal() {
  const { cart, isLoading, error, removeItem } = useCartStore();
  const wixClient = useWixClient();

  return (
    <div className="profile_dropdown absolute top-[50px] right-1 text-md font-semibold shadow-xl shadow-gray rounded-md z-20 p-6 w-[300px] md:w-[400px] flex flex-col gap-6 bg-whiteColor border-[1px] border-line_color">
      <div className="cart_title text-black text-xl font-semibold text-left">
        Shopping Cart
      </div>

      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">Error: {error}</div>
      ) : cart?.lineItems?.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        // Cart Items Display
        <div
          className={`product_list max-h-[300px] ${
            (cart?.lineItems?.length ?? 0) > 2
              ? "overflow-y-auto border-[1px] border-line_color p-2 pr-0 rounded-md custom-scrollbar"
              : "gap-4"
          } flex flex-col gap-2`}
        >
          {cart?.lineItems?.map((item) => (
            <div
              key={item._id}
              className={`product flex flex-row items-center justify-between ${
                (cart?.lineItems?.length ?? 0) > 2
                  ? "bg-gray-100 p-2 rounded-md"
                  : ""
              }`}
            >
              {/* Left Part: Image and Details */}
              <div className="items_part left flex flex-row gap-2">
                <div className="prod_image">
                  <Image
                    src={
                      item?.image
                        ? wixMedia.getScaledToFillImageUrl(
                            item?.image,
                            100,
                            100,
                            {}
                          )
                        : "placeholder.png"
                    }
                    width={100}
                    height={100}
                    alt={item?.productName?.original || "product"}
                    className="bg-bgColor border-line_color rounded-md border-[1px] shadow-lg object-cover"
                  />
                </div>
                <div className="prod_details flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="prod_name text-black font-semibold text-md">
                      {item?.productName?.translated}
                    </div>
                    <div
                      className={`available text-sm ${
                        item?.availability?.status === "AVAILABLE"
                          ? "text-gray-400"
                          : "text-red-500"
                      }`}
                    >
                      {item?.availability?.status === "AVAILABLE"
                        ? "Available"
                        : "Unavailable"}
                    </div>
                  </div>
                  <div className="quantity text-gray-400 text-sm">
                    Qty: {item?.quantity}
                  </div>
                </div>
              </div>

              {/* Right Part: Price and Remove Button */}
              <div className="right h-[90px] flex flex-col justify-between items-end">
                <div className="price text-gray-700 font-semibold flex flex-row items-center gap-1">
                  {/* {cart?.currency}  */}
                  {item?.quantity && item?.quantity > 1 && (
                    <div className="text-xs text-green-700">
                      {item?.quantity} X{" "}
                    </div>
                  )}{" "}
                  {item?.price?.formattedAmount}
                </div>
                <div
                  className="remove text-red-dark font-semibold cursor-pointer"
                  onClick={() => removeItem(wixClient, item?._id!)}
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Subtotal Section */}
      {!isLoading && !error && cart?.lineItems && cart.lineItems.length > 0 && (
        <div className="subtotal">
          <div className="flex items-center justify-between text-black font-bold">
            <p>Subtotal</p>
            <p>
              {cart.currency} {cart?.subtotal?.formattedAmount}
            </p>
          </div>
          <p className="text-gray-400">
            Shipping and taxes calculated at checkout
          </p>
        </div>
      )}

      {/* Buttons Part */}
      <div className="buttons_part flex flex-row items-center justify-between">
        <button
          className="bg-transparent text-sm text-black font-semibold flex items-center justify-center border-2 border-gray-light rounded-md h-[50px] px-6 py-auto disabled:opacity-70"
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          disabled={isLoading}
        >
          View Cart
        </button>
        <button
          className="bg-black text-sm text-whiteColor font-semibold flex items-center justify-center border-2 border-black rounded-md h-[50px] px-6 py-auto disabled:opacity-70"
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          disabled={isLoading}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
