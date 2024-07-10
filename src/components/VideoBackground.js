import React, { useState } from 'react';
import useTrailer from '../hooks/useTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const isMuted = useSelector((store) => store.audio.isMuted);

  return (
    <div className='md:w-full md:aspect-video relative md:-top-24'>
      {trailerVideo && (
        <iframe
          className='w-screen aspect-video'
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo.key}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${trailerVideo.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
