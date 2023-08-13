import React, { useEffect } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
const ScrollPrompt = () => {
  const { gl } = useThree();
  return (
    <Html
      style={{ pointerEvents: "none" }}
      portal={{ current: gl.domElement.parentNode }}
      transform
      scale={0.2}
      position={[0,0,0]}
    >
      <div
        className={
          "scroll-prompt border-solid border-2"
        }
      >
        <p className="text-white text-lg font-mono mt-7 ml-8">Scroll to explore</p>
          <div className="icon-scroll"></div>
      </div>
    </Html>
  );
};

export default ScrollPrompt;
