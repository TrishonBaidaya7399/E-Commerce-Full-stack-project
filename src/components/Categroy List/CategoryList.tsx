import { wixClientServer } from "@/lib/wixClientServer";
import { categories } from "@wix/bookings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const allCategories = await wixClient.collections.queryCollections().find();
  console.log(allCategories);
  return (
    <div className="px-4 overflow-x-scroll hidden-scrollbar">
      <div className="flex gap-4 md:gap-8 cursor-pointer">
        {allCategories.items.map((category) => {
          return (
            <Link
              key={category?._id}
              href={`/list?cat=${category?.slug}`}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
            >
              <div className="relative bg-bgColor w-full h-96">
                <Image
                  fill
                  src={category?.media?.mainMedia?.image?.url || "/product.png"}
                  alt={category?.name || "category_name"}
                  sizes="20vw"
                  className="object-cover rounded-lg drop-shadow-xl"
                />
              </div>
              <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
                {category?.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryList;
