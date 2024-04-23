import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          type="text"
          className="p-3 m-3 border-2  col-span-9
          "
          placeholder={lang[langKey].GptSearchPlaceHolder}
        />
        <button className="py-2 px-2 m-3 font-medium text-lg bg-red-600 text-white rounded-md col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
