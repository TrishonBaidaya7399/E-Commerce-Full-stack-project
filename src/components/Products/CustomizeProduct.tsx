"use client";
import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "./Add";

type TCustomizeProductProps = {
  productId: string;
  variants: products.Variant[] | undefined;
  productOptions: products.ProductOption[] | undefined;
};
const CustomizeProduct: React.FC<TCustomizeProductProps> = ({
  productId,
  variants,
  productOptions,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  } | null>({});
  const [selectedVariant, setSelectedVariant] = useState<
    products.Variant | undefined
  >({});

  useEffect(() => {
    const variant = variants?.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return (
        selectedOptions &&
        Object.entries(selectedOptions).every(
          ([key, value]) => variantChoices[key] === value
        )
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);
  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantinStoke = (choices: { [key: string]: string }) => {
    return (variants as products.Variant[]).some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant?.stock?.inStock &&
        variant?.stock?.quantity !== undefined &&
        variant.stock.quantity !== null &&
        variant.stock.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions?.map((option: any, i: number) => (
        <div className="flex flex-col gap-4" key={i}>
          <h4 className="font-medium">Choose a {option?.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice: any, i: number) => {
              const disabled = !isVariantinStoke({
                ...selectedOptions,
                [option?.name!]: choice.description!,
              });
              const selected =
                selectedOptions?.[option?.name!] === choice?.description;
              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option?.name!, choice?.description!);
              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300  relative bg-red-500"
                  style={{
                    backgroundColor: choice?.value,
                    cursor: disabled ? "no-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className={`relative text-red-400 rounded-md py-1 px-4 text-sm border-[1px] border-red-400 ${
                    selected && "bg-red-400 text-white"
                  } ${
                    disabled &&
                    "cursor-not-allowed bg-red-300 border-0 text-white"
                  }`}
                  style={{
                    cursor: disabled ? "no-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {/* add to cart */}
      {productId && selectedVariant?._id ? (
        <Add
          productId={productId}
          variantId={
            selectedVariant?._id || "00000000-000000-000000-000000000001"
          }
          stockNumber={selectedVariant?.stock?.quantity || 0}
        />
      ) : null}
    </div>
  );
};
export default CustomizeProduct;
