import React, { useRef } from 'react';
import Button from './Button';

const ButtonList = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 200; // Adjust this value as needed
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 200; // Adjust this value as needed
  };

  return (
    <div className="relative">
      <button className="fixed top-0 left-0 w-ful transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="flex space-x-5 p-4 overflow-x-auto" ref={containerRef}>
        <Button name="All" />
        <Button name="Songs" />
        <Button name="Gaming" />
        <Button name="Trending" />
        <Button name="News" />
        <Button name="Live" />
        <Button name="Trucks" />
        <Button name="Buses" />
        <Button name="Election" />
        <Button name="Watched" />
        <Button name="SAB" />
        <Button name="SAB" />

      </div>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default ButtonList;
