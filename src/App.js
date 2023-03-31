import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

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
      <Project />
      <Contact />
    </div>
  );
}

export default App;
