import React, {useRef, useEffect} from "react";

const MonitorLight = () => {
  
  const lightRef = useRef();
  let lightIntensity = 1;
  
  return (
    <rectAreaLight
      ref={lightRef}
      position={[0, .09, -.30]}
      rotation={[-Math.PI, 0, 0]}
      width={.2}
      height={.2}
      intensity={120}
      color={'green'}
    />
  );
};

export default MonitorLight;
