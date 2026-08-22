import { SpotlightCard } from "@/components/ui/SpotlightCard";

const SOCIALS = [
  {
    name: "Gmail",
    handle: "vinaymishra9925@gmail.com",
    description: "Best way to reach me for work and collaborations.",
    href: "mailto:vinaymishra9925@gmail.com",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "vinay-mishra-992b22332",
    description: "Let's connect professionally and grow our networks.",
    href: "https://www.linkedin.com/in/vinay-mishra-992b22332/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "Mishra-Vinaykumar",
    description: "All my projects, experiments, and code live here.",
    href: "https://github.com/Mishra-Vinaykumar",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.21.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export function Connect() {
  return (
    <section id="connect" className="w-full bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Find me on
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-lg text-foreground/70">
          The places I hang out — say hi on any of them.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SOCIALS.map((social) => (
            <SpotlightCard key={social.name}>
              <a
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex h-full flex-col items-center gap-4 p-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_50%,transparent)]">
                  {social.icon}
                </span>
                <span className="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                  {social.name}
                </span>
                <span className="break-all text-sm text-foreground/60">
                  {social.handle}
                </span>
                <span className="text-sm text-foreground/50">
                  {social.description}
                </span>
                <span
                  aria-hidden
                  className="mt-auto inline-block translate-y-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Open →
                </span>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
