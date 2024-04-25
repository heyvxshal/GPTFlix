import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-2 m-3 md:m-10 bg-black rounded-lg bg-opacity-90">
      {movieNames.map((movieName, i) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[i]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
