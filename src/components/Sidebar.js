import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  const dispatch = useDispatch()

  return (
    <div 
      className={`fixed inset-0 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Sidebar container */}
      <div className='w-64 bg-white h-full shadow-lg p-5 overflow-y-auto relative'>
        {/* Close button */}
        <button 
          className='absolute top-3 right-3 text-xl font-bold'
          onClick={() => dispatch(toggleMenu())}
        >
          ✖
        </button>

        <ul>
          <li><Link to="/">Home</Link> </li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>

        <h1 className='font-bold pt-5'>You</h1>
        <ul>
          <li>History </li>
          <li>Playlists</li>
          <li>Your videos</li>
          <li>Watch Later</li>
          <li>Liked videos</li>
          <li>Downloads</li>
        </ul>

        <h1 className='font-bold pt-5'>Subscription </h1>
        <ul>
          <li>Music </li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
          <li>Trending </li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Courses</li>
          <li>Fashion & beauty</li>
          <li>Podcasts</li>        
        </ul>

        <h1 className='font-bold pt-5'>More from YouTube</h1>
        <ul>
          <li>YouTube Premium </li>
          <li>YouTube Studio</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>             
        </ul>
      </div>

      {/* Overlay background */}
      <div 
        className='absolute inset-0 bg-black opacity-30'
        onClick={() => dispatch(toggleMenu())} // click outside closes sidebar
      ></div>
    </div>
  )
}

export default Sidebar
