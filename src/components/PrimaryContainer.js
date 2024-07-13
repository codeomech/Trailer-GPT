import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const PrimaryContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies)
    if(!movies) return;

    const mainMovie = movies[0];
    
    const {original_title, overview,id} = mainMovie;
    return (
      <div className="w-screen xl:h-screen overflow-y-hidden hide-scrollbar">
        <VideoTitle title={original_title} overview={overview} id={id} />
        <VideoBackground movieId={id}/>
      </div>
    )
}

export default PrimaryContainer;