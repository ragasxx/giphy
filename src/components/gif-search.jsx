import React, { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGifs = () => {
    if (query.trim() === "") return;
    navigate(`/search/${query}`);
    setQuery("");
  };

  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search all the GIFs and Stickers"
        className="w-full py-5 pl-4 pr-14 text-lg sm:text-xl text-black border outline-none rounded-tl border-gray-300 rounded-bl"
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-300 opacity-90 right-20 top-6 mr-4 rounded-full"
        >
          <HiMiniXMark size={22} />
        </button>
      )}

      <button
        onClick={searchGifs}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white rounded-tr rounded-br py-2 px-4"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
