import { HeroContent } from "./HeroContent";
import { CharacterStaticFallback } from "@/components/character/CharacterStaticFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-background"
    >
      <HeroContent />
      <CharacterStaticFallback />
    </section>
  );
}
