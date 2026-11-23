import { useEffect, useState } from "react";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen">
      <Preloader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
