import { bgImg } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
// import GptMovieSuggestion from "./GptMovieSuggestion"


const GptSearch = () => {
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
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch