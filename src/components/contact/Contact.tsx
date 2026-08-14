export function Contact() {
  return (
    <section id="contact" className="w-full px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground/70">
          Interested in working together? Reach out below.
        </p>
        <a
          href="mailto:you@example.com"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          you@example.com
        </a>
      </div>
    </section>
  );
}
