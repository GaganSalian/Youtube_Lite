
const GOOGLE_API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;


export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

// export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API = "http://localhost:5000/api/suggestions?q=";

// live chat is >>> Infinitescroll  >>> PageInitation

 export const OFFSET_LIVE_CHAT=20;

 export const YOUTUBE_SEARCH_RESULTS_API =   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${GOOGLE_API_KEY}&q=`;