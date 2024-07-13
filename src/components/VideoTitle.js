import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTrailerId } from "../utils/gptSlice";

const VideoTitle = ({title, id,overview}) => {
    const navigate = useNavigate();
    const dispatch =  useDispatch();

    const handleRedirectToWatch = () => {
        dispatch(addTrailerId(id));
        navigate("/watch");
      };

    return (
        <div className="md:pt-[22%] md:px-12 px-5 absolute w-full h-[100%] bg-gradient-to-tr from-black z-10">
            <h1 className="font-bold md:text-4xl text-2xl text-white pt-24">{title}</h1>
            <p className="hidden md:block md:w-3/4 w-full text-justify line-clamp-2 md:text-base text-sm text-white">{overview}</p>
            <div className="flex md:mt-4 mt-2">
                <button className="flex md:font-semibold font-medium items-center md:px-6 px-2 md:py-3 py-2 bg-white rounded-md "  onClick={handleRedirectToWatch}><FaPlay size="1.3rem" className="mx-2"/>Play</button>
                <button className="flex md:font-semibold font-medium items-center md:px-6 px-2 md:py-3 py-2 bg-gray-600 bg-opacity-80 text-white rounded-md ml-3"><FiInfo size="1.3rem" className="mx-2"/>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle