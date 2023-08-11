"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { World } from "./World";
const MainCanvas = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <World />
      </Canvas>
    </Suspense>
  );
};

export default MainCanvas;
