import React from 'react';
import { useEffect } from 'react';
import avatar from '../avatar.png'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {auth,} from '../utils/firebase'
import { signOut,onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';

function Header() {

  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const user = useSelector((state) => state.user);

  const handleGptSearchClick =()=>{
    dispatch (toggleGptSearchView());
  }
  
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email: email, displayName: displayName}))
        navigate("/browse");

      } else {
       dispatch(removeUser());
       navigate("/")
      }
    });

    // Unsubscribe when component unMounts 
    return () => unSubscribe();
  },[])

 const handleSignout = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='absolute w-screen top-0 left-0 z-40  flex justify-between items-center'>
      <a href="/">
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo' />
      </a>
      <button className='py-2 px-4 my-2 bg-black text-white rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
      {user && (
        <img className='w-8 h-10 mr-3.5 cursor-pointer' onClick={handleSignout} src={avatar} alt='avatar' />
      )}
    </div>
  );
}

export default Header;
