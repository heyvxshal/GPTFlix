import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] text-white  px-12 absolute bg-gradient-to-r from-black bg-opacity-50">
      <h1 className="text-6xl">{title}</h1>
      <p className="py-4 text-lg w-2/4 text-justify">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-12 text-xl rounded-lg hover:bg-opacity-90 ">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-10 text-xl rounded-lg ">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
