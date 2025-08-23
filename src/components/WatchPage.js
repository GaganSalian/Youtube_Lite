import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Comentscontainer from './Comentscontainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoId) {
    return (
      <h1 className="text-center text-xl font-bold mt-4">
        Invalid video ID!
      </h1>
    );
  }

  return (
    <div className="flex flex-col w-full px-4 py-3 gap-4">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 w-fit text-sm mb-2"
      >
        ← Back to Home
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Video Section */}
        <div className="flex-1">
          {/* Video Player */}
          <iframe
            className="w-full h-64 sm:h-96 md:h-[500px] rounded-lg shadow"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Video Title & Actions */}
          <div className="mt-3">
            <h1 className="text-lg font-semibold">Video Title Here</h1>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://via.placeholder.com/40"
                  alt="Channel"
                />
                <div>
                  <p className="font-medium">Channel Name</p>
                  <button className="text-sm text-blue-500 hover:underline">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                  👍 Like
                </button>
                <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                  👎 Dislike
                </button>
                <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                  🔗 Share
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Comments</h2>
            <Comentscontainer videoId={videoId} />
          </div>
        </div>

        {/* Sidebar Live Chat */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-2">Live Chat</h2>
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
