import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Vector2, Spherical } from "three";
import { OrbitControlsCustom } from "../../../OrbitControlsCustom";
import { TrackballControlsCustom } from "../../../TrackballControlsCustom";

export function Capsule(props) {
  const { nodes, materials } = useGLTF("/capsule_corp_night.gltf");
  const { camera, gl } = useThree();

  const controls = new OrbitControlsCustom(camera, gl.domElement);

  //controls.dampingFactor = 0.0000005;
  //controls.enableZoom = false;

  //controls.maxAzimuthAngle = Math.PI / 2;
  //controls.minAzimuthAngle = Math.PI / 4;
  //controls.maxPolarAngle = Math.PI / 2;
  //controls.maxPolarAngle = 0;

  //console.log(controls)

  //controls.update();

  //useFrame(() => { controls.update(); })*/

  return (
    <group position={[1.2, -0.2, 0]} dispose={null}>
      <PerspectiveCamera
        makeDefault={true}
        far={100}
        near={0.1}
        fov={22.895}
        position={[8, 2.5, -5]}
        rotation={[-2.833, 0.893, 2.898]}
      />
      <group position={[0.2, 0.22, 0.46]} rotation={[-0.007, 0.297, -0.007]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.floor}
          position={[36.773, 0.001, -13.849]}
          rotation={[Math.PI / 2, 0, 2.781]}
        />
        <group position={[0.006, 0, 0]} scale={0.965}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_1.geometry}
            material={materials.marquesina}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_2.geometry}
            material={materials.column}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.walls}
          position={[0.089, 0, -0.055]}
          scale={0.898}
        />
        <pointLight
          intensity={50}
          decay={2}
          color="#70b8ff"
          position={[6.294, 8.735, -1.005]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <pointLight
          intensity={0.1}
          decay={2}
          color="#ffe6bb"
          position={[1.024, 0.107, 0.003]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <pointLight
          intensity={40}
          decay={2}
          color="#e2d8ff"
          position={[-8.95, 9.927, -5.843]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <pointLight
          intensity={50}
          decay={2}
          color="#c0f5ff"
          position={[-3.962, 1.658, -4.511]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_1.geometry}
          material={materials.walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_2.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_3.geometry}
          material={materials.door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_4.geometry}
          material={materials.roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials.walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_1.geometry}
          material={materials.roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_2.geometry}
          material={materials.window}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/capsule_corp_night.gltf");
