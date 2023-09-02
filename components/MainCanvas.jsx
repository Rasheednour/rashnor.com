"use client";
import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { World } from "./World";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Stars,
  Sky,
  Environment,
  PresentationControls,
  OrbitControls,
  Html,
} from "@react-three/drei";
import { getProject, val, types } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
  editable as e,
} from "@theatre/r3f";
import * as core from "@theatre/core";
import * as THREE from "three";
import walkthrough from "@public/walkthrough.json";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ScrollPrompt from "./ScrollPrompt";
import MonitorLight from "./MonitorLight";
import { Loader } from "@react-three/drei";
import { Fire } from "./Fire";
// import studio from "@theatre/studio"
// import extension from '@theatre/r3f/dist/extension'
// studio.extend(extension);
// studio.initialize();




const Scene = ({isAtPC, setIsAtPC}) => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const sequenceLength = useRef(val(sheet.sequence.pointer.length));
  useFrame(() => {
    const newPosition = scroll.offset * sequenceLength.current;
    sheet.sequence.position = newPosition;
    if (newPosition > 5.25) {
      if (!isAtPC) {
        setIsAtPC(true);
      }
    } else {
      if (isAtPC) {
        setIsAtPC(false);
      }
    }
  });
};

const AutoScroll = ({setScroll}) => {
  const scroll = useScroll();
  setScroll(scroll);
} 

const MainCanvas = ({isDaytime, setScroll}) => {
  const sheet = getProject("Walkthrough", { state: walkthrough }).sheet(
    "Scene"
  );
  const [isAtPC, setIsAtPC] = useState(false);
  
  return (
    <div className="absolute z-0 w-full h-full">
      <Canvas
        // onCreated={({ gl }) => {
        //   window.renderer = gl;
        // }}
        // gl={{ preserveDrawingBuffer: true }}
        // style={{ touchAction: "none"}}
      >
        <ScrollControls pages={4} damping={0.1}>
          <SheetProvider sheet={sheet}>
            <AutoScroll setScroll={setScroll}/>
            <spotLight
              position={[0, 2, 0]}
              distance={10}
              intensity={isDaytime?0:12}
              angle={0.65}
              color="white"
              penumbra={1.9}
            />
            <directionalLight
              name="skylight"
              intensity={isDaytime?0:2.5}
              decay={3}
              color="#6f8fff"
              position={[0.095, 9.303, 0.144]}
              rotation={[-1.303, 0.278, 2.143]}
              castShadow
            ></directionalLight>
            <Sky
              distance={1000}
              sunPosition={isDaytime?[2, 1, 4]:[0,0,0]}
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
            
            {isDaytime?<Environment preset="dawn" />: <Environment files={"images/ice_lake.hdr"} rotation-z={Math.PI /2}/>}
            <Fire/>
            <World isAtPC={isAtPC}/>
            <MonitorLight/>
            
            <PerspectiveCamera
              theatreKey="Camera"
              makeDefault
              position={[0, 0, 0]}
              fov={30}
              near={0.1}
              far={300}
            />
            <e.mesh
              theatreKey="scroll-prompt"
              visible
              position={[-0.85, 0.8, -0.85]}
              rotation={[0, Math.PI / 4, 0]}
            >
              <ScrollPrompt />
              <boxGeometry args={[1.5, 0.66, 0.01]} />
              <meshStandardMaterial color="red" transparent opacity={0} />
            </e.mesh>
            <e.mesh
              theatreKey="about"
              visible
              position={[0, 1, 0]}
              rotation={[0, Math.PI / 4, 0]}
            >
              <boxGeometry args={[2.3, 0.66, 0.01]} />
              <meshStandardMaterial color="red" transparent opacity={0} />
              <AboutMe />
            </e.mesh>
            <e.mesh
              theatreKey="skills"
              visible
              position={[0.1, 0.8, 0]}
              rotation={[0, 0, 0]}
            >
              <boxGeometry args={[2.1, 0.66, 0.01]} />
              <meshStandardMaterial color="green" transparent opacity={0} />
              <Skills />
            </e.mesh>
            <Scene isAtPC={isAtPC} setIsAtPC={setIsAtPC}/>
            
          </SheetProvider>
        </ScrollControls>
       
      </Canvas>
    </div>
  );
};

export default MainCanvas;
