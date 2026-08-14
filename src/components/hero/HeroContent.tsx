"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, taglineRef.current, cueRef.current], {
        opacity: 0,
        y: 24,
      });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.8 })
        .to(
          taglineRef.current,
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .to(cueRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");

      gsap.to(cueRef.current, {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 text-center"
    >
      <h1
        ref={headingRef}
        className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
      >
        Your Name
      </h1>
      <p
        ref={taglineRef}
        className="mt-4 max-w-md text-lg text-foreground/70 sm:text-xl"
      >
        Full-Stack Developer
      </p>
      <div
        ref={cueRef}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
