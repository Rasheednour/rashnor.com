"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { OrbitControls } from "@react-three/drei";
const MainCanvas = () => {
  return (
    <Suspense fallback={null}>
      <Canvas onCreated={({ gl }) => {
     window.renderer = gl;}}>
        <World />
        <OrbitControls/>
      </Canvas>
    </Suspense>
  );
};

export default MainCanvas;
