import React, { useEffect, useState } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/gif";

const Favourites = () => {
  const [favouriteGIFs, setFavouriteGIFs] = useState([]);

  const { gf, favourites } = GifState();

  const fetchFavouriteGifs = async () => {
    const { data } = await gf.gifs(favourites);
    setFavouriteGIFs(data);
  };

  useEffect(() => {
    fetchFavouriteGifs();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-gray-500 my-3">My Favourites</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {favouriteGIFs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
