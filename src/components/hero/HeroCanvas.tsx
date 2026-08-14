"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroScene } from "./HeroScene";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function HeroCanvas() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <HeroScene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
