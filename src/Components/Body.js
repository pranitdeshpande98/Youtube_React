import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64"> {/* Add a left margin to make room for the Sidebar */}
      <Outlet />
      </div>
    </div>
  );
};

export default Body;
