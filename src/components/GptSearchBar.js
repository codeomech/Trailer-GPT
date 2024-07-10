import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
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
   

    const gptquery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me name of five movies ,comma separated like the example result given ahead.Example result: Gadar 2, Don , Jawan, Hi nanna,The batman";

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