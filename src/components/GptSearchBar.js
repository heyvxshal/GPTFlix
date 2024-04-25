import React, { useRef, useState } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const [errorMsg, setErrMsg] = useState(null);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Get Movie Results From GPT

    const gptQuery =
      "Act as a movie Recommendation System and suggest movies for query:" +
      searchText.current.value +
      ". Only return 5 movie names, separated by commas";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "system", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) setErrMsg("No Results Found !");
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");

    // Fetch Movie Data from TMDB

    const promiseData = gptMovies.map((movie) => searchMovie(movie));
    const tmdbResults = await Promise.all(promiseData);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[30%] md:pt-[10%] text-center">
      <h1 className=" mt-10 md:mt-5  md:mb-3 text-4xl md:text-5xl font-bold text text-white">
        Search Movies
      </h1>
      <h2 className="mb-5 text-xl md:text-2xl text-zinc-200 font-bold">
        Powered By GPT
      </h2>
      <div className="flex justify-center">
        <form
          className="w-1/2 bg-black grid grid-cols-2 md:grid-cols-12 rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="p-2 md:p-3 m-3 border-2  col-span-9 rounded-md
          "
            placeholder={lang[langKey].GptSearchPlaceHolder}
            ref={searchText}
          />
          <button
            className="py-2 px-2 m-3 font-medium text-lg bg-red-600 text-white rounded-md col-span-3"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
      {errorMsg && (
        <h1 className=" font-bold text-3xl m-5">No Results Found !</h1>
      )}
    </div>
  );
};

export default GptSearchBar;
