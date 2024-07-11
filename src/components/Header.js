import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { mainLogo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

// drop down
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon,LanguageIcon, SpeakerWaveIcon,SpeakerXMarkIcon} from "@heroicons/react/20/solid";
import { useLanguage } from "./LanguageContext";
import { toggleMute } from "../utils/audioSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { toggleLanguage } = useLanguage();


  const handleToggle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.

        navigate("/error");
      });
  };

  // onAuth state change logic
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        //
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  GPT toggle
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  // mute toggle
  const isMuted = useSelector((state) => state.audio.isMuted); 
  const toggleSound= () =>{
    dispatch(toggleMute());
  }

  const handleLogoClick = () => {
    navigate('/browse');
  };

  const gpt = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="md:w-full w-screen absolute md:px-10 px-5 py-5 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="md:w-44 w-28 cursor-pointer" src={mainLogo} onClick={handleLogoClick} alt="logo" />
      {user && (
        <div className="flex items-center">

{!gpt ? <button onClick={toggleSound}>
      {isMuted ? (
        <SpeakerXMarkIcon className="-ml-20 h-5 w-5 text-gray-400" aria-hidden="true" />
      ) : (
        <SpeakerWaveIcon className="-ml-20 h-5 w-5 text-gray-400" aria-hidden="true" />
      )}
    </button> : ""}
        
          <button onClick={toggleLanguage}>
          <LanguageIcon
                  className="-ml-9 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                </button>

          <img
            src={
              user.photoURL
                ? user.photoURL
                : "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            }
            alt="userIcon"
            className="w-8 md:w-11 md:h-11 rounded-md data-dropdown-toggle=dropdownAvatar focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          />
         


          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex mx-2 w-full justify-center gap-x-1.5 rounded-md bg-gray-800 text-white px-1 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-900">
                More
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute -right-2 z-10 mt-2 w-32 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={handleToggle} className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-white",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}>
                      SignOut
                    </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                      onClick={handleGptSearchClick}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-white",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      {gpt ? "Homepage" : "GPT Search"}
                    </button>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/*  */}
        </div>
      )}
    </div>
  );
};

export default Header;