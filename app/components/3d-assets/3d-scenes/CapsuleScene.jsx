import { Canvas } from "@react-three/fiber";
import { Capsule } from "../3d-models/Capsule"


export function CapsuleScene() {
  
  return (
    <Canvas>
      <Capsule />
    </Canvas>
  );
}