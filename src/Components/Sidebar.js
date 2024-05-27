import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-64 bg-white h-full overflow-y-auto rounded-lg" style={{ overflowY: 'auto' }}>
      <style>
        {`
          .sidebar-scrollbar::-webkit-scrollbar {
            width: 8px;
          }

          .sidebar-scrollbar::-webkit-scrollbar-thumb {
            background-color: #a0aec0;
            border-radius: 4px;
          }

          .sidebar-scrollbar::-webkit-scrollbar-track {
            background-color: #edf2f7;
          }
        `}
      </style>
      <div className="sidebar-scrollbar">
        <h1 className="font-bold text-xl mb-4 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">You</h1>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Shorts</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">History</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Liked Videos</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Playlists</li>
        </ul>

        <h1 className="font-bold text-xl mb-4 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Subscriptions</h1>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Music</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Sports</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Gaming</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Movies</li>
        </ul>

        <h1 className="font-bold text-xl mb-4 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Explore</h1>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Trending</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Shopping</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Gaming</li>
          <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Courses</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
