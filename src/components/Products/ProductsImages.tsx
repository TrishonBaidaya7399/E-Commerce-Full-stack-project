"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactImageMagnifier from "simple-image-magnifier/react";

export default function ProductsImages() {
  const images = [
    { _id: 1, url: "/prod_2.jpg" },
    { _id: 1, url: "/prod_3.webp" },
    { _id: 1, url: "/prod_4.jpg" },
    { _id: 1, url: "/prod_5.jpeg" },
    { _id: 1, url: "/product.png" },
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className="product_image_container flex flex-col gap-8">
      <div className="large_image h-[500px] relative">
        <Image
          fill
          src={images[index]?.url}
          alt=""
          sizes="50vw"
          className="object-cover rounded-md drop-shadow-xl"
        />
        {/* <ReactImageMagnifier
          srcOriginal={images[index]?.url}
          srcPreview={images[index]?.url}
          width="100%"
          className="object-cover rounded-md drop-shadow-xl"
        /> */}
      </div>
      {images.length > 0 && (
        <div className="min-images flex flex-row justify-between gap-4 cursor-pointer">
          {images.map((image, i) => (
            <div
              key={image?._id}
              className="relative w-1/4 h-32 hover:h-[150px] hover:w-[250px] gap-4 rounded-md hover:drop-shadow-xl duration-300 border-[1px] border-gray-100 bg-whiteColor"
              onClick={() => setIndex(i)}
            >
              <Image
                fill
                src={image?.url}
                alt=""
                sizes="50vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
