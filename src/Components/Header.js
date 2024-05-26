import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 mt-1'>
        <img className='h-14 w-12 object-cover' alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' />
        <img className='h-14 w-18 mx-2 object-cover' alt='youtube' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fsMXGc-ZXP37qszL-e9khRmE7PQV3QUafkj6JftMcA&s' />
      </div>

      <div className='col-span-10 text-center px-95 py-3 h-14'>
      <input 
      className='w-1/2 border border-gray-400 rounded-l-full p-2 placeholder-gray-500 placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
      placeholder='Search' 
      type='text'
    />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full'> 🔍 </button>
      </div>

      <div className='col-span-1'>
        <img className='h-12 mt-1'  alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
      </div>
    </div>
  )
}

export default Header