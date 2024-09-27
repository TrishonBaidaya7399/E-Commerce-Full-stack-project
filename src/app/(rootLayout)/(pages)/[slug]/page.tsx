import Add from "@/components/Products/Add";
import CustomizeProduct from "@/components/Products/CustomizeProduct";
import ProductsImages from "@/components/Products/ProductsImages";
import React from "react";

export default function page() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col lg:flex-row gap-16 mt-12">
      <div className="image_container w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductsImages />
      </div>
      <div className="text_container w-full lg:w-1/2 flex flex-col gap-6">
        {/* product title */}
        <h1 className="title text-4xl font-medium text-black">Product Name</h1>
        <p className="description text-lg text-gray-dark font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati odio voluptatem consequatur quo harum aperiam exercitationem
          ea quidem! Cum suscipit, porro facilis, voluptate iusto voluptatum
          rerum nihil eveniet minima ad recusandae dolores nesciunt facere nam
          laudantium animi similique impedit explicabo inventore! Maiores
          eveniet eligendi temporibus, iure numquam sint animi optio placeat
        </p>
        <div className="divider h-[2px] bg-divider_color rounded-full" />
        <div className="product_price flex items-center gap-4">
          <h3 className="text-xl text-gray-400 line-through">$59</h3>
          <h2 className="text-2xl font-medium text-gray-dark">$49</h2>
        </div>
        <div className="divider h-[2px] bg-divider_color rounded-full" />
        <CustomizeProduct />
        <Add />
        <div className="divider h-[2px] bg-divider_color rounded-full" />
        {/* product info */}
        <div className="info_part flex flex-col gap-6">
          <div>
            <h3 className="text-black font-medium capitalize text-xl mb-4">
              Product info
            </h3>
            <p className="text-gray-dark font-normal text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              quae accusantium dicta qui magnam, dignissimos voluptatum rem
              facere vel incidunt magni praesentium sed! Et accusantium
              laboriosam ducimus iusto delectus quis. Illo commodi ex facere,
              quo magni nesciunt libero in corrupti accusantium eius
              dignissimos, dolorum, voluptas labore itaque officiis doloribus
              vel?
            </p>
          </div>
          <div>
            <h3 className="text-black font-medium capitalize text-xl mb-4">
              Product info
            </h3>
            <p className="text-gray-dark font-normal text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              quae accusantium dicta qui magnam, dignissimos voluptatum rem
              facere vel incidunt magni praesentium sed! Et accusantium
              laboriosam ducimus iusto delectus quis. Illo commodi ex facere,
              quo magni nesciunt libero in corrupti accusantium eius
              dignissimos, dolorum, voluptas labore itaque officiis doloribus
              vel?
            </p>
          </div>
          <div>
            <h3 className="text-black font-medium capitalize text-xl mb-4">
              Product info
            </h3>
            <p className="text-gray-dark font-normal text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              quae accusantium dicta qui magnam, dignissimos voluptatum rem
              facere vel incidunt magni praesentium sed! Et accusantium
              laboriosam ducimus iusto delectus quis. Illo commodi ex facere,
              quo magni nesciunt libero in corrupti accusantium eius
              dignissimos, dolorum, voluptas labore itaque officiis doloribus
              vel?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
