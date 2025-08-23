import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import SearchResults from './SearchResults';
import { useLocation } from 'react-router-dom';

const MainContainer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

  return (
    <div className="col-span-10">
      {!query ? (
        <>
          <ButtonList />
          <VideoContainer /> 
        </>
      ) : (
        
        <SearchResults query={query} /> 
      )}
    </div>
  );
};

export default MainContainer;
