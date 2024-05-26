import React from 'react'

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-64 bg-white h-screen">
      <h1 className="font-bold text-2xl mb-4">You</h1>
      <ul className="space-y-2">
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Shorts</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">History</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Liked Videos</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Playlists</li>
      </ul>

      <h1 className="font-bold text-2xl mt-6 mb-4">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Music</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Sports</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Gaming</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Movies</li>
      </ul>

      <h1 className="font-bold text-2xl mt-6 mb-4">Explore</h1>
      <ul className="space-y-2">
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Trending</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Shopping</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Gaming</li>
        <li className="text-gray-700 hover:text-black hover:bg-gray-200 rounded-md p-2 text-lg">Courses</li>
      </ul>
    </div>
  )
}

export default Sidebar