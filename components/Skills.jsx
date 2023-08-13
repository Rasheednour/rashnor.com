import React from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Skills = () => {
  
  const {gl} = useThree()
  return (
    <Html
      style={{ pointerEvents: "none" }}
      portal={{ current: gl.domElement.parentNode }}
      position={[-1.185, 0.3, 0]}
      transform
      center
      scale={0.14}
    >
    <div
      className="absolute z-10 flex row-auto"
      style={{
        width: "650px",
        height: "180px",
      }}
    >
      <div className="about-me">
        <p className="text-white font-montserrat pl-3 pt-3 p-3 " style={{lineHeight: "30px"}}>
          <b>Languages:</b> TS/JS, Python, C++, C, HTML/CSS, SQL.<br></br>
          <b>Frontend:</b> Next.js/React.js.<br></br>
          <b>Backend:</b> Node.js/Express.js, Next.js/Next Auth, Flask.<br></br>
          <b>Databases:</b> PostgreSQL, MongoDB/Mongoose, Firebase.<br></br>
          <b>Tools:</b> GCP, Docker, CI/CD (Github Actions), TDD.
        </p>
      </div>
      <div className="profile">
        <div className="skills-pic">
            <img src="images/code-symbol.svg" width={60}></img>
        </div>
        <p className="font-montserrat text-white text-xl mt-3">
          <b>Skills</b>
        </p>
      </div>
    </div>
    </Html>
  );
};

export default Skills;
