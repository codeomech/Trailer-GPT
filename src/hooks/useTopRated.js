import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();


  const generateTop = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
   
  };

  useEffect(() => {
    generateTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRated;