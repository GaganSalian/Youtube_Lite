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
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  if (videos.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 max-w-[1440px] mx-auto">
      {videos.map((video) => (
        <Link
          key={video.id.videoId || video.id}
          to={`/watch?v=${video.id.videoId || video.id}`}
          className="flex justify-center"
        >
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
