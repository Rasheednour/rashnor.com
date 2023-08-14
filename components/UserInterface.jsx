import React from "react";
import ToggleDayNight from "./ToggleDaytime";
import GithubButton from "./GithubButton";
const UserInterface = ({ isDaytime, setIsDaytime }) => {
  return (
    <div>
      <ToggleDayNight isDaytime={isDaytime} setIsDaytime={setIsDaytime} />
      <GithubButton/>
    </div>
  );
};

export default UserInterface;
