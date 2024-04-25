import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-3 text-white ">
      <h1 className="text-2xl mt-10 ml-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex flex-shrink-0">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
