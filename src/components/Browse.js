import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import useSeriesTrending from '../hooks/useSeriesTrending'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useSeriesTrending();
  return (
    <div className='overflow-x-hidden'>
      <Header></Header>
      {
        showGptSearch? (<GptSearch></GptSearch>) :(
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
      </div>
  )
}

export default Browse