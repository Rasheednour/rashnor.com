import React, { useState } from "react";

const Folder = ({ name, setCurrentProject }) => {
  const [imgSrc, setImgSrc] = useState("images/folder-border.svg");

  const handleMouseOver = () => setImgSrc("images/folder-solid.svg");

  const handleMouseOut = () => setImgSrc("images/folder-border.svg");

  return (
    <div className="folder">
      <img
        src={imgSrc}
        alt="Image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        width={80}
        className="folder-image"
        onClick={()=>{ setCurrentProject(name)}}
        
      />
      <p className="sgt">
        <b>{name}</b>
      </p>
    </div>
  );
};

export default Folder;
