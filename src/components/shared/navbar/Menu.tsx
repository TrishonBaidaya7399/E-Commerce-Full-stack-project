"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu_container bg-whiteColor flex items-center justify-center w-full">
      {/* mobile screen */}
      <div className="topbar flex md:hidden item-center justify-between w-full">
        <Link href={"/"} className="flex items-center justify-center ">
          <div className="text-2xl tracking-wide flex md:hidden">ElectroMart</div>
        </Link>
        <div className="menu_icon block md:hidden">
          {!open ? (
            <IoMenu
              size="30"
              className="cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <RxCross2
              size="30"
              className="cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>
      </div>
      {open && (
        <div className="mobile_nav_lists mx-auto flex md:hidden flex-col item-center justify-center md:justify-normal gap-4 -pt-40 md:pt-48 absolute bg-black text-whiteColor text-xl font-semibold left-0 top-20 w-full h-screen duration-300 z-10">
          <Link
            href="/"
            className="nav_item text-center text-whiteColor hover:text-gray-300 hover:text-[24px] duration-200"
          >
            Home Page
          </Link>
          <Link
            href="/"
            className="nav_item text-center text-whiteColor hover:text-gray-300 hover:text-[24px] duration-200"
          >
            Deals
          </Link>
          <Link
            href="/"
            className="nav_item text-center text-whiteColor hover:text-gray-300 hover:text-[24px] duration-200"
          >
            About Page
          </Link>
          <Link
            href="/"
            className="nav_item text-center text-whiteColor hover:text-gray-300 hover:text-[24px] duration-200"
          >
            Shop
          </Link>
          <Link
            href="/"
            className="nav_item text-center text-whiteColor hover:text-gray-300 hover:text-[24px] duration-200"
          >
            Details
          </Link>
          <Link
            href="/"
            className="nav_item text-center text-whiteColor hover:text-gray-300 hover:text-[24px] duration-200"
          >
            Contact
          </Link>
        </div>
      )}
      {/* desktop screen */}
      <div className="desktop_nav_lists hidden md:flex flex-row items-center justify-between w-full">
        {/* left */}
        <div
          className="w-1/3 xl:w-1/2 flex items-center gap-12
        "
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="electromart dev" width={24} height={24} />
            <div className="text-2xl tracking-wide">ElectroMart</div>
          </Link>
          <div className="hidden xl:flex items-center gap-6">
            <Link
              href="/"
              className="nav_item text-center text-gray-dark hover:text-gray-600 hover:text-xl duration-200"
            >
              Home
            </Link>
            <Link
              href="/"
              className="nav_item text-center text-gray-dark hover:text-gray-600 hover:text-xl duration-200"
            >
              Deals
            </Link>
            <Link
              href="/"
              className="nav_item text-center text-gray-dark hover:text-gray-600 hover:text-xl duration-200"
            >
              About
            </Link>
            <Link
              href="/"
              className="nav_item text-center text-gray-dark hover:text-gray-600 hover:text-xl duration-200"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="nav_item text-center text-gray-dark hover:text-gray-600 hover:text-xl duration-200"
            >
              Details
            </Link>
            <Link
              href="/"
              className="nav_item text-center text-gray-dark hover:text-gray-600 hover:text-xl duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
