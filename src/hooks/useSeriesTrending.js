import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addSeriesTop } from "../utils/movieSlice";

const useSeriesTrending = () => {
 
    const dispatch = useDispatch();


    const generateSeries =async()=>{
      const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addSeriesTop(json.results)); 
    
    }
  
    useEffect(()=>{
       generateSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useSeriesTrending;