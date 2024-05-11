import React, { useEffect, useState } from "react";
import { GifState } from "../context/gif-context";
import { useParams } from "react-router-dom";
import Gif from "../components/gif";
import FilterGif from "../components/filter-gifs";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { gf, filter } = GifState();

  const { query } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [filter]);

  const fetchSearchResults = async () => {
    const { data } = await gf.search(query, {
      lang: "en",
      sort: "relevant",
      type: filter,
      limit: 20,
    });

    setSearchResults(data);
  };

  return (
    <div className="my-4">
      <h2 className="text-4xl sm:text-5xl pb-3 font-extrabold">{query}</h2>

      <FilterGif alignLeft />
      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <span className="text-xl font-semibold mt-32">
            {""}
            No GIFs found for {query}. Try searching for stickers instead?
          </span>
        </div>
      )}
    </div>
  );
};

export default Search;
