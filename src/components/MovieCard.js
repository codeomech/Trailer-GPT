import { useDispatch } from "react-redux";
import { cardImgURL } from "../utils/constants"
import { useNavigate } from "react-router-dom";
import { addTrailerId, setLoading } from "../utils/gptSlice";


const MovieCard = ({posterPath, id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handlePosterClick =()=>{
    dispatch(addTrailerId(id));
    dispatch(setLoading(true));
    navigate("/watch");
  }
  
  if(!posterPath) return null;
  return (
    <div className="md:w-56 w-28 mx-2 hover:scale-95 transition-all duration-100">
        <img onClick={handlePosterClick} src={cardImgURL+posterPath} className="w-full h-full object-cover rounded-lg cursor-pointer"  alt="card-img" />
    </div>
  )
}

export default MovieCard