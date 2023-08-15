import React, {useRef, useEffect} from "react";

const MonitorLight = () => {
  
  const lightRef = useRef();
  let lightIntensity = 1;
  useEffect(() => {
    const interval = setInterval(() => {
      if (lightIntensity == 70) {
        lightIntensity = 120;
      } else {
        lightIntensity = 70;
      }
      if (lightRef.current) {
        lightRef.current.intensity = lightIntensity;
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <rectAreaLight
      ref={lightRef}
      position={[0, .09, -.30]}
      rotation={[-Math.PI, 0, 0]}
      width={.2}
      height={.2}
      intensity={lightIntensity}
      color={'green'}
    />
  );
};

export default MonitorLight;
