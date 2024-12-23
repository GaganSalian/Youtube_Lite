// import React from 'react'
// import Sidebar from './Sidebar'
// import { Outlet } from 'react-router-dom'

// const Body = () => {
//   return (
//     <div className='grid grid-flow-col'>
      
//       <Sidebar/>
      
//       <Outlet/>
//     </div>
//   )
// }

// export default Body


import React from 'react'
import Sidebar from './Sidebar'
import Head from './Head' // Import Head
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      {/* Add Head component at the top */}
    

      <div className='grid grid-flow-col'>
        {/* Sidebar and Outlet */}
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Body
