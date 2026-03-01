import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Note from "./components/Note"
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Note />
      </main>
      <Footer />
    </>
  );
}