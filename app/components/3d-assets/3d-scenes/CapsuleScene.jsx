import React, { useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Capsule } from "../3d-models/Capsule"
import { TrackballControls } from "@react-three/drei";


export function CapsuleScene() {
  
  return (
    <Canvas>
      <Capsule />
      <TrackballControls />
    </Canvas>
  );
}