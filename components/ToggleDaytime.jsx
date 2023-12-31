import React, { useState } from "react";

const ToggleDaytime = ({ isDaytime, setIsDaytime }) => {
  const toggleTime = () => {
    setIsDaytime(!isDaytime);
  };
  return (
    <div>
      {!isDaytime ? (
        <img
          src={"images/sun_white.svg"}
          className="fixed z-10 w-10 sm:w-11 md:w-12 right-5 bottom-4 cursor-pointer hover:rotate-12"
          onClick={toggleTime}
        ></img>
      ) : (
        <img
          src={"images/moon_white.svg"}
          className="fixed z-10 w-8 sm:w-9 md:w-11 right-5 bottom-4 cursor-pointer hover:rotate-12"
          onClick={toggleTime}
        ></img>
      )}
    </div>
  );
};

export default ToggleDaytime;
