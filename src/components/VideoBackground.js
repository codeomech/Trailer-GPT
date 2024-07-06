import React, { useState } from 'react';
import useTrailer from '../hooks/useTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const [isMuted, setIsMuted] = useState(true);

  const handleMuteToggle = () => {
    setIsMuted(prevState => !prevState);
  };

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&mute=${isMuted ? 1 : 0}&modestbranding=1&showinfo=0&controls=0&disablekb=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
      ></iframe>
      <button className='mx-2 bg-gray-500 text-white text-xl bg-opacity-50 rounded-lg z-60' onClick={() => handleMuteToggle()}>Unmute</button>
    </div>
  );
};

export default VideoBackground;
