import { useNavigate } from "react-router-dom";
import { mainLogo } from "../../utils/constants"
import {MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { useDispatch } from "react-redux";


const TrailerHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogoClick = () => {
        navigate('/browse');
    };

    const handleBack = () => {
        navigate(-1); // This makes the user go back to the previous route
      };

  return (
    <div className="md:w-full w-screen absolute md:px-10 px-5 py-5 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="md:w-44 w-28 cursor-pointer" src={mainLogo} onClick={handleLogoClick} alt="logo" />
    
    <div className="flex items-center">
    <div className="flex space-x-4 mr-5">
  <button onClick={handleBack} >
    <XMarkIcon className="h-8 w-8 text-gray-400 hover:text-red-600" aria-hidden="true" />
  </button>
    </div>
    </div>
    </div>
  )
}

export default TrailerHeader