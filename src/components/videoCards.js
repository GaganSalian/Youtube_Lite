import React from 'react';

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2 w-full sm:w-72 flex-shrink-0">
      <img
        className="rounded-lg w-full h-40 sm:h-44 object-cover"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul className="mt-2">
        <li className="font-bold text-sm sm:text-base line-clamp-2">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        {statistics?.viewCount && (
          <li className="text-gray-500 text-sm">
            {Number(statistics.viewCount).toLocaleString()} views
          </li>
        )}
      </ul>
    </div>
  );
};

export const AdVideoCards = ({ info }) => {
  // Just render like normal VideoCard
  return(<div className='p1 m-1 border border-black'>
      <VideoCards info={info} />
  </div>) 
};

export default VideoCards;
