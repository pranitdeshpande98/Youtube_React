import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="px-5 py-2 text-lg bg-gray-100 m-2 rounded-lg whitespace-nowrap hover:bg-gray-200 focus:outline-none">
      {name}
    </button>
  );
};

export default Button;
