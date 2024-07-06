import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './mainContainer'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
      Main Container
      - trailer
      - video title
      Secondary Container
      - movie list 
      - card
      */}
      
      </div>
  )
}

export default Browse