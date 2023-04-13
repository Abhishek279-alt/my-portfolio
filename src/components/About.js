import React from "react";
import myProfile from "../assets/mypic.svg";

const About = () => {
  return (
    <section id="myportfolio_about" className="p-3 container-fluid">
      <div className="row my-3">
        <div className="col-12 text-secondary text-center fs-2 fw-bold text-decoration-underline my-5">
          About
        </div>
      </div>
      <div className="row d-flex flex-lg-row flex-md-column flex-sm-column justify-content-lg-around align-items-center">
        <div className="col-lg-5 col-md-10 col-sm-10 my-pic mb-md-3 mb-sm-3">
          <img src={myProfile} alt="about_me" className="img-fluid" />
        </div>
        <div className="col-lg-5 col-md-10 col-sm-10 fs-lg-4 font-about text-lg-start text-md-center text-sm-center">
          I am a Web Delveloper building websites and web apps. I usually work
          with React for Frontend development but also skilled in some backend
          technologies.
        </div>
      </div>
    </section>
  );
};

export default About;
