import { useDispatch} from "react-redux";
import { API_OPTIONS} from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    const fetchNowPlaying = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS
      );
      const jsondata = await data.json();
      dispatch(addNowPlayingMovies(jsondata.results));
    };
  
    useEffect(() => {
      if (!movies) fetchNowPlaying();
    }, []);
  };

  export default useNowPlayingMovies;