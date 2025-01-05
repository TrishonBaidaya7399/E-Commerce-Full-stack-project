import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
const product_per_page = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();
  const allProducts = await wixClient.products
    .queryProducts()
    .limit(limit || product_per_page)
    .eq("collectionIds", categoryId)
    .find();
  console.log(allProducts);
  return (
    <div className=" gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allProducts?.items?.map((product: products.Product) => (
        <Link
          key={product?._id}
          href={"/" + product?.slug}
          className="w-full flex flex-col gap-4 bg-whiteColor backdrop-blur-sm  p-4 rounded-lg"
        >
          <div className="relative w-full h-80">
            <Image
              src={product?.media?.mainMedia?.image?.url!}
              alt={product?.slug!}
              fill
              sizes="25vw"
              className="absolute rounded-md object-cover"
            />
            {product?.media?.items && (
              <Image
                src={product?.media?.items[0]?.image?.url! || "/product.png"}
                // src={item?.media?.mainMedia?.thumbnail?.url!}
                alt={product?.slug!}
                fill
                sizes="25vw"
                className="absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{product?.name}</span>
            <span className="font-medium">
              {product?.priceData?.formatted?.price}
            </span>
          </div>
          {product?.description && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product?.additionalInfoSections?.find(
                    (section: any) => section?.title === "shortDesc"
                  )?.description || product?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="border-2 border-red-dark text-red-dark rounded-full py-2 px-5 text-md font-semibold hover:text-whiteColor hover:bg-red-dark duration-500 ease-in-out w-fit">
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );
};
export default ProductList;
