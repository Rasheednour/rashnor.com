import React from "react";
import ToggleDayNight from "./ToggleDaytime";
import GithubButton from "./GithubButton";
import DropDownMenuButton from "./DropDownMenuButton";
import DropDownMenu from "./DropDownMenu";
const UserInterface = ({ isDaytime, setIsDaytime, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      <ToggleDayNight isDaytime={isDaytime} setIsDaytime={setIsDaytime} />
      <GithubButton/>
      <DropDownMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <DropDownMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      

    </div>
  );
};

export default UserInterface;
