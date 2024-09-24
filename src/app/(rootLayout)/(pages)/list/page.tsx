import Filter from "@/components/pages/list/Filter";
import ProductList from "@/components/Product Lists/ProductList";
import Image from "next/image";
import React from "react";

function listPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign */}
      <div className="campaign_container hidden sm:flex bg-pink-50 px-6 sm:px-12 md:px-24 lg:px-[200px] justify-between h-64">
        <div className="text_container w-2/3 flex flex-col items-start justify-center gap-8">
          <h2 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br/> selected product
          </h2>
          <button className="border-2 border-red-dark hover:text-red-dark rounded-full py-2 px-5 text-md font-semibold text-whiteColor bg-red-dark hover:bg-whiteColor duration-500 ease-in-out w-fit">
            Buy Now
          </button>
        </div>
        <div className="image_container relative w-1/3">
          <Image alt="" src="/woman.png" fill className="object-container" />
        </div>
      </div>
      {/* filter */}
      <Filter/>
      {/* products */}
      <h2 className="mt-12 text-xl font-semibold">Products for you</h2>
      <ProductList/>
    </div>
  );
}

export default listPage;
