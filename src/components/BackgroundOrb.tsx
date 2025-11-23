"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  PerspectiveCamera,
} from "@react-three/drei";

export default function BackgroundOrbDual(): React.JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on client
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 opacity-[0.7]">
      <Canvas>
        {/* Camera changes depending on mobile */}
        <PerspectiveCamera
          makeDefault
          position={[0, 0, isMobile ? 8 : 6]} // zoom out a bit on mobile
          fov={isMobile ? 55 : 50}
        />

        <ambientLight intensity={0.5} />

        <Float speed={2} rotationIntensity={1} floatIntensity={1.3}>
          {/* Outer holographic shell */}
          <Sphere
            args={[isMobile ? 1.6 : 2.2, 64, 64]} // <-- tamaño responsivo
          >
            <meshStandardMaterial
              color="#4d7cfe"
              wireframe
              transparent
              opacity={0.25}
            />
          </Sphere>

          {/* Liquid inner sphere */}
          <Sphere
            args={[isMobile ? 1.1 : 1.5, 64, 64]} // <-- tamaño responsivo
          >
            <MeshDistortMaterial
              color="#4d7cfe"
              distort={0.45}
              speed={2.2}
              metalness={1}
              roughness={0.05}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
