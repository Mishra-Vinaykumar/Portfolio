// Waypoints for the scroll-driven roll: x/y are fractions of the Three.js
// viewport (applied as viewport.width * x, viewport.height * y), rotationZ
// is radians, scale is the plane size as a fraction of viewport height.
// Position/rotation/scale lerp between adjacent frames; the texture snaps
// at each integer step.
export const CHARACTER_FRAMES = [
  { key: "idle", src: "/character/vinay.png", x: 0.25, y: 0, rotationZ: 0, scale: 0.72 },
  { key: "walk", src: "/character/vinay2.png", x: 0.27, y: -0.01, rotationZ: -0.1, scale: 0.62 },
  { key: "lunge", src: "/character/vinay5.png", x: 0.29, y: -0.03, rotationZ: -0.25, scale: 0.55 },
  { key: "dive", src: "/character/vinay4.png", x: 0.31, y: -0.06, rotationZ: -0.45, scale: 0.5 },
  { key: "tumble1", src: "/character/vinay3.png", x: 0.33, y: -0.14, rotationZ: -0.7, scale: 0.46 },
  { key: "tumble2", src: "/character/vinay6.png", x: 0.34, y: -0.32, rotationZ: -1.0, scale: 0.42 },
  { key: "tumble3", src: "/character/vinay7.png", x: 0.35, y: -0.6, rotationZ: -1.4, scale: 0.4 },
] as const;

// Portion of ScrollTrigger progress used for motion; the rest fades out.
export const MOTION_PORTION = 0.85;
