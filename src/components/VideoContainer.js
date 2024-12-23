// import React,{useEffect, useState} from 'react'
// import { YOUTUBE_VIDEOS_API } from '../utils/constants';
// import VideoCards,{AdVideoCards} from './videoCards';
// import { Link } from 'react-router-dom';

// const VideoContainer = () => {
//   const [videos,setVideos]=useState([])
//   useEffect(()=>{
// getVideos();
//   },[])

//   const getVideos=async()=>{
//     const data=await fetch(YOUTUBE_VIDEOS_API);
//     const json=await data.json();
    
//     setVideos(json.items)
//   }
//   return (
//     <div className='flex flex-wrap'>
//    {videos[0]&& <AdVideoCards info={videos[0]}/>}
//   {videos.map((video)=>(
//     <Link key={video.id} to={"/watch?v="+video.id}><VideoCards  info={video}/></Link>))}
   
      
//     </div>
//   )
// }

// export default VideoContainer



import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards, { AdVideoCards } from './videoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCards info={videos[0]} />}
      {videos.map((video) => (
        <Link
          key={video.id.videoId || video.id} // Support both ID formats
          to={`/watch?v=${video.id.videoId || video.id}`}
        >
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
