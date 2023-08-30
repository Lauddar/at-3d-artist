import { Canvas } from "@react-three/fiber";
import { OrbitControls, Enviroment, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect, useState } from "react"
import { Capsule } from "./3d-models/Capsule"

export function CapsuleScene() {
    return (
        <Canvas>
            <Capsule />
        </Canvas>
    )
}