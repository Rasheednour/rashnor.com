import React, { useState, useEffect } from "react";
import "@styles/globals.css";

const TypewriterText = ({ text }) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = 0;
    const timerId = setInterval(() => {
      if (i < text.length) {
        setCurrentText((prev) => prev + text.charAt(i));
        i++;
      } else {
        setCurrentText("*");
        i = 0;
      }
    }, 600); // adjust the timing here

    return () => clearInterval(timerId);
  }, [text]);

  return <p className="typewriter">{currentText}</p>;
};

export default TypewriterText
