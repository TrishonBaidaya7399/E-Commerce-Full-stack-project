"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactImageMagnifier from "simple-image-magnifier/react";

const ProductsImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="product_image_container flex flex-col gap-8">
      <div className="large_image h-[600px] relative">
        <Image
          fill
          src={items[index]?.image?.url}
          alt=""
          sizes="50vw"
          className="object-cover rounded-md drop-shadow-xl"
        />
        {/* <ReactImageMagnifier
          srcOriginal={items[index]?.image?.ur}
          srcPreview={items[index]?.image?.ur}
          width="100%"
          className="object-cover rounded-md drop-shadow-xl"
        /> */}
      </div>
      {items.length > 0 && (
        <div className="min-images flex flex-row justify-start gap-4 cursor-pointer">
          {items.map((image: any, i: number) => (
            <div
              key={image?._id}
              className="relative w-1/4 h-32 hover:h-[150px] hover:w-[250px] gap-4 rounded-md hover:drop-shadow-xl duration-300 border-[1px] border-gray-100 bg-whiteColor"
              onMouseOver={() => setIndex(i)}
            >
              <Image
                fill
                src={image?.image?.url}
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
};
export default ProductsImages;
