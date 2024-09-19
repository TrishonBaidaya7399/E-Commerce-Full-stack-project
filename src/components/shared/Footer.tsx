import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-24 w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 shadow-xl bg-whiteColor py-8 md:py-12">
      {/* top part */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 lg:gap-24">
        <div className="left w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"} className="mb-4 ">
            <div className="text-2xl tracking-wide font-bold">ElectroMart</div>
          </Link>
          <p className="text-md text-gray-dark font-semibold">
            30500 Van Dyke, Ste - 201 Warren, MI 48093, 30500 Van Dyke, Ste -
            201 Warren, MI 48093
          </p>
          <p className="text-md text-gray-dark font-semibold">
            shukantobaidya2018@gmail.com
          </p>
          <p className="text-md text-gray-dark font-semibold">+8801636132554</p>
          <div className="social_icons flex flex-row gap-4 items-center justify-start mt-2">
            <FaFacebook className="text-gray-dark text-xl" />
            <FaInstagram className="text-gray-dark text-xl" />
            <FaTwitter className="text-gray-dark text-xl" />
            <FaLinkedin className="text-gray-dark text-xl" />
            <FaYoutube className="text-gray-dark text-xl" />
          </div>
        </div>
        <div className="center w-1/2 hidden lg:flex justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-block text-xl">COMPANY</h2>
            <Link href="/">About Us</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Affiliates</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-block text-xl">COMPANY</h2>
            <Link href="/">About Us</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Affiliates</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-block text-xl">COMPANY</h2>
            <Link href="/">About Us</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Affiliates</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
        <div className="right w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h2 className="font-medium text-lg">SUBSCRIBE</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam
            praesentium{" "}
          </p>
          <div className="border-2 border-red-dark rounded-lg">
            <input
              type="email"
              placeholder="Email address"
              className="p-4 w-3/4 rounded-l-md active:border-none"
            />
            <button className="w-1/4 h-16 md:h-full bg-red-dark rounded-r-sm text-whiteColor">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure payment</span>
          <div className="payments_logo flex flex-row gap-3 flex-wrap">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8  mt-16">
        <div>© 2024 ElectroMart</div>
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="text-center md:text-end">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
