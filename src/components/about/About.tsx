export function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-background px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          About
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground/70">
          I&apos;m Vinay, a full-stack developer who enjoys turning real
          problems into practical tools. Right now I&apos;m working with a
          team on a CRM platform built on the MERN stack (MongoDB, Express,
          React, and Node.js), developing features across both the frontend
          and the API.
        </p>
        <p className="mt-4 text-lg leading-8 text-foreground/70">
          Along the way I&apos;ve built an AI-powered resume analyser (a
          Node.js API with a companion Chrome extension, powered by OpenAI),
          REST APIs, and this animated portfolio with Next.js and Three.js. I
          started out with Java and Flutter in college before settling into
          the JavaScript ecosystem, where I do most of my work today. I like
          clean APIs, playful interfaces, and shipping things people actually
          use.
        </p>
      </div>
    </section>
  );
}
