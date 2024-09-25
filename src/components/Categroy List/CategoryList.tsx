import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll hidden-scrollbar">
      <div className="flex gap-4 md:gap-8 cursor-pointer">
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
        <Link
          href="/list?cat=text"
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-bgColor w-full h-96">
            <Image
              fill
              src="/prod_5.jpeg"
              alt=""
              sizes="20vw"
              className="object-cover rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="title text-xl text-black font-semibold mt-4 tracking-wide">
            Category Name
          </div>
        </Link>
      </div>
    </div>
  );
}
