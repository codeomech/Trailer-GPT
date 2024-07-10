import { useSelector } from "react-redux";
import MoviesList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="md:p-2 md:m-3 my-2 rounded-lg bg-black bg-opacity-70">
      {movieNames.map((movieNames, index) => (
        <MoviesList
          key={movieNames}
          title={movieNames}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;