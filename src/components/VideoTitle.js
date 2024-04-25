import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] text-white px-4 md:px-12 absolute bg-gradient-to-r from-black bg-opacity-50">
      <h1 className="text-3xl lg:text-6xl md:text-4xl ">{title}</h1>
      <p className="hidden md:inline-block py-4 text-lg lg:w-2/4 md:w-3/4 text-justify">
        {overview}
      </p>
      <div>
        <button className="bg-white text-black p-2 lg:p-3 px-5 lg:px-12 text-sm md:text-xl rounded-lg hover:bg-opacity-90 mt-2">
          ▶️ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-2 lg:p-3 px-5 lg:px-12 text-sm md:text-xl rounded-lg mt-2">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
