"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    console.log("filter changed: ", name, value);
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
      <div className="left flex gap-4 flex-wrap">
        {/* type filter */}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
          onChange={handleFilterChange}
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        {/*  minimum price filter */}
        <input
          type="number"
          name="min"
          placeholder="Min price"
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
          onChange={handleFilterChange}
        />
        {/* maximum price filter */}
        <input
          type="number"
          name="max"
          placeholder="Max price"
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[105px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
          onChange={handleFilterChange}
        />
        {/* category filter */}
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
          onChange={handleFilterChange}
        >
          <option value="">Category</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        {/* all filters */}
        <select
          name="allFilter"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
          onChange={handleFilterChange}
        >
          <option value=""> All filter</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div className="right flex gap-4 flex-wrap justify-start">
        {/* sort filter */}
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[180px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10 h-10"
          onChange={handleFilterChange}
        >
          <option value="">Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
}
