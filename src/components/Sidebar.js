import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
// early return
  if(!isMenuOpen)return null;
  return (
    <div className='p-5  shadow-lg col-span-2'>
    <ul className=''>
     <li><Link to="/">Home</Link> </li>
        <li>Shorts</li>
        <li>Subscription</li>
        </ul> 
      <h1 className='font-bold'>You</h1>
      <ul>
        <li>History </li>
        <li>playlists</li>
        <li>Your videos</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Downloads</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription </h1>
      <ul>
        <li>Music </li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li></li>
      </ul>
      <h1 className='font-bold  pt-5'>Explore</h1>
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
      <h1 className='font-bold  pt-5'>More from YouTube</h1>
      <ul>
        <li>YouTube Premium </li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>             
      </ul>
    </div>
  )
}

export default Sidebar
