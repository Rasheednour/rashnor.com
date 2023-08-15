import React from "react";
import ToggleDayNight from "./ToggleDaytime";
import GithubButton from "./GithubButton";
import DropDownMenuButton from "./DropDownMenuButton";
import DropDownMenu from "./DropDownMenu";
import Logo from "./Logo";
const UserInterface = ({ isDaytime, setIsDaytime, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="bg-white">
      <ToggleDayNight isDaytime={isDaytime} setIsDaytime={setIsDaytime} />
      <GithubButton/>
      <DropDownMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <DropDownMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Logo/>

    </div>
  );
};

export default UserInterface;
