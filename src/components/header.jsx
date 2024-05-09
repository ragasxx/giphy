import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/gif-context";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, filter, setFilter, favourites } = GifState();

  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  console.log(categories);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src={logo} className="w-9" alt="giphy-logo" />
          <h1 className="font-bold text-5xl tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          {categories?.slice(0, 5)?.map((category) => (
            <Link
              key={category.name}
              to={`/${category.name_encoded}`}
              className="px-4 py-1 font-bold hover:gradient border-b-4 hidden lg:block"
            >
              {category.name}
            </Link>
          ))}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 ${
                showCategories ? " gradient" : ""
              } hover:gradient hidden lg:block border-b-4`}
            />
          </button>

          {favourites.length > 0 && (
            <div className="h-10 px-6 pt-1.5 py-3 bg-gray-700 rounded-md cursor-pointer">
              <Link to="/favourites">Favourite Gif's</Link>
            </div>
          )}

          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={35}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-sans font-extrabold p-2">
              Categories
            </span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => (
                <Link to={`/${category.name_encoded}`}>{category.name}</Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* {search} */}
    </nav>
  );
};

export default Header;
