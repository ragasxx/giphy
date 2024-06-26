import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  createContext,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (gifId) => {
    if (favourites.includes(gifId)) {
      console.log("under if", gifId);
      const updatedFavourites = favourites.filter((item) => item !== gifId);
      console.log("updated favourites", updatedFavourites);
      localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites));
      setFavourites(updatedFavourites);
    } else {
      const updatedFavourites = [...favourites];
      updatedFavourites.push(gifId);
      localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites));
      setFavourites(updatedFavourites);
    }
  };

  console.log("favourites", favourites);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favouriteGIFs")) || [];
    setFavourites(favourites);
  }, []);

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
  return (
    <GifContext.Provider
      value={{
        gf,
        gifs,
        setGifs,
        filter,
        setFilter,
        favourites,
        addToFavourites,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;
