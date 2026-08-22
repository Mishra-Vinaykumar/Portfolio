"use client";

import { useLayoutEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CHARACTER_FRAMES, MOTION_PORTION } from "./frames";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function CharacterPlane({
  fadeTargetRef,
}: {
  fadeTargetRef: React.RefObject<HTMLDivElement | null>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const texturesRef = useRef<Record<string, THREE.Texture>>({});
  const frameIndexRef = useRef(0);
  const applyCurrentTextureRef = useRef<() => void>(() => {});
  const { viewport, invalidate } = useThree();

  // Imperative texture loading: drei's suspending useTexture would bubble
  // the suspension out of the Canvas during hydration and unmount the whole
  // fixed layer, so plain TextureLoader callbacks are used instead.
  useLayoutEffect(() => {
    const loader = new THREE.TextureLoader();
    let disposed = false;

    const applyCurrentTexture = () => {
      const mesh = meshRef.current;
      const material = materialRef.current;
      if (!mesh || !material) return;
      const key = CHARACTER_FRAMES[frameIndexRef.current].key;
      const texture = texturesRef.current[key];
      if (texture && material.map !== texture) {
        material.map = texture;
        material.needsUpdate = true;
        mesh.visible = true;
        invalidate();
      }
    };
    applyCurrentTextureRef.current = applyCurrentTexture;

    for (const frame of CHARACTER_FRAMES) {
      loader.load(frame.src, (texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        texturesRef.current[frame.key] = texture;
        applyCurrentTexture();
      });
    }

    const textures = texturesRef.current;
    return () => {
      disposed = true;
      for (const key of Object.keys(textures)) {
        textures[key].dispose();
        delete textures[key];
      }
    };
  }, [invalidate]);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const applyProgress = (progress: number) => {
      const motionProgress = Math.min(progress / MOTION_PORTION, 1);
      const scaled = motionProgress * (CHARACTER_FRAMES.length - 1);
      const idx = Math.min(Math.floor(scaled), CHARACTER_FRAMES.length - 2);
      const frac = scaled - idx;
      const from = CHARACTER_FRAMES[idx];
      const to = CHARACTER_FRAMES[idx + 1];

      mesh.position.x = viewport.width * lerp(from.x, to.x, frac);
      mesh.position.y = viewport.height * lerp(from.y, to.y, frac);
      mesh.rotation.z = lerp(from.rotationZ, to.rotationZ, frac);
      const size = viewport.height * lerp(from.scale, to.scale, frac);
      mesh.scale.set(size, size, 1);

      const activeIndex = motionProgress === 0 ? 0 : Math.round(scaled);
      if (activeIndex !== frameIndexRef.current) {
        frameIndexRef.current = activeIndex;
      }
      applyCurrentTextureRef.current();

      if (fadeTargetRef.current) {
        const fade =
          progress <= MOTION_PORTION
            ? 1
            : 1 - (progress - MOTION_PORTION) / (1 - MOTION_PORTION);
        fadeTargetRef.current.style.opacity = String(Math.max(fade, 0));
      }

      invalidate();
    };

    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      endTrigger: "#about",
      end: "center top",
      scrub: 0.6,
      onUpdate: (self) => applyProgress(self.progress),
    });

    // Sync immediately so remounting mid-scroll doesn't flash the idle pose.
    applyProgress(trigger.progress);

    return () => trigger.kill();
  }, [viewport.width, viewport.height, fadeTargetRef, invalidate]);

  return (
    <mesh ref={meshRef} visible={false}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        ref={materialRef}
        transparent
        toneMapped={false}
        alphaTest={0.01}
      />
    </mesh>
  );
}
