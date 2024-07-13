import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useLanguage } from "./LanguageContext";
import { langConst } from "../utils/langConstant";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { langKey} = useLanguage();
  return (
  movies.nowPlayingMovies&&(
    <div className="absolute w-[100%] bg-black md:bg-opacity-100  scrollbar-hide z-30 hide-scrollbar">
      <div>
        
      <MovieList title={langConst[langKey].nowPlaying} movies={movies?.nowPlayingMovies} />
      </div>
      <MovieList title={langConst[langKey].seriesTrend} movies={movies?.seriesTop} />
      <MovieList title={langConst[langKey].topRated} movies={movies?.topRated} />
      <MovieList title={langConst[langKey].popular} movies={movies?.popularMovies} />
    </div>
  ));
};

export default SecondaryContainer;