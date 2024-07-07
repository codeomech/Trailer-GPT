import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
  movies.nowPlayingMovies&&(
    <div className="absolute w-[100%] bg-black md:bg-opacity-100  scrollbar-hide z-30 ">
      <div className="md:-mt-40">
        
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
      <MovieList title={"Series Trending"} movies={movies?.seriesTop} />
      <MovieList title={"Top Rated Movies"} movies={movies?.topRated} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
    </div>
  ));
};

export default SecondaryContainer;