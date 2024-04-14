import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img
        className="w-48 p-2 rounded-3xl"
        alt="Movie"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
