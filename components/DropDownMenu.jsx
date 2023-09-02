"use client";
import React, { useState } from "react";
import Link from "next/link";
const DropDownMenu = ({ isMenuOpen, scroll }) => {
  const [isContacts, setIsContacts] = useState(false);
  return (
    <div
      className={` fixed z-10 right-0 h-screen sm:w-1/2 md:w-1/6 flex flex-col justify-top items-center transition-all duration-300 ease-linear transform ${
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      style={{ backgroundColor: "#13083f", border: "1px solid white" }}
    >
      {isContacts && <img className="mt-7 fixed left-6 hover:cursor-pointer" onClick={()=>setIsContacts(false)} src="images/left_arrow.svg" alt="left arrow" width={35}></img>}
      {!isContacts ? (
        <>
          <div
            onClick={() => {
              scroll.el.scrollTop = 0;
            }}
            className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500 ml-12 mt-24 hover:cursor-pointer"
          >
            {" "}
            <b>Home</b>
          </div>
          <div
            onClick={() => {
              scroll.el.scrollTop = 1200;
            }}
            className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500 ml-12 mt-4 hover:cursor-pointer"
          >
            {" "}
            <b>About</b>
          </div>
          <div
            onClick={() => {
              scroll.el.scrollTop = 2400;
            }}
            className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500 ml-12 mt-4 hover:cursor-pointer"
          >
            {" "}
            <b>Skills</b>
          </div>
          <div
            onClick={() => {
              scroll.el.scrollTop = 3768;
            }}
            className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500  ml-12 mt-4 hover:cursor-pointer"
          >
            {" "}
            <b>Projects</b>
          </div>
          <a
            className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500  ml-12 mt-4 hover:cursor-pointer"
            href="https://drive.google.com/file/d/1yP41vwIiO41W0N3DLySMgbdd9-mEpg7S/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <b>My CV</b>
          </a>
          <div
            onClick={() => {
              setIsContacts(true);
            }}
            className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500  ml-12 mt-4 hover:cursor-pointer"
          >
            {" "}
            <b>Contact</b>
          </div>
        </>
      ) : (
        <>
        <a
          className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500  ml-12 mt-24 hover:cursor-pointer"
          href="https://www.linkedin.com/in/rashmed/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <b>Linkedin</b>
        </a>
        <a
          className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500  ml-12 mt-4 hover:cursor-pointer"
          href="https://github.com/Rasheednour"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <b>Github</b>
        </a>
        <a
          className="font-montserrat text-2xl text-white mr-10 hover:text-indigo-500  ml-12 mt-4 hover:cursor-pointer"
          href="mailto:r.noreldaim@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <b>Email</b>
        </a>
        </>
        
      )}
    </div>
  );
};

export default DropDownMenu;
