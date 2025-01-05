import Add from "@/components/Products/Add";
import CustomizeProduct from "@/components/Products/CustomizeProduct";
import ProductsImages from "@/components/Products/ProductsImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  console.log({ paras: params.slug });
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params?.slug)
    .find();
  console.log(products);
  if (!products.items[0]) {
    return notFound();
  }
  const product = products.items[0];
  console.log(product);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col lg:flex-row gap-16 mt-12">
      <div className="image_container w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductsImages items={product?.media?.items} />
      </div>
      <div className="text_container w-full lg:w-1/2 flex flex-col gap-6">
        {/* product title */}
        <h1 className="title text-4xl font-medium text-black">
          {product?.name}
        </h1>
        <p className="description text-lg text-gray-dark font-normal">
          {product?.description}
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
};

export default SinglePage;
