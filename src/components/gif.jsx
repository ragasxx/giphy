import React from "react";
import { Link } from "react-router-dom";

const Gif = ({ gif }) => {
  return (
    <Link to={`/${gif.type}s/${gif.slug}`}>
      <div className="w-full mb-2 relative cursor-pointer aspect-video">
        <img
          src={gif?.images?.fixed_width.webp}
          alt={gif?.title}
          className="w-full object-cover rounded transition-all duration-300"
        />
      </div>
    </Link>
  );
};

export default Gif;
