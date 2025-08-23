import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery && searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else if (searchQuery) {
        getSearchSuggestions();
      } else {
        setSuggestion([]);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestion(json[1] || []);

      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (s) => {
    setSearchQuery(s);
    setShowSuggestion(false);
    navigate(`/results?search_query=${s}`);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${searchQuery}`);
      setShowSuggestion(false);
      
    }
  };

  return (
    <div className='flex flex-col sm:flex-row items-center p-4 shadow-lg relative space-y-2 sm:space-y-0 sm:space-x-4'>
      
      {/* Left: Hamburger + Logo */}
      <div className='flex items-center space-x-2'>
        <img
          onClick={toggleMenuHandler}
          className='h-7 cursor-pointer'
          alt='hamburger-menu'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'
        />
        <img
          className='h-10 sm:h-14'
          alt='youtubelogo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png'
        />
      </div>

      {/* Center: Search Bar */}
      <div className='flex-1 w-full sm:w-auto relative'>
        <div className='flex w-full'>
          <input
            className='flex-1 border border-gray-400 p-2 pl-4 rounded-l-full focus:outline-none'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
          />
          <button
            className='border border-gray-400 p-2 rounded-r-full bg-gray-100'
            onClick={handleSearchSubmit}
          >
            🔍
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestion && suggestion.length > 0 && (
          <div className="absolute top-full left-0 w-full sm:w-[37rem] bg-white p-2 rounded-md shadow-lg border border-gray-100 z-50">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="py-2 px-2 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(s)}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: User Icon */}
      <div>
        <img
          className='h-10 rounded-full'
          alt='user'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s'
        />
      </div>
    </div>
  );
};

export default Head;
