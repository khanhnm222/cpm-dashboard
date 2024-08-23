'use client';

import { IconSearch } from "@/components/icons";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>();

  const handleSearch = () => {
    console.log('search', search);
  };
  return (
    <>
      <div className="hidden lg:flex relative text-gray-600 ">
        <div className="border-[1.5px] rounded-full border-primary">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
            onClick={() => handleSearch()}
          >
            <IconSearch />
          </button>
        </div>
      </div>
      <div className="flex lg:hidden relative text-gray-600" >
        <button
          type="submit"
          className="rounded-full border-2 flex p-2 relative hover:border-primary"
          onClick={() => handleSearch()}
        >
          <IconSearch />
        </button>
      </div>
    </>
  );
};
export default Search;