import { Canvas } from "@react-three/fiber";
import { OrbitControls, Enviroment, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
    const gltf = useGLTF("/capsule_corp_night.gltf");
    const [rotationY, setRotationY] = useState(0);

    return (
        <Canvas>
            <primitive
                object={gltf.scene} rotation-y={rotationY}
            />
        </Canvas>
    );
}