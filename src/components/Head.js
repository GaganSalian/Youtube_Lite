import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import {cacheResults} from "../utils/searchSlice";
// import { useNavigate } from 'react-router-dom';


const Head = () => {
const [searchQuery,setSearchQuery]=useState("");
const [suggestion,setSuggestion]=useState([]);
const [showSuggestion,setShowSuggestion]=useState(false);

const searchCache=useSelector((store)=> store.search)
const dispatch=useDispatch();
// const navigate=useNavigate();


useEffect(()=>{
  const timer=  setTimeout(()=>{
  if(searchCache[searchQuery]){
    setSuggestion(searchCache[searchQuery]);
  }else{
    getSearchSuggestions()
  }
 },200);

return ()=>{
  clearTimeout(timer);}
},[searchQuery])

const getSearchSuggestions=async()=>{
  const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json=await data.json();
  // console.log(json[1])
  setSuggestion(json[1]);

dispatch(
  cacheResults({
     [searchQuery]:json[1],
})
)
}
  const toggleMenuHandler=()=>{
dispatch(toggleMenu())
  };

// const handleSuggestionClick=(suggestionText)=>{
//   setSearchQuery(suggestionText);
//   setShowSuggestion(false);
//   navigate(`/search?q=${suggestionText}`)
// }


  return (
    <div className='grid grid-flow-col p-4 m-4 shadow-lg '>
        <div className='flex col-span-1 item-center' >
          <img 
          onClick={()=>toggleMenuHandler()}
          className='h-7 cursor-pointer' alt='hamberer-menu'src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'/>
        <img className='h-14  pl-7 pb-6 items-center' alt='youtubeloo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
        </div>
        <div className='col-span-10'>
        <div>
          <input className='w-8/12 border border-gray-400 p-1 pl-4 rounded-l-full' type='text'
           value={searchQuery}
           onChange={(e)=>setSearchQuery(e.target.value)}
           onFocus={()=>setShowSuggestion(true)}
           onBlur={()=>setShowSuggestion(false)}

           />
          <button className='border border-gray-400 p-1 rounded-r-full bg-gray-100'>
          🔍
          </button>
        </div>
        {showSuggestion &&(
          <div className="absolute bg-white p-2 w-[37rem]  rounded-md shadow-lg border border-gray-100">
        <ul>
        {suggestion.map((s)=>(
          <li
           key={s}
             className="py-2 shadow-sm hover:bg-gray-100 cursor-pointer"
            //  onMouseDown={()=>handleSuggestionClick(s)}
             >
              🔍{s}
              </li>))}
           </ul>
           </div>
           )}
        </div>
        <div className='col-span-1'>
          <img className='h-10' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s'/>
        </div>

    </div>
  )
}

export default Head


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleMenu } from '../utils/appSlice';
// import { cacheResults } from '../utils/searchSlice';
// import { useNavigate } from 'react-router-dom';
// import SearchSuggestionResults from './SearchSuggestionResults';  // Updated import

// const GOOGLE_API_KEY = "AIzaSyBAtCCdBV9EU61f__3-cvwGEfeJj4N1uzU";  // Ensure this is correct

// export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

// const Head = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showSuggestion, setShowSuggestion] = useState(false);

//   const searchCache = useSelector((store) => store.search);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Fetch search suggestions
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         // If cached suggestions exist, use them
//         setSuggestions(searchCache[searchQuery]);
//       } else if (searchQuery) {
//         getSearchSuggestions();
//       }
//     }, 300);  // Adjusted timeout to handle typing delay

//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   const getSearchSuggestions = async () => {
//     try {
//       const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//       const json = await response.json();

//       const videoSuggestions = json[1] || [];
//       setSuggestions(videoSuggestions);

//       // Cache results for further use
//       dispatch(cacheResults({ [searchQuery]: videoSuggestions }));
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion);
//     setShowSuggestion(false);
//     // Navigate to the search results page with the suggestion
//     navigate(`/search?q=${suggestion}`);
//   };

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };

//   return (
//     <div className="grid grid-flow-col p-4 m-4 shadow-lg">
//       <div className="flex col-span-1 item-center">
//         <img
//           onClick={() => toggleMenuHandler()}
//           className="h-7 cursor-pointer"
//           alt="hamburger-menu"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
//         />
//         <img
//           className="h-14 pl-7 pb-6 items-center"
//           alt="youtubelogo"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
//         />
//       </div>
//       <div className="col-span-10 relative">
//         <div>
//           <input
//             className="w-8/12 border border-gray-400 p-1 pl-4 rounded-l-full"
//             type="text"
//             value={searchQuery}
//             onChange={handleInputChange}
//             onFocus={() => setShowSuggestion(true)}
//             onBlur={() => setShowSuggestion(false)}
//             placeholder="Search"
//           />
//           <button className="border border-gray-400 p-1 rounded-r-full bg-gray-100">
//             🔍
//           </button>
//         </div>
//         {showSuggestion && suggestions.length > 0 && (
//           <SearchSuggestionResults 
//             suggestions={suggestions} 
//             handleSuggestionClick={handleSuggestionClick} 
//           />
//         )}
//       </div>
//       <div className="col-span-1">
//         <img
//           className="h-10"
//           alt="user"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;

