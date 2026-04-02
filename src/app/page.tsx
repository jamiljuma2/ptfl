

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import CyberSecurityProjects from "../sections/CyberSecurityProjects";
import Experience from "../sections/Experience";
import Services from "../sections/Services";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CyberSecurityProjects />
      <Experience />
      <Education />
      <Services />
      <Contact />
    </>
  );
}
