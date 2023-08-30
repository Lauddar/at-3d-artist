import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/capsule_corp_night.gltf");
  return (
    <group {...props} dispose={null} scale={0.5}>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.floor}
        position={[36.7731, 0.0015, -13.8489]}
        rotation={[Math.PI / 2, 0, 2.7814]}
      />
      <PerspectiveCamera
        makeDefault={true}
        far={50}
        near={0.1}
        fov={22.8952}
        position={[6, 2.856, -5.1124]}
        rotation={[-45, 90, 180]}
      />
      <group position={[0.0056, 0, 0]} scale={0.965}>
        <mesh
          geometry={nodes.Sphere002_1.geometry}
          material={materials.marquesina}
        />
        <mesh
          geometry={nodes.Sphere002_2.geometry}
          material={materials.column}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.walls}
        position={[0.0887, 0, -0.0546]}
        scale={0.8982}
      />
      <pointLight
        intensity={110}
        decay={2}
        color="#70b8ff"
        position={[6.2937, 8.7347, -1.0055]}
        rotation={[-1.839, 0.6021, 1.9315]}
      />
      <pointLight
        intensity={0.1}
        decay={2}
        color="#ffe6bb"
        position={[1.0245, 0.1067, 0.0032]}
        rotation={[-1.839, 0.6021, 1.9315]}
      />
      <pointLight
        intensity={100}
        decay={2}
        color="#e2d8ff"
        position={[-8.9504, 9.9274, -5.8429]}
        rotation={[-1.839, 0.6021, 1.9315]}
      />
      <pointLight
        intensity={50}
        decay={2}
        color="#c0f5ff"
        position={[-3.9616, 1.6576, -4.5113]}
        rotation={[-1.839, 0.6021, 1.9315]}
      />
      <mesh geometry={nodes.Sphere003_1.geometry} material={materials.walls} />
      <mesh geometry={nodes.Sphere003_2.geometry} material={materials.window} />
      <mesh geometry={nodes.Sphere003_3.geometry} material={materials.door} />
      <mesh geometry={nodes.Sphere003_4.geometry} material={materials.roof} />
      <mesh geometry={nodes.Sphere004.geometry} material={materials.walls} />
      <mesh geometry={nodes.Sphere004_1.geometry} material={materials.roof} />
      <mesh geometry={nodes.Sphere004_2.geometry} material={materials.window} />
    </group>
  );
}

useGLTF.preload("/capsule_corp_night.gltf");