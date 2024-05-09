import React, { useContext, useEffect } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/gif";

const Home = () => {
  const { gf, gifs, setGifs, filter } = GifState();

  const fetchTrendingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  console.log(gifs);

  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="w-full rounded mt-3"
      />

      {/* filter gifs */}

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => (
          <Gif gif={gif} key={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
