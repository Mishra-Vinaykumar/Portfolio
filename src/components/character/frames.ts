// Waypoints for the scroll-driven roll: x/y are fractions of the Three.js
// viewport (applied as viewport.width * x, viewport.height * y), rotationZ
// is radians. Position/rotation lerp between adjacent frames; the texture
// snaps at each integer step.
export const CHARACTER_FRAMES = [
  { key: "idle", src: "/character/vinay.png", x: 0.22, y: -0.02, rotationZ: 0 },
  { key: "walk", src: "/character/vinay2.png", x: 0.25, y: -0.02, rotationZ: -0.1 },
  { key: "lunge", src: "/character/vinay5.png", x: 0.28, y: -0.03, rotationZ: -0.25 },
  { key: "dive", src: "/character/vinay4.png", x: 0.31, y: -0.05, rotationZ: -0.45 },
  { key: "tumble1", src: "/character/vinay3.png", x: 0.33, y: -0.12, rotationZ: -0.7 },
  { key: "tumble2", src: "/character/vinay6.png", x: 0.34, y: -0.3, rotationZ: -1.0 },
  { key: "tumble3", src: "/character/vinay7.png", x: 0.35, y: -0.58, rotationZ: -1.4 },
] as const;

export const CHARACTER_PLANE_HEIGHT_FRACTION = 0.38;

// Portion of ScrollTrigger progress used for motion; the rest fades out.
export const MOTION_PORTION = 0.85;
