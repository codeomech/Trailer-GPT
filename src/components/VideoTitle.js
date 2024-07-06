import React from 'react'

const VideoTitle = ({title,overview}) => {
    return (
        <div className='absolute top-0 left-0 w-screen aspect-video flex flex-col justify-center items-start p-24 text-white bg-gradient-to-r from-black'>
          <h1 className='text-6xl font-bold'>{title}</h1>
          <p className='py-6 text-lg w-1/4'>{overview}</p>
          <div className='flex'>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-70'>Play</button>
            <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:text-red'>More Info</button>
          </div>
        </div>
      );
}

export default VideoTitle