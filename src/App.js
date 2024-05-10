import React from "react";

import Navbar from "../my-portfolio/src/components/Navbar";
import About from "../my-portfolio/src/components/About";
import Projects from "../my-portfolio/src/components/Projects";
import Contact from "../my-portfolio/src/components/Contact";
import Testimonials from "../my-portfolio/src/components/Testimonilas";
import Skills from "../my-portfolio/src/components/Skills";


export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
