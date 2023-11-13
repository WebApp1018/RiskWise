import React, { useEffect } from "react";

const Search = () => {
  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src="/images/icons/search.svg"></img>
        </div>
        <input
          type="search"
          className="text-color-neutral5 p-2 ps-10 text-sm bg-gray-50"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default Search;
