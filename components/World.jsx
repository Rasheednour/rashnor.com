/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/3d/world.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


import * as THREE from 'three';
import { Monitor } from './Monitor';
import { Fire } from './Fire';
export function World(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3d/world.glb')
  const { actions } = useAnimations(animations, group)
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: "rgb(77,96,167)"
});
  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action.play();
    });
  }, []);
  
  return (
    
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="posters" position={[0.054, 0.177, -0.396]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.168, 1, 0.233]} />
        <group name="walls&floor001" position={[0, -0.476, 0]} rotation={[0, 1.571, 0]} />
        <mesh name="rocks" geometry={nodes.rocks.geometry} material={materials.rock} position={[-2.83, -0.88, -2.03]} rotation={[Math.PI, -1.426, Math.PI]} scale={[0.335, 0.366, 0.353]} />
        <group name="plants" position={[0.808, -0.745, 2.11]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants001" position={[-0.355, -0.783, 2.884]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants002" position={[-0.42, -0.884, 1.723]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants003" position={[-1.726, -0.834, 0.573]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants004" position={[-3.403, -0.714, 1.656]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants005" position={[1.374, -0.87, -0.164]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants006" position={[2.107, -0.791, -0.514]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants007" position={[0.525, -1.069, -1.825]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants008" position={[-0.73, -0.991, -2.021]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants009" position={[-3.02, -0.889, -0.845]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants010" position={[-4.387, -0.698, -1.036]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants011" position={[-6.02, -0.885, -3.224]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants012" position={[-3.534, -0.844, -2.683]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants013" position={[-8.171, -0.908, -4.363]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants014" position={[-7.579, -0.905, -2.016]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants016" position={[-1.855, -0.883, -3.857]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants017" position={[2.022, -0.893, -2.07]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants018" position={[0.987, -0.889, 0.12]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants020" position={[-0.901, -0.848, 2.425]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants021" position={[-2.11, -0.692, 1.518]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants022" position={[-3.433, -0.703, -0.162]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants024" position={[-1.673, -0.851, -4.367]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants025" position={[-3.286, -0.825, -3.938]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants026" position={[-1.198, -0.923, -1.406]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <group name="plants015" position={[-0.318, -1.074, -3.261]}>
          <mesh name="NurbsPath013" geometry={nodes.NurbsPath013.geometry} material={materials.green_plant} />
          <mesh name="NurbsPath013_1" geometry={nodes.NurbsPath013_1.geometry} material={materials.rose_emissive} />
        </group>
        <mesh name="earth" geometry={nodes.earth.geometry} material={materials.ground} position={[-4.452, -0.956, -3.564]} scale={[26.298, 1, 27.06]} />
        <mesh name="lake" geometry={nodes.lake.geometry} material={waterMaterial} position={[-5.511, -1.75, -3.538]} scale={[2.834, 3.904, 2.472]}>

        </mesh>
        <group name="tree_13001" position={[-2.473, -0.771, 1.171]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13002" position={[-1.396, -0.964, 2.799]} rotation={[0, 0.205, -Math.PI]} scale={[-0.78, -1, -0.985]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13003" position={[-4.959, -0.741, 1.094]} rotation={[-Math.PI, 0.552, -Math.PI]} scale={[0.78, 1, 0.917]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13004" position={[-5.706, -0.808, -0.224]} rotation={[-Math.PI, 0.528, -Math.PI]} scale={[1.162, 1.411, 1.305]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13005" position={[-3.325, -0.941, -1.165]} rotation={[0, -1.15, 3.115]} scale={[-0.857, -1.099, -1.008]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13006" position={[-2.683, -0.951, -2.955]} rotation={[Math.PI, -1.455, 0]} scale={[-0.857, -1.099, -1.008]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13007" position={[-0.78, -1.026, -3.266]} rotation={[0, 1.412, -Math.PI]} scale={[-1.08, -1.373, -1.26]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13008" position={[0.876, -1.226, -2.275]} rotation={[0, -1.464, -Math.PI]} scale={[-0.857, -1.099, -1.008]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13009" position={[2.907, -0.857, -0.254]} rotation={[Math.PI, -1.522, 0]} scale={[-0.857, -1.099, -1.008]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13010" position={[3.169, -0.867, -1.814]} rotation={[0, 0.921, 0]} scale={[0.857, 1.099, 1.008]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13011" position={[1.545, -1.249, -4.463]} rotation={[Math.PI, -1.186, Math.PI]} scale={[1.145, 1.469, 1.347]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="tree_13012" position={[-1.189, -1.446, -6.117]} rotation={[Math.PI, -1.365, Math.PI]} scale={[1.246, 1.597, 1.465]}>
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.tree_bush} />
          <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials.tree_trunk} />
        </group>
        <group name="avatar" position={[-0.504, -0.228, 0.546]} rotation={[-0.049, 0.408, 0.277]} scale={[1, 0.942, 1]}>
          <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials.hair_black} />
          <mesh name="Plane005_1" geometry={nodes.Plane005_1.geometry} material={materials.skin} />
          <mesh name="Plane005_2" geometry={nodes.Plane005_2.geometry} material={materials.hair_grey} />
          <mesh name="Plane005_3" geometry={nodes.Plane005_3.geometry} material={materials.bronze} />
        </group>
        <group name="book_shelves" position={[0.014, 0.092, -0.608]} rotation={[0, 1.571, 0]}>
          <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials.white} />
          <mesh name="Cube036_1" geometry={nodes.Cube036_1.geometry} material={materials.star_wars_cover} />
          <mesh name="Cube036_2" geometry={nodes.Cube036_2.geometry} material={materials.monkey_island_cover} />
          <mesh name="Cube036_3" geometry={nodes.Cube036_3.geometry} material={materials.old_book} />
          <mesh name="Cube036_4" geometry={nodes.Cube036_4.geometry} material={materials.two_towers} />
          <mesh name="Cube036_5" geometry={nodes.Cube036_5.geometry} material={materials.forest} />
          <mesh name="Cube036_6" geometry={nodes.Cube036_6.geometry} material={materials.sorcery} />
        </group>
        <group name="chair" position={[-0.396, -0.511, 0.511]} rotation={[Math.PI / 2, 0, -0.525]} scale={0.252}>
          <mesh name="Cylinder090" geometry={nodes.Cylinder090.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cylinder090_1" geometry={nodes.Cylinder090_1.geometry} material={materials.metal_black} />
          <mesh name="Cylinder090_2" geometry={nodes.Cylinder090_2.geometry} material={materials.brown_wood} />
        </group>
        <mesh name="walls&floor" geometry={nodes['walls&floor'].geometry} material={materials.wall_material} position={[0, -0.476, 0]} rotation={[0, 1.571, 0]} />
        <group name="lamps" position={[-0.081, -0.125, 0.042]} rotation={[-1.484, 1.571, 0]} scale={0.041}>
          <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials.emission} />
          <mesh name="Sphere003_1" geometry={nodes.Sphere003_1.geometry} material={materials.white_glass} />
        </group>
        <group name="NES" position={[0.408, -0.198, -0.338]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.008, -0.001, -0.003]}>
          <mesh name="Cube193" geometry={nodes.Cube193.geometry} material={materials.white} />
          <mesh name="Cube193_1" geometry={nodes.Cube193_1.geometry} material={materials.rough_plastic_white} />
          <mesh name="Cube193_2" geometry={nodes.Cube193_2.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube193_3" geometry={nodes.Cube193_3.geometry} material={materials.plastic_red} />
          <mesh name="Cube193_4" geometry={nodes.Cube193_4.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube193_5" geometry={nodes.Cube193_5.geometry} material={materials.grey} />
          <mesh name="Cube193_6" geometry={nodes.Cube193_6.geometry} material={materials.rough_plastic_dark_grey} />
          <mesh name="Cube193_7" geometry={nodes.Cube193_7.geometry} material={materials.red_light} />
          <mesh name="Cube193_8" geometry={nodes.Cube193_8.geometry} material={materials.rough_plastic_white_logo} />
        </group>
        <mesh name="pc_monitor" geometry={nodes.pc_monitor.geometry} material={nodes.pc_monitor.material} position={[0.002, 0.086, -0.3]}>
          <Monitor  isAtPC={props.isAtPC}/>
        </mesh>
        <group name="office_plants" position={[-0.739, -0.068, 0.22]} rotation={[0, 1.571, 0]} scale={0.647}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.brown_wood} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.earth} />
          <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials.green_plant} />
        </group>
        <group name="office_plants001" position={[-0.739, -0.068, 0.22]} rotation={[0, 1.571, 0]} scale={0.647}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.brown_wood} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.earth} />
          <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials.green_plant} />
        </group>
        <group name="office_plants002" position={[0.744, 0.134, -0.61]} rotation={[0, 1.571, 0]} scale={0.647}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.brown_wood} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.earth} />
          <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials.green_plant} />
        </group>
        <group name="pc&floppies" position={[0.115, 0.014, -0.371]}>
          <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials.rough_plastic_beige} />
          <mesh name="Plane015_1" geometry={nodes.Plane015_1.geometry} material={materials.rough_plastic_dark_beige} />
          <mesh name="Plane015_2" geometry={nodes.Plane015_2.geometry} material={materials.rough_plastic_GREY} />
          <mesh name="Plane015_3" geometry={nodes.Plane015_3.geometry} material={materials.metalic_light_grey} />
        </group>
        <group name="table_pens" position={[0.212, -0.155, -0.322]} rotation={[0, 1.571, 0]}>
          <mesh name="Cone008" geometry={nodes.Cone008.geometry} material={materials.pencil} />
          <mesh name="Cone008_1" geometry={nodes.Cone008_1.geometry} material={materials.pencil_tip} />
          <mesh name="Cone008_2" geometry={nodes.Cone008_2.geometry} material={materials.pen_holder} />
        </group>
        <group name="VCR" position={[-0.467, -0.175, -0.445]} rotation={[0, -1.571, 0]} scale={[0.056, 0.383, 0.466]}>
          <mesh name="Cube053" geometry={nodes.Cube053.geometry} material={materials.rough_plastic_beige} />
          <mesh name="Cube053_1" geometry={nodes.Cube053_1.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube053_2" geometry={nodes.Cube053_2.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube053_3" geometry={nodes.Cube053_3.geometry} material={materials.gold_text} />
          <mesh name="Cube053_4" geometry={nodes.Cube053_4.geometry} material={materials.monitor_glass} />
        </group>
        <group name="my_book" position={[-0.238, -0.16, 0.55]}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.white} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.old_book} />
        </group>
        <mesh name="avatar001" geometry={nodes.avatar001.geometry} material={materials.hair_black} position={[-0.45, 0.188, 0.553]} rotation={[-0.049, 0.408, 0.277]} scale={[1, 0.942, 1]} />
        <group name="stickies" position={[0.225, -0.019, -0.376]}>
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials.sticky_yellow_scribbles} />
          <mesh name="Plane004_1" geometry={nodes.Plane004_1.geometry} material={materials.sticky_blue_scribbles} />
          <mesh name="Plane004_2" geometry={nodes.Plane004_2.geometry} material={materials.sticky_green_scribbles} />
          <mesh name="Plane004_3" geometry={nodes.Plane004_3.geometry} material={materials.sticky_pink} />
        </group>
        <group name="Cartridges" position={[0.549, -0.172, -0.386]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.008, -0.001, -0.003]}>
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.rough_plastic_dark_grey} />
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.megaman} />
          <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={materials.ff_nes} />
          <mesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials.mario} />
          <mesh name="Cube005_4" geometry={nodes.Cube005_4.geometry} material={materials.metroid} />
          <mesh name="Cube005_5" geometry={nodes.Cube005_5.geometry} material={materials.zelda_snes} />
        </group>
        <group name="cup" position={[0.724, -0.176, -0.199]} rotation={[0, 1.571, 0]} scale={[1, 1, 0.932]}>
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.white} />
          <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials.smooth_plastic_black} />
        </group>
        <group name="VCR002" position={[-0.641, -0.143, -0.569]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.arch_glass} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.white} />
        </group>
        <group name="VCR003" position={[-0.667, -0.143, -0.569]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.arch_glass} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.white} />
        </group>
        <group name="VCR004" position={[-0.462, -0.132, -0.412]} rotation={[0, -0.381, Math.PI / 2]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.arch_glass} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.white} />
        </group>
        <group name="VCR005" position={[-0.294, -0.143, -0.569]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.arch_glass} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.white} />
        </group>
        <group name="VCR006" position={[-0.27, -0.143, -0.569]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.arch_glass} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.white} />
        </group>
        <group name="VCR007" position={[-0.429, -0.198, -0.259]} rotation={[0, 0.345, Math.PI / 2]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.arch_glass} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.white} />
        </group>
        <group name="VCR008" position={[-0.295, -0.151, -0.4]} rotation={[0, 0, 0.529]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.smooth_plastic_black} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.smooth_plastic_grey} />
          <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.arch_glass} />
          <mesh name="Cube008_3" geometry={nodes.Cube008_3.geometry} material={materials.white} />
        </group>
        <mesh name="posters001" geometry={nodes.posters001.geometry} material={materials.final_fantasy} position={[0.593, 0.204, -0.673]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.168, 1, 0.233]} />
        <mesh name="posters002" geometry={nodes.posters002.geometry} material={materials.mega_man} position={[0.301, 0.217, -0.673]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.168, 1, 0.233]} />
        <mesh name="posters003" geometry={nodes.posters003.geometry} material={materials.monkey_island} position={[-0.057, 0.216, -0.673]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.168, 1, 0.233]} />
        <mesh name="posters004" geometry={nodes.posters004.geometry} material={materials.b2f} position={[-0.493, 0.235, -0.673]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.168, 1, 0.233]} />
        <mesh name="posters005" geometry={nodes.posters005.geometry} material={materials.et} position={[-0.678, 0.175, -0.287]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.168, 1, 0.233]} />
        <group name="book_shelves001" position={[0.014, 0.092, -0.608]} rotation={[0, 1.571, 0]}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.brown_wood} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.white_wood} />
        </group>
        <mesh name="walls&floor002" geometry={nodes['walls&floor002'].geometry} material={materials.carpet} position={[0, -0.476, 0]} rotation={[0, 1.571, 0]} />
        <mesh name="walls&floor003" geometry={nodes['walls&floor003'].geometry} material={materials.window_frame} position={[-0.75, 0.132, 0.458]} rotation={[0, 1.571, 0]} />
        <mesh name="book_shelves002" geometry={nodes.book_shelves002.geometry} material={materials.bronze} position={[0.076, -0.546, -0.045]} rotation={[0, 1.571, 0]} />
        <group name="pc&floppies001" position={[0.115, 0.014, -0.371]}>
          <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials.white_striped_paper} />
          <mesh name="Plane014_1" geometry={nodes.Plane014_1.geometry} material={materials.floppy_disk_black} />
          <mesh name="Plane014_2" geometry={nodes.Plane014_2.geometry} material={materials.silver_metal} />
          <mesh name="Plane014_3" geometry={nodes.Plane014_3.geometry} material={materials.floppy_disk_blue} />
        </group>
        <mesh name="pc&floppies002" geometry={nodes['pc&floppies002'].geometry} material={materials.green_emission} position={[0.115, 0.014, -0.371]} />
        <mesh name="avatar002" geometry={nodes.avatar002.geometry} material={materials['black tshirt']} position={[-0.504, -0.228, 0.546]} rotation={[-0.049, 0.408, 0.277]} scale={[1, 0.942, 1]} />
        <mesh name="avatar003" geometry={nodes.avatar003.geometry} material={materials.grey_dark} position={[-0.504, -0.228, 0.546]} rotation={[-0.049, 0.408, 0.277]} scale={[1, 0.942, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d/world.glb')
