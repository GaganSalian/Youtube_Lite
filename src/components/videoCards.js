import React from 'react'

const VideoCards = ({info}) => {
   
    const {snippet,statistics}=info;
    const {title,thumbnails,channelTitle}=snippet;
  return (
    <div className='p-2 m-2 w-72'>
      <img className='rounded-lg' alt='thumbnails' src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

 export const AdVideoCards=({info})=>{
  return (
    <div className='p-1 m-1 border border-red-900'>
      <VideoCards info={info}/>
    </div>
  )
}

export default VideoCards
