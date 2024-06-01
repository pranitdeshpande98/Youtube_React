import React, { useRef } from 'react';
import Button from './Button';

const ButtonList = () => {


  return (
    <div className="fixed top-16 ml-50 bg-white shadow-md p-4 overflow-x-auto w-full">
      {/* Left scroll button */}
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
  );
};

export default ButtonList;
