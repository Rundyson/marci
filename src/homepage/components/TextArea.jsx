import React from "react";


const TextArea = ({ placeholder = "Type here...", value, onChange }) => {
  return (
    <input
      type="text"
      className="text-white w-full max-w-xs p-2 rounded-lg border border-white bg-transparent hover:backdrop-blur-md focus:backdrop-blur-md focus:ring-1 focus:ring-white focus:outline-none transition placeholder-gray-400"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
