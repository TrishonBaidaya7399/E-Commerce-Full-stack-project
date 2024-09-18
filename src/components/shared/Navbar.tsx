import Link from "next/link";
import React from "react";
import Menu from "./navbar/Menu";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full relative shadow-xl">
      {/* Mobile screen */}
      <div className="h-full flex items-center justify-center w-full">
        <Menu />
      </div>
    </div>
  );
}