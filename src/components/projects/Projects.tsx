const PLACEHOLDER_PROJECTS = [
  { name: "Project One", description: "A short description of this project goes here." },
  { name: "Project Two", description: "A short description of this project goes here." },
  { name: "Project Three", description: "A short description of this project goes here." },
];

export function Projects() {
  return (
    <section id="projects" className="w-full bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {PLACEHOLDER_PROJECTS.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-foreground/10 p-6"
            >
              <h3 className="text-lg font-medium text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
