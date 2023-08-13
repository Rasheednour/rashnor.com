/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/fire.glb 
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Sparkles } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

function WhiteFlame({ nodes }) {
  const meshRef = useRef();
  const repeatX = 1;
  const repeatY = 1;
  let textureFiles = [];
  for (let i = 1; i < 151; i++) {
    textureFiles.push("textures/white_flame/(" + i.toString() + ").png");
  }
  const textures = useLoader(THREE.TextureLoader, textureFiles);
  textures.forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);
  });
  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i >= 150) {
        i = 0;
      }
      if (meshRef.current){
        meshRef.current.material.emissiveMap = textures[i];
        meshRef.current.material.alphaMap = textures[i];
        meshRef.current.material.needsUpdate = true;
      }
      i++;
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <mesh
      ref={meshRef}
      name="Flame002"
      geometry={nodes.Flame002.geometry}
      position={[-1.146, -0.552, 1.365]}
      rotation={[0.244, 0, 0]}
      scale={0.699}
    >
      <meshStandardMaterial
        emissive={"white"}
        emissiveMap={textures[0]}
        emissiveIntensity={10}
        alphaMap={textures[0]}
        transparent
      />
      <Sparkles
        count={100}
        speed={.5}
        size={1}
        scale={1}
        noise={4}
        color={"orange"}
      />
    </mesh>
  );
}

function YellowFlame({ nodes }) {
  const meshRef = useRef();
  const repeatX = 1;
  const repeatY = 1;
  let textureFiles = [];
  for (let i = 1; i < 151; i++) {
    textureFiles.push("textures/yellow_flame/(" + i.toString() + ").png");
  }
  const textures = useLoader(THREE.TextureLoader, textureFiles);
  textures.forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);
  });
  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i >= 150) {
        i = 0;
      }
      if (meshRef.current){
        meshRef.current.material.emissiveMap = textures[i];
        meshRef.current.material.alphaMap = textures[i];
        meshRef.current.material.needsUpdate = true;
      }
      i++;
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <mesh
      ref={meshRef}
      name="Flame001"
      geometry={nodes.Flame001.geometry}
      position={[-1.167, -0.673, 1.38]}
      rotation={[0.244, 0, 0]}
      scale={0.544}
    >
      <meshStandardMaterial
        emissive={"orange"}
        emissiveMap={textures[0]}
        emissiveIntensity={10}
        alphaMap={textures[0]}
        transparent
      />
    </mesh>
  );
}

function RedFlame({ nodes }) {
  const meshRef = useRef();
  const repeatX = 1;
  const repeatY = 1;
  let textureFiles = [];
  for (let i = 1; i < 151; i++) {
    textureFiles.push("textures/red_flame/(" + i.toString() + ").png");
  }
  const textures = useLoader(THREE.TextureLoader, textureFiles);
  textures.forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);
  });
  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i >= 150) {
        i = 0;
      }
      if (meshRef.current){
        meshRef.current.material.emissiveMap = textures[i];
        meshRef.current.material.alphaMap = textures[i];
        meshRef.current.material.needsUpdate = true;
      }
      
      i++;
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <mesh
      ref={meshRef}
      name="Flame"
      geometry={nodes.Flame.geometry}
      position={[-1.174, -0.623, 1.38]}
      scale={0.413}
    >
      <meshStandardMaterial
        emissive={"blue"}
        emissiveMap={textures[0]}
        emissiveIntensity={50}
        alphaMap={textures[0]}
        transparent
      />
    </mesh>
  );
}

export function Fire(props) {
  const group = useRef();
  const lightRef = useRef();
  const { nodes, materials } = useGLTF("/3d/fire.glb");
  let lightIntensity = 1;
  useEffect(() => {
    const interval = setInterval(() => {
      if (lightIntensity == 1) {
        lightIntensity = 1.1;
      } else {
        lightIntensity = 1;
      }
      if (lightRef.current) {
        lightRef.current.intensity = lightIntensity;
      }
    }, 120);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <pointLight
          ref={lightRef}
          name="bonfire_light"
          intensity={lightIntensity}
          decay={2}
          color="#ff7c2f"
          position={[-1.164, -0.584, 1.373]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          castShadow
        />
        <RedFlame nodes={nodes} />
        <YellowFlame nodes={nodes} />
        <WhiteFlame nodes={nodes} />
        <mesh
          name="Cylinder084"
          geometry={nodes.Cylinder084.geometry}
          material={materials.fire_log}
          position={[-1.184, -0.843, 1.42]}
          rotation={[1.78, 0, 0]}
          scale={[0.057, 0.245, 0.051]}
        />
        <mesh
          name="Cylinder085"
          geometry={nodes.Cylinder085.geometry}
          material={materials.fire_log}
          position={[-1.214, -0.843, 1.293]}
          rotation={[-1.775, 0, 0]}
          scale={[0.057, 0.245, 0.051]}
        />
        <mesh
          name="Cylinder086"
          geometry={nodes.Cylinder086.geometry}
          material={materials.fire_log}
          position={[-1.232, -0.825, 1.369]}
          rotation={[1.563, 0.209, 1.608]}
          scale={[0.057, 0.245, 0.051]}
        />
        <mesh
          name="Cylinder087"
          geometry={nodes.Cylinder087.geometry}
          material={materials.fire_log}
          position={[-1.104, -0.843, 1.344]}
          rotation={[-1.563, 0.204, -1.608]}
          scale={[0.057, 0.245, 0.051]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d/fire.glb");
