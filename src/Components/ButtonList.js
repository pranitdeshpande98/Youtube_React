import React, { useRef } from 'react';
import Button from './Button';

const ButtonList = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="p-4 overflow-x-auto">
      <div className="flex py-2 space-x-5" ref={scrollRef} style={{ minWidth: '100%' }}>
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
      </div>
    </div>
  );
};

export default ButtonList;
