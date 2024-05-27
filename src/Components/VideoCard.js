import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src = {thumbnails.medium.url} />
        <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">{channelTitle}</p>
        <p className="text-sm text-gray-600">{statistics.viewCount} views</p>
      </div>
    
    </div>
  )
}

export default VideoCard