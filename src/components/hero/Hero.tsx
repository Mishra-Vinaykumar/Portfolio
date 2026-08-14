import { HeroCanvas } from "./HeroCanvas";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-background">
      <HeroCanvas />
      <HeroContent />
    </section>
  );
}
