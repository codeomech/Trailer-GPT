import React from "react";
import useTrailer from "../../hooks/useTrailer";
import { useSelector } from "react-redux";
import TrailerHeader from "./TrailerHeader";
import Loaders from "./Loaders";

const WatchTrailer = () => {
  const loading = useSelector((store) => store.gpt.loading);
  const trailerId = useSelector((store) => store.gpt.trailerId);
  useTrailer(trailerId);
  let trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  return (
    <div className="relative h-screen w-screen">
      <TrailerHeader className="relative z-10" />
      {loading ? (
        <Loaders />
      ) : trailerVideo ? (
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${trailerVideo.key}?autoplay=1&mute=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      ) : (
        <Loaders />
      )}
    </div>
  );
};

export default WatchTrailer;
