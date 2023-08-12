import React, { useEffect } from "react";
const ScrollPrompt = ({ hidePrompt }) => {
 
  return (
    <div
      className={`absolute z-10 ml-[50%] mt-[13%] w-56 h-32 flex flex-row transform translate-x-[-50%] transition-opacity duration-300 ${
        !hidePrompt ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <p className="text-white text-lg font-mono absolute mt-[17%]">
        Scroll to explore
      </p>
      <div className="icon-scroll"></div>
    </div>
  );
};

export default ScrollPrompt;
