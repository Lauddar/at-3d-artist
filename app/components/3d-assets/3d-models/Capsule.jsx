import React from "react";
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three';

export function Capsule(props) {
  const { nodes, materials } = useGLTF("/capsule_corp_night.gltf");
  const { camera } = useThree();

  const mouse = new THREE.Vector2();
  const target = new THREE.Vector2();
  const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

  document.addEventListener('mousemove', onMouseMove, false);

  function onMouseMove(event) {
    mouse.x = (event.clientX - windowHalf.x);
    mouse.y = (event.clientY - windowHalf.y);
  }

  useFrame(() => {
    target.x = (1 - mouse.x) * 0.0002;
    target.y = (1 - mouse.y) * 0.0002;

    camera.rotation.y = THREE.MathUtils.degToRad(50 * (camera.rotation.y + (target.x - camera.rotation.y)));
    camera.rotation.x = THREE.MathUtils.degToRad(25 * (camera.rotation.x + (target.y - camera.rotation.x)));

    camera.position.x = 3 + 10 * (camera.position.x + (target.x - camera.position.x));
    camera.position.y = 1.54 + 5 * (camera.position.y + (-target.y - camera.position.y));
  });

  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={500}
        position={[3, 1.54, 10]}
        rotation={[0, 0, 0]}
      />
      <group rotation={[Math.PI, -1.309, Math.PI]} scale={2.5}>
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
          intensity={150}
          decay={2}
          color="#70b8ff"
          position={[6.294, 8.735, -1.005]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <pointLight
          intensity={0.5}
          decay={2}
          color="#ffe6bb"
          position={[1.024, 0.107, 0.003]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <pointLight
          intensity={120}
          decay={2}
          color="#e2d8ff"
          position={[-8.95, 9.927, -5.843]}
          rotation={[-1.839, 0.602, 1.932]}
        />
        <pointLight
          intensity={120}
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
