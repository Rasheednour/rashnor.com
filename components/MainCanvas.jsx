"use client";
import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { World } from "./World";
import {
  ScrollControls,
  useScroll,
  Stars,
  Sky,
  Environment,
  PresentationControls,
  OrbitControls
} from "@react-three/drei";
import { getProject, val, types } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import * as core from '@theatre/core'

import walkthrough from '@public/walkthrough.json'

// import studio from "@theatre/studio"
// import extension from '@theatre/r3f/dist/extension'
// studio.extend(extension);
// studio.initialize();

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });
};

const MainCanvas = () => {
  const sheet = getProject("Walkthrough", {state:walkthrough}).sheet("Scene");
  

  return (
    <Suspense>
      <Canvas
        onCreated={({ gl }) => {
          window.renderer = gl;
        }}
        gl={{ preserveDrawingBuffer: true }}
        
      >
        <ScrollControls pages={4} damping={.1}>
      
          <SheetProvider sheet={sheet}>
            <Scene />
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
              sunPosition={[0, 0, 0]}
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
            <PerspectiveCamera
              theatreKey="Camera"
              makeDefault
              position={[0, 0, 0]}
              fov={60}
              near={0.1}
              far={70}
            />
          </SheetProvider>

          
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
};

export default MainCanvas;
