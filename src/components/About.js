import React from "react";
import myProfile from "../assets/mypic.svg";

const About = () => {
  return (
    <section id="myportfolio_about" className="p-3">
      <div className="row my-3">
        <div className="col-12 text-secondary text-center fs-2 fw-bold text-decoration-underline my-5">
          About
        </div>
      </div>
      <div className="row d-flex flex-lg-row flex-md-column flex-sm-column justify-content-lg-around align-items-center">
        <div className="col-lg-5 col-md-10 col-sm-10 my-pic mb-md-3 mb-sm-3">
          <img src={myProfile} alt="about_me" className="img-fluid" />
        </div>
        <div className="col-lg-5 col-md-10 col-sm-10 fs-4 text-lg-start text-md-center text-sm-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint
          autem corporis sequi non incidunt voluptate omnis, fugit molestiae
          neque veritatis doloremque hic ut, tenetur consequuntur ratione id
          consequatur provident. Repellat vero, asperiores esse doloremque,
          obcaecati exercitationem harum molestias provident voluptatem culpa ut
          adipisci consequatur? Porro velit modi voluptate doloribus iste nam
          facere id mollitia dolorum voluptates impedit, in assumenda blanditiis
          quod, possimus laborum?
        </div>
      </div>
    </section>
  );
};

export default About;
