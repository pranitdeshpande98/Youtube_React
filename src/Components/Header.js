import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import {YOUTUBE_SEARCH_API} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(()=>{
    const timer = setTimeout(()=>getSearchSuggestions(),200);
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery]);

  const getSearchSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json = await data.json();
    
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-5 shadow-lg bg-white">
      <div className="flex items-center">
        <img 
          onClick={toggleMenuHandler}
          className="h-10 w-10 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/" className="ml-3">
          <img
            className="h-10"
            alt="youtube"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fsMXGc-ZXP37qszL-e9khRmE7PQV3QUafkj6JftMcA&s"
          />
        </a>
      </div>
      <div className="flex items-center w-1/2">
        <input
          className="w-full border border-gray-400 rounded-l-full p-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
          type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="flex items-center">
        <img
          className="h-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
