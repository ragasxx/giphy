import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src={logo} className="w-9" alt="giphy-logo" />
          <h1 className="font-bold text-5xl tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {
          // render categories
        }

        <div className="font-bold text-md flex gap-2 items-center">
          <Link className="px-4 py-1 font-bold hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>
          <Link className="px-4 py-1 font-bold hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>
          <Link className="px-4 py-1 font-bold hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>

          <Link className="px-4 py-1 font-bold hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 ${
                showCategories ? " gradient" : ""
              } hover:gradient hidden lg:block border-b-4`}
            />
          </button>

          <div className="h-10 px-6 pt-1.5 py-3 bg-gray-700 rounded-md cursor-pointer">
            <Link to="/favourites">Favourite Gif's</Link>
          </div>

          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={35}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span>Categories</span>
            <hr />
            <div>
              <Link>Reactions</Link>
            </div>
          </div>
        )}
      </div>

      {/* {search} */}
    </nav>
  );
};

export default Header;
