import CategoryList from "@/components/Categroy List/CategoryList";
import Slider from "@/components/common/Slider";
import ProductList from "@/components/Product Lists/ProductList";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useEffect, useState } from "react";

const HomePage = async () => {
  // const wixClient = useWixClient();
  // const [allProducts, setAllProducts] = useState([]);
  // useEffect(() => {
  //   getProducts();
  // }, []);
  // const getProducts = async () => {
  //   const res = await wixClient.products.queryProducts().find();
  //   console.log("All Products: ", res);
  //   // setAllProducts(res?.items);
  // };

  return (
    <div className="">
      <Slider />
      <div className="mt-12 md:mt-18 lg:mt-24 px-4 md:px-8 lg:px-16 xl:px-32 mx-auto">
        <h2 className="title text-2xl text-black font-semibold pb-6">
          Featured Products
        </h2>
        <Suspense fallback={"Loading"}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit = {4}/>
        </Suspense>
      </div>
      <div className="mt-12 md:mt-18 lg:mt-24 px-4 mx-auto">
        <h2 className="title text-2xl text-black font-semibold pb-6 px-4 md:px-8 lg:px-16 xl:px-32">
          Categories
        </h2>
        <CategoryList />
      </div>
      <div className="mt-12 md:mt-18 lg:mt-24 px-4 md:px-8 lg:px-16 xl:px-32 mx-auto">
        <h2 className="title text-2xl text-black font-semibold pb-6">
          New Products
        </h2>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit = {4}/>
      </div>
    </div>
  );
};

export default HomePage;
