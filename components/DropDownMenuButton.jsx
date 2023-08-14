import React, { useState } from "react";
import "@styles/globals.css";

const DropDownMenuButton = ({isMenuOpen, setIsMenuOpen}) => {
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  };
  return (
    <div id="nav-icon" className={isMenuOpen ? "open" : ""} onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default DropDownMenuButton;
