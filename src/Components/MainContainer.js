import React from 'react';
import { useSelector } from 'react-redux';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`flex-1 p-4 mt-60 transition-all duration-300 ${isSidebarOpen ? 'ml-50' : '-ml-40'}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
