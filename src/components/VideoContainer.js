import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards, { AdVideoCards } from './videoCards';
import { Link } from 'react-router-dom';

const VideoContainer = ({ searchResults }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!searchResults) {
      getVideos(); // Fetch homepage videos only if searchResults is not passed
    }
  }, [searchResults]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Use search results if provided, otherwise homepage videos
  const finalVideos = searchResults || videos;

  if (finalVideos.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 max-w-[1440px] mx-auto">
      {finalVideos[0] && !searchResults && <AdVideoCards info={finalVideos[0]} />}
      
      {finalVideos.map((video) => (
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
