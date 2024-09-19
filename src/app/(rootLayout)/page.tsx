import CategoryList from "@/components/Categroy List/CategoryList";
import Slider from "@/components/common/Slider";
import ProductList from "@/components/Product Lists/ProductList";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-12 md:mt-18 lg:mt-24 px-4 md:px-8 lg:px-16 xl:px-32 mx-auto">
        <h2 className="title text-2xl text-black font-semibold pb-6">Featured Products</h2>
        <ProductList/> 
      </div>
      <div className="mt-12 md:mt-18 lg:mt-24 px-4 mx-auto">
        <h2 className="title text-2xl text-black font-semibold pb-6 px-4 md:px-8 lg:px-16 xl:px-32">Categories</h2>
        <CategoryList/> 
      </div>
      <div className="mt-12 md:mt-18 lg:mt-24 px-4 md:px-8 lg:px-16 xl:px-32 mx-auto">
        <h2 className="title text-2xl text-black font-semibold pb-6">New Products</h2>
        <ProductList/> 
      </div>
    </div>
  );
};

export default HomePage;
