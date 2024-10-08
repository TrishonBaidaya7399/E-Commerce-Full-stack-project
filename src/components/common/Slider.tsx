"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const slideData = [
  {
    _id: 1,
    title: "Wireless Headphones",
    description:
      "Experience high-quality sound with our latest wireless headphones.",
    img: "/prod_1.avif",
    url: "/products/wireless-headphones",
    bg: "bg-gradient-to-r from-yellow-500 via-yellow-100 to-pink-500",
  },
  {
    _id: 2,
    title: "Smart Watch",
    description:
      "Stay connected and track your fitness with our cutting-edge smart watches.",
    img: "/prod_2.jpg",
    url: "/products/smart-watch",
    bg: "bg-gradient-to-r from-orange-300 to-orange-100",
  },
  {
    _id: 3,
    title: "Bluetooth Speaker",
    description:
      "Bring the party wherever you go with our portable Bluetooth speakers.",
    img: "/prod_3.webp",
    url: "/products/bluetooth-speaker",
    bg: "bg-gradient-to-r from-yellow-500 via-red-300 to-pink-200",
  },
  {
    _id: 4,
    title: "4K Ultra HD TV",
    description:
      "Immerse yourself in stunning visuals with our 4K Ultra HD TVs.",
    img: "/prod_4.jpg",
    url: "/products/4k-ultra-hd-tv",
    bg: "bg-gradient-to-r from-blue-300 to-indigo-100",
  },
];
export default function Slider() {
  const [current, setCurrent] = useState(3);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slideData?.length -1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [current]);

  return (
    <div className="slider_component h-[calc(100vh-80px)] overflow-hidden relative">
      <div
        className="w-max h-screen flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slideData.map((slide) => (
          <div
            key={slide?._id}
            className={`${slide?.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            <div className="text_container h-1/2 xl:h-full xl:w-1/2 flex flex-col gap-8 text-center items-center justify-center">
              <h2 className="text-xl text-gray-700 font-semibold xl:text-2xl 2xl:text-3xl">
                {slide?.description}
              </h2>
              <h2 className="text-2xl text-black font-bold xl:text-4xl 2xl:text-5xl">
                {slide?.title}
              </h2>
              <Link href={slide?.url}>
                <button className="px-8 py-4 rounded-md bg-black text-whiteColor font-semibold">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="image_container h-1/2 xl:h-full xl:w-1/2 relative">
              <Image
                src={slide?.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex gap-8">
        {slideData.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-dark cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide?._id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-dark rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
