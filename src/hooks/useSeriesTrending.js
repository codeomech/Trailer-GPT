import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addSeriesTop } from "../utils/movieSlice";

const useSeriesTrending = () => {
    
    const dispatch = useDispatch();


    const generateSeries =async()=>{
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`,
        API_OPTIONS
      );


      const json = await data.json();
      dispatch(addSeriesTop(json.results)); 
    
    }
  
    useEffect(()=>{
       generateSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useSeriesTrending;