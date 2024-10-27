import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const products = [
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
const product_per_page = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();
  const allProducts = await wixClient.products
    .queryProducts()
    .limit(limit || product_per_page)
    .eq("collectionIds", categoryId)
    .find();
  console.log(allProducts);
  return (
    <div className=" gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allProducts?.items?.map((item, i) => (
        <Link
          key={i}
          href="/test"
          className="w-full flex flex-col gap-4 bg-whiteColor backdrop-blur-sm  p-4 rounded-lg"
        >
          <div className="relative w-full h-80">
            <Image
              src={item?.media?.mainMedia?.image?.url!}
              alt={item?.slug!}
              fill
              sizes="25vw"
              className="absolute rounded-md object-cover"
              />
            <Image
              src={item?.media?.mainMedia?.image?.url!}
              // src={item?.media?.mainMedia?.thumbnail?.url!}
              alt={item?.slug!}
              fill
              sizes="25vw"
              className="absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{item?.name}</span>
            <span className="font-medium">{item?.price?.formatted?.price}</span>
          </div>
          <div className="text-sm text-gray-500">{item?.description}</div>
          <button className="border-2 border-red-dark text-red-dark rounded-full py-2 px-5 text-md font-semibold hover:text-whiteColor hover:bg-red-dark duration-500 ease-in-out w-fit">
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );
};
export default ProductList;
