"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { useIsMobile } from "@/lib/use-is-mobile";

export function CharacterStaticFallback() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  if (!reducedMotion || isMobile) return null;

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center justify-center px-6 md:flex md:w-[45%]">
      <Image
        src="/character/vinay.png"
        alt=""
        width={440}
        height={440}
        className="h-auto w-full max-w-md"
      />
    </div>
  );
}
