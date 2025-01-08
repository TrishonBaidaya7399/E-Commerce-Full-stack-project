"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
type Props = {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
};

const Pagination = ({ currentPage, hasPrev, hasNext }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createRageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="custom_pagination mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-red-400 text-white p-2 text-sm w-24 cursor-pinter disabled:cursor-not-allowed disabled:bg-pink-200 "
        disabled={!hasPrev}
        onClick={() => createRageUrl(currentPage - 1)}
      >
        Prev
      </button>
      <button
        className="rounded-md bg-red-400 text-white p-2 text-sm w-24 cursor-pinter disabled:cursor-not-allowed disabled:bg-pink-200 "
        disabled={!hasNext}
        onClick={() => createRageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
