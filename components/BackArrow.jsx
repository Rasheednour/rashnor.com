import React, { useState } from "react";

const BackArrow = ({ setCurrentProject, setProjectsTab }) => {
  const [imgSrc, setImgSrc] = useState("images/back_arrow.svg");

  const handleMouseOver = () => setImgSrc("images/back_arrow_checked.svg");

  const handleMouseOut = () => setImgSrc("images/back_arrow.svg");
  const handleClick = () => {
    setCurrentProject("Projects");
    setProjectsTab(true);
  }
  return (
      <img
        src={imgSrc}
        alt="Image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="back-arrow"
        onClick={handleClick}
      />
  );
};

export default BackArrow;
