import React, { useRef } from 'react';
import Button from './Button';

const ButtonList = () => {
  const buttonListRef = useRef(null);

  const scrollLeft = () => {
    console.log('Scrolling left');
    if (buttonListRef.current) {
      buttonListRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    console.log('Scrolling right');
    if (buttonListRef.current) {
      buttonListRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="fixed top-16 ml-50 bg-white shadow-md p-4 overflow-x-auto">
      {/* Left scroll button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full z-10"
      >
        &lt;
      </button>
      <div
        ref={buttonListRef}
        className="flex space-x-5 p-4 overflow-x-auto relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Your buttons here */}
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
        <Button name="CID" />
        <Button name="Modi" />
      </div>
      {/* Right scroll button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonList;
