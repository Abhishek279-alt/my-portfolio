import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
