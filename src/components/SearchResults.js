import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search_query');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) fetchSearchResults();
  }, [query]);

  const fetchSearchResults = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
      const json = await data.json();
      setResults(json.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Search Results for "{query}"</h2>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
        >
          ← Back
        </button>
      </div>
       <ButtonList />
      <VideoContainer searchResults={results} />
    </div>
  );
};

export default SearchResults;
