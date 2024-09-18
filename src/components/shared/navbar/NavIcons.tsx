"use client";

import CartModal from "@/components/cart/CartModal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { PiUserCircle } from "react-icons/pi";

function NavIcons() {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isLoggedIn = false;
  const cartItems = ["1", "2"];
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
    setIsCartOpen(false);
  };
  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
    setIsProfileOpen(false);
  };
  return (
    <div className="navIcons flex items-center justify-end gap-6">
      <div className="item cursor-pointer relative" onClick={handleProfile}>
        <PiUserCircle size="30" />
        {/* profile open dropdown */}
        {isProfileOpen && (
          <div className="profile_dropdown absolute top-[50px] right-2 flex flex-col gap-2 text-md font-semibold text-gray-dark shadow-xl shadow-gray px-8 py-2 rounded-md z-20">
            <Link href="/" className="cursor-pointer">
              Profile
            </Link>
            <div className="cursor-pointer">Logout</div>
          </div>
        )}
      </div>
      <div className="item cursor-pointer">
        <div className="relative">
          <div className="absolute -top-2 left-4 w-5 h-5 rounded-full bg-red-dark text-whiteColor text-sm text-center">
            1
          </div>
          <HiOutlineBellAlert size="30" />
        </div>
      </div>
      <div className="item cursor-pointer relative">
        <div className="relative">
          <div className="absolute -top-2 left-4 w-5 h-5 rounded-full bg-red-dark text-whiteColor backdrop-blur-sm text-sm text-center">
            1
          </div>
          <BsCart3 size="30" onClick={handleCart} />
        </div>
        {/* profile open dropdown */}
        {isCartOpen && (
          <>
            {cartItems.length > 0 ? (
              <CartModal />
            ) : (
              <div className="absolute top-[50px] right-1 text-md w-[250px] p-6 rounded-md shadow-lg text-black font-sem-bold flex flex-col items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  alt="no cart data"
                  src="/no_cart_data.webp"
                  className="bg-transparent rounded-sm "
                />
                <p className="w-full text-center">No cart item available</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default NavIcons;
