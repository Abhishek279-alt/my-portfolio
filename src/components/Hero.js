import React from "react";

const Hero = () => {
  return (
    <section
      className="portfolio-hero bg-hero shadow container-fluid"
      id="myportfolio-hero"
    >
      <div className="hero_box row p-5">
        <div id="hero_description" className="col-10 mx-auto my-3">
          <div className="fs-1 text-light fw-bold">Hello,</div>
          <div className="fs-3 text-light">
            I'm Abhishek Rajput! I am a Front-End Web Developer
          </div>
        </div>
        <div className="hero-links col-10 mx-auto my-4">
          <a href="#myportfolio_project" className="btn btn-light fs-5 me-2">
            Projects
          </a>
          <a href="/" className="btn btn-outline-light fs-5 mx-2">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
