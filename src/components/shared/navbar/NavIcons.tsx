"use client";

import CartModal from "@/components/cart/CartModal";
import { ThemeContext } from "@/context/ThemeContext";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";
import useCartStore from "@/hooks/useCartStore";

function NavIcons() {
  const router = useRouter();
  const pathName = usePathname();
  const wixClient = useWixClient();
  const { theme, setTheme } = useContext(ThemeContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = ["1", "2"];
  const isLoggedIn = wixClient?.auth?.loggedIn();
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

  // AUTH WITH WIX-MANAGED AUTH --------------------------------------------------
  // const wixClient = useWixClient();
  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000"
  //   );

  //   console.log(loginRequestData);

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;
  // };
  // ------------------------------------------------------------------------------
  const handleLogout = async () => {
    try {
      const response = await wixClient.auth.logout(window.location.href);
      if (response?.logoutUrl) {
        Cookies.remove("refreshToken");
        setIsLoading(false);
        setIsProfileOpen(false);
        router.push(`/login`);
      } else {
        console.log("Failed to logout");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // cart data ------------------------------------

  const { counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);
  return (
    <div className="navIcons flex items-center justify-end gap-6">
      <div className="item cursor-pointer relative" onClick={handleProfile}>
        <PiUserCircle size="30" />
        {/* profile open dropdown */}
        {isProfileOpen && (
          <div className="profile_dropdown absolute top-[50px] right-2 flex flex-col gap-2 text-md font-semibold text-gray-dark shadow-xl shadow-gray px-8 py-2 rounded-md z-20 bg-whiteColor border-[1px] border-line_color">
            <Link href="/" className="cursor-pointer">
              Profile
            </Link>
            <div
              className="cursor-pointer"
              onClick={isLoggedIn ? handleLogout : () => router.push("/login")}
            >
              {isLoggedIn ? (isLoading ? "Logging out..." : "Logout") : "Login"}
            </div>
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
      <div className="item relative">
        <div className="relative">
          <div className="absolute -top-2 left-4 w-5 h-5 rounded-full bg-red-dark text-whiteColor text-sm text-center">
            {counter}
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
      <div className="item cursor-pointer">
        {theme === "light" ? (
          <IoMoonOutline size="30" onClick={() => setTheme("dark")} />
        ) : (
          <FiSun size="30" onClick={() => setTheme("light")} />
        )}
      </div>
    </div>
  );
}

export default NavIcons;
