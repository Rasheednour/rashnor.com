import React from "react";
import ToggleDayNight from "./ToggleDaytime";
const UserInterface = ({ isDaytime, setIsDaytime }) => {
  return (
    <div>
      <ToggleDayNight isDaytime={isDaytime} setIsDaytime={setIsDaytime} />
    </div>
  );
};

export default UserInterface;
