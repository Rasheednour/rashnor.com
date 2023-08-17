import React from "react";
import ToggleDayNight from "./ToggleDaytime";
import GithubButton from "./GithubButton";
import DropDownMenuButton from "./DropDownMenuButton";
import DropDownMenu from "./DropDownMenu";
import Logo from "./Logo";
import LandingPage from "./LandingPage";
const UserInterface = ({ isDaytime, setIsDaytime, isMenuOpen, setIsMenuOpen, exitLandingPage, setExitLandingPage, scroll }) => {
  return (
    <div className="bg-white">
      <ToggleDayNight isDaytime={isDaytime} setIsDaytime={setIsDaytime} />
      <GithubButton/>
      <DropDownMenu isMenuOpen={isMenuOpen} scroll={scroll}/>
      <DropDownMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Logo/>
      {!exitLandingPage && <LandingPage setExitLandingPage={setExitLandingPage}/>}
    </div>
  );
};

export default UserInterface;
