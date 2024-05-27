import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-64 bg-white h-screen">
      <h1 className="font-bold text-xl mb-4">You</h1>
      <ul className="space-y-2">
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Shorts</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">History</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Liked Videos</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Playlists</li>
      </ul>

      <h1 className="font-bold text-xl mt-6 mb-4">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Music</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Sports</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Gaming</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Movies</li>
      </ul>

      <h1 className="font-bold text-xl mt-6 mb-4">Explore</h1>
      <ul className="space-y-2">
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Trending</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Shopping</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Gaming</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-md">Courses</li>
      </ul>
    </div>
  )
}

export default Sidebar