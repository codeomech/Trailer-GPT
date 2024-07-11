import React from "react";
import useTrailer from "../../hooks/useTrailer";
import { useSelector } from "react-redux";
import TrailerHeader from "./TrailerHeader";
import { bgImg } from "../../utils/constants";

const WatchTrailer = () => {
  const trailerId = useSelector((store) => store.gpt.trailerId);
  useTrailer(trailerId);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  return (
    <div>
      <TrailerHeader />
      {trailerVideo && (
        <div className="fixed">
          <img
            className="h-screen md:h-full object-cover"
            src={bgImg}
            alt="bgimage"
          />
        </div>
      )}
      {trailerVideo ? (
        <>
          <div className="  md:pt-0 pt-[10%]">
            <iframe
              className="absolute w-[100%] md:aspect-video aspect-square"
              src={`https://www.youtube-nocookie.com/embed/${trailerVideo.key}?autoplay=1&mute=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <img
            src="https://st5.depositphotos.com/30046358/64962/v/600/depositphotos_649628858-stock-video-animated-debugging-tool-404-error.jpg"
            className="w-full"
          />
        </>
      )}
    </div>
  );
};

export default WatchTrailer;