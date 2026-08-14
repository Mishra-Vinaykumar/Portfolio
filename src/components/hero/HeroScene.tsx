"use client";

import { useMemo, useRef, useSyncExternalStore } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

const FALLBACK_ACCENT_COLOR = "#6366f1";

function subscribeNoop() {
  return () => {};
}

function getAccentColorSnapshot() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim() || FALLBACK_ACCENT_COLOR
  );
}

function getAccentColorServerSnapshot() {
  return FALLBACK_ACCENT_COLOR;
}

export function HeroScene({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const accentColor = useSyncExternalStore(
    subscribeNoop,
    getAccentColorSnapshot,
    getAccentColorServerSnapshot,
  );

  useFrame((_, delta) => {
    if (!reducedMotion && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  const floatProps = useMemo(
    () =>
      reducedMotion
        ? { enabled: false }
        : { speed: 1.2, rotationIntensity: 0.4, floatIntensity: 0.6 },
    [reducedMotion],
  );

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <Float {...floatProps}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.4, 1]} />
          <MeshDistortMaterial
            color={accentColor}
            distort={reducedMotion ? 0.15 : 0.35}
            speed={reducedMotion ? 0 : 1.5}
            roughness={0.15}
            metalness={0.6}
          />
        </mesh>
      </Float>
    </>
  );
}
