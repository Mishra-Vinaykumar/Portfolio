"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CharacterPlane } from "./CharacterPlane";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { useIsMobile } from "@/lib/use-is-mobile";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CharacterMotionLayer() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const disabled = reducedMotion || isMobile;

  // Persistent trigger: outlives the Canvas so the character can come back
  // when the user scrolls up past the About boundary.
  useLayoutEffect(() => {
    if (disabled) return;

    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      endTrigger: "#about",
      end: "center top",
      onLeave: () => setVisible(false),
      onEnterBack: () => setVisible(true),
    });

    return () => trigger.kill();
  }, [disabled]);

  if (disabled) return null;

  return (
    <div ref={wrapperRef} className="pointer-events-none fixed inset-0">
      {visible && (
        <Canvas orthographic frameloop="demand" gl={{ alpha: true }}>
          <CharacterPlane fadeTargetRef={wrapperRef} />
        </Canvas>
      )}
    </div>
  );
}
