import React from "react";

export default function CustomizeProduct() {
  return (
    <div className="flex flex-col gap-4 ">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-2 ring-gray-300 cursor-pointer relative bg-red-dark ">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>{" "}
        </li>
        <li className="w-8 h-8 rounded-full ring-2 ring-gray-300 cursor-pointer relative bg-blue-500 "></li>
        <li className="w-8 h-8 rounded-full ring-2 ring-gray-300 cursor-not-allowed  relative bg-green-500 ">
          <div className="absolute w-10 h-[2px] bg-red-dark rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>{" "}
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="border-2 border-red-dark rounded-md py-1 px-3 text-md font-semibold text-whiteColor bg-red-dark w-fit cursor-pointer">
          Small
        </li>
        <li className="border-2 border-red-dark rounded-md py-1 px-3 text-md font-semibold text-red-dark bg-whiteColor w-fit cursor-pointer">
          Medium
        </li>
        <li className="border-2 border-red-light rounded-md py-1 px-3 text-md font-semibold text-red-300 bg-red-light w-fit cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
}
