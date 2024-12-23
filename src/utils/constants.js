
const GOOGLE_API_KEY="AIzaSyBAtCCdBV9EU61f__3-cvwGEfeJj4N1uzU";


export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


// live chat is >>> Infinitescroll  >>> PageInitation

 export const OFFSET_LIVE_CHAT=20;