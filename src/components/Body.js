import React from 'react'
import Sidebar from './Sidebar'
import Head from './Head'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar /> {/* slides over content on mobile */}
      <div className='flex-1'>
        <Head />      {/* header spans full width */}
        <Outlet />    {/* main content */}
      </div>
    </div>
  )
}

export default Body
