import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { Connect } from "@/components/connect/Connect";
import { CharacterMotionLayer } from "@/components/character/CharacterMotionLayer";

export default function Home() {
  return (
    <>
      <CharacterMotionLayer />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Connect />
    </>
  );
}
