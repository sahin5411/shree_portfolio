"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";

const StarfieldContent = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation
        />
      </Points>
    </group>
  );
};

const Starfield = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarfieldContent />
    </Canvas>
  );
};

export default Starfield;
