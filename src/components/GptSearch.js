import { bgImg } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { useSelector } from "react-redux"
import Loaders from "./Trailer/Loaders"


const GptSearch = () => {

  const loading = useSelector((store) => store.gpt.loading);

  return (
    <div>
      <div className="fixed -z-20 ">
        <img
          src={bgImg}
          alt="bg"
          className="bg-gradient-to-t from-black md:h-auto h-screen object-cover"
        />
      </div>
      <div className="absolute  md:w-full md:h-screen bg-black drop-shadow-lg opacity-30 backdrop-blur-2xl -z-10"></div>
      <GptSearchBar/>
      {loading ? (
        <Loaders />
      ): 
      <GptMovieSuggestion/>
    }
    </div>
  )
}

export default GptSearch