
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Services from "../sections/Services";
// import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
