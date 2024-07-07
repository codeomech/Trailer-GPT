import { cardImgURL } from "../utils/constants"


const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="md:w-56 w-28 mx-2 hover:scale-95 transition-all duration-100">
        <img src={cardImgURL+posterPath} className="w-full h-full object-cover rounded-lg cursor-pointer"  alt="card-img" />
    </div>
  )
}

export default MovieCard