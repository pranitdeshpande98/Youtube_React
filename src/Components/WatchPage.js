import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { CommentsContainer } from './CommentsContainer';




const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  useEffect(()=>{
    dispatch(closeMenu());
  },[])


  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  
  return (
    <div className={`flex-1 p-4 py-20 transition-all duration-300 ${isSidebarOpen ? 'ml-50' : '-ml-40'}`}>   
      <div>
      <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
      title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    &nbsp;
    <CommentsContainer />
    </div>
  )
}

export default WatchPage