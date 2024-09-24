import React from "react";

export default function Filter() {
  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
      <div className="left flex gap-4 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input
          type="number"
          name="min"
          placeholder="Min price"
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
        />

        <input
          type="number"
          name="max"
          placeholder="Max price"
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[105px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
        />

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
        >
          <option value="">Size</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
        >
          <option value="">Color</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
        >
          <option value="">Category</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[100px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10"
        >
          <option value=""> All filter</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div className="right flex gap-4 flex-wrap justify-start">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-full text-xs font-medium bg-bgColor-light w-[180px] text-black focus:outline-0 focus:outline-line_color hover:outline-none drop-shadow-xl h-10 h-10"
        >
          <option value="">Sort By</option>
          <option value="lowtohigh">Price (low to high)</option>
          <option value="highttolow">Price (high to low)</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
}
