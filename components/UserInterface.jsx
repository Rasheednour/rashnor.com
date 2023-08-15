import React from "react";
import ToggleDayNight from "./ToggleDaytime";
import GithubButton from "./GithubButton";
import DropDownMenuButton from "./DropDownMenuButton";
import DropDownMenu from "./DropDownMenu";
import Logo from "./Logo";
import LandingPage from "./LandingPage";
const UserInterface = ({ isDaytime, setIsDaytime, isMenuOpen, setIsMenuOpen, exitLandingPage, setExitLandingPage }) => {
  return (
    <div className="bg-white">
      <ToggleDayNight isDaytime={isDaytime} setIsDaytime={setIsDaytime} />
      <GithubButton/>
      <DropDownMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <DropDownMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Logo/>
      {!exitLandingPage && <LandingPage setExitLandingPage={setExitLandingPage}/>}
    </div>
  );
};

export default UserInterface;
