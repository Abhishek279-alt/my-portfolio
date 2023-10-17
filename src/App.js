import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <a
        href="#myportfolio_nav"
        className="btn btn-secondary fw-bold scroll-up"
      >
        &#8593;
      </a>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
