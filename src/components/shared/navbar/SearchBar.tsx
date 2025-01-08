"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="search_panel flex items-center justify-center gap-4 bg-gray-200 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        name="name"
        type="text"
        placeholder="Search..."
        className="py-1 px-3 bg-transparent outline-none rounded-md duration-300 text-gray-700 flex-1 hover:bg-whiteColor active:bg-whiteColor focus:bg-whiteColor"
      />
      <button type="submit" className="bg-transparent">
        <FiSearch className="cursor-pointer text-gray-dark mr-2" />
      </button>
    </form>
  );
}
