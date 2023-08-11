"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { OrbitControls , Stars, Sky, Environment} from "@react-three/drei";
const MainCanvas = () => {
  return (
    <Suspense fallback={null}>
      <Canvas onCreated={({ gl }) => {
     window.renderer = gl;}}>
      <spotLight
            position={[0, 2, 0]}
            distance={10}
            intensity={12}
            angle={0.65}
            color="white"
            penumbra={1.9}
          />
          <directionalLight
            name="skylight"
            intensity={2.5}
            decay={3}
            color="#6f8fff"
            position={[0.095, 9.303, 0.144]}
            rotation={[-1.303, 0.278, 2.143]}
            castShadow
          ></directionalLight>
          <Sky
              distance={1000}
              sunPosition={[0,0,0]}
              inclination={0}
              azimuth={0.25}
            />
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={1}
              fade
              speed={1}
            />
            <Environment preset="dawn" />
       
        <World />
        <OrbitControls/>
      </Canvas>
    </Suspense>
  );
};

export default MainCanvas;
