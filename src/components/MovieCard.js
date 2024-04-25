import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div>
      <img
        className="w-32 lg:w-40 md:w-36 p-2 rounded-3xl"
        alt="Movie"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
