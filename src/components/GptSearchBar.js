import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies, setLoading } from "../utils/gptSlice";
import genAI from "../utils/openAI";
import { langConst } from "../utils/langConstant";
import { useLanguage } from "./LanguageContext";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const { langKey} = useLanguage();
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  // TMDB movie search api
  const searchTMDBMovie = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    return json.results;
  }

  const handleGPTSearchClick = async () => {
   
    dispatch(setLoading(true));
    const gptquery =
      "Act as a movie recommendation system and suggest some movies for the query Find five films based on" +
      searchText.current.value + ".List only the film names, separated by commas. Provide exactly five names and nothing else"
;

    const gptResults = await model.generateContent(gptquery);
    const response = await gptResults.response;
    const text = response.text();

    if (!text)
      return (
        <div className="w-1/2 bg-slate-900 text-white text-2xl p-4">
          Hey peep, looks like the Gemini AI api limit is exceeded try after some time
        </div>
      );
    
    const gptMovies = text.split(",");


    const promiseArray =  gptMovies.map((movie)=>searchTMDBMovie(movie));
    
    const tmdbResults = await Promise.all(promiseArray);
    
    dispatch(addGptMovies({movieNames:gptMovies,movieResults:tmdbResults}));
    dispatch(setLoading(false));
  };

  return (
    <div className="md:pt-[10%] pt-[23%] flex justify-center">
      <form
        className="md:w-1/2 w-[90%] bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 p-2 md:m-4 m-2"
          type="text"
          placeholder= {langConst[langKey].placeholder}
        />
        <button
          className="col-span-3 md:py-2 md:px-4 px-2 bg-red-700 md:m-4 m-2 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {langConst[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;