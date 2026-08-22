"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

export function ProjectCard({
  featured,
  children,
}: {
  featured?: boolean;
  children: ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-xl border border-foreground/10 p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--accent)_35%,transparent)] ${
        featured ? "border-accent/40 sm:col-span-2 md:col-span-3" : ""
      }`}
    >
      {/* Cursor-following spotlight glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, var(--accent) 14%, transparent), transparent 65%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
