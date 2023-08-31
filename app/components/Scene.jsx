import { Canvas } from "@react-three/fiber";
import { OrbitControls, Enviroment, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Model } from "./Model"

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
  return (
    <Canvas>
      <Model />
      <OrbitControls />
    </Canvas>
  );
}