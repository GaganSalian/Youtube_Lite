// WatchPage.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comentscontainer from './Comentscontainer'; // Assuming this handles the comments
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v"); // Get video ID from URL query param
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu()); // Close any open menu when the page loads
    }, [dispatch]);

    // Handle missing or invalid video ID
    if (!videoId) return <h1 className="text-center text-xl font-bold">Invalid video ID!</h1>;

    return (
        <div className="flex flex-col p-4 w-full">
         
            <div className="mb-4 flex w-full ">
                    <div className='flex w-full' >
                        <iframe
                            width="700"
                            height="500"
                            src={`https://www.youtube.com/embed/${videoId}`} // Embedding YouTube video
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                        <div className='w-full ' >

                             <LiveChat/>
                        </div>
            </div>

           
                    <Comentscontainer videoId={videoId} /> {/* Pass videoId to the comments container */}
               
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
