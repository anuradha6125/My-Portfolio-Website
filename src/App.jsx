import Navbar from "./components/Navbar.jsx";
import RevealOnScroll from "./components/RevealOnScroll.jsx";

import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Services from "./components/Skills.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RevealOnScroll>
          <Stats />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll>
          <Services />
        </RevealOnScroll>
        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>
        <RevealOnScroll>
          <FAQ />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}

export default App;


