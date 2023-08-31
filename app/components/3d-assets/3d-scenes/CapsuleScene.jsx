import React, { useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Enviroment, useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Capsule } from "../3d-models/Capsule"

export function CapsuleScene() {
  return (
    <Canvas>
      <Capsule />
    </Canvas>
  );
}