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
  const navigate = useNavigate(); // navigate hook

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoId)
    return (
      <h1 className="text-center text-xl font-bold mt-4">
        Invalid video ID!
      </h1>
    );

  return (
    <div className="flex flex-col w-full p-2 gap-4">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 w-fit text-sm"
      >
        ← Back to Main
      </button>

      {/* Video + LiveChat */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex-1 w-full">
          <iframe
            className="w-full h-64 sm:h-96 md:h-[500px] rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full lg:w-80 flex-shrink-0">
          <LiveChat />
        </div>
      </div>

      {/* Comments */}
      <div className="w-full">
        <Comentscontainer videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;





// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { closeMenu } from '../utils/appSlice';
// import { useSearchParams } from 'react-router-dom';
// import Comentscontainer from './Comentscontainer'; // Assuming this handles the comments

// const WatchPage = () => {
//     const [searchParams] = useSearchParams();
//     const videoId = searchParams.get("v"); // Get video ID from URL parameters
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(closeMenu()); // Close any open menu when the page loads
//     }, [dispatch]);

//     // Handle missing or invalid video ID
//     if (!videoId) return <h1 className="text-center text-xl font-bold">Invalid video ID!</h1>;

//     return (
//         <div className="flex flex-col p-4 overflow-y-auto h-screen">
//             {/* Video player */}
//             <div className="mb-4">
//                 <iframe
//                     width="100%"
//                     height="500"
//                     src={`https://www.youtube.com/embed/${videoId}`} // Embedding YouTube video
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                 ></iframe>
//             </div>

//             {/* Comments section */}
//             <div className="mt-4">
//                 <Comentscontainer videoId={videoId} /> {/* Pass videoId to the comments container */}
//             </div>
//         </div>
//     );
// };

// export default WatchPage;
