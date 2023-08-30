import { Canvas } from "@react-three/fiber";
import { OrbitControls, Enviroment, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Model } from "./Model"

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
  //const gltf = useGLTF("/scene.gltf");
  const gltf = useGLTF("/capsule_corp_night.gltf");
  const [rotationY, setRotationY] = useState(0);

  const handleScroll = () => {
    const scrollValue = window.scrollY;
    const rotationSpeed = 0.0008;
    setRotationY(rotationSpeed * -scrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas>
      <Model />
      <OrbitControls />
    </Canvas>
  );
}