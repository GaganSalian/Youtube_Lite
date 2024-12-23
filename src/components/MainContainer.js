import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-10'>
      <h1 className='font-bold'>MainContainer</h1>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
